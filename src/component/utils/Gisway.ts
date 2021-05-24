export default class Gisway {

    /**
     * 设置缩放--------------------------------------------------
     */
    public static setZoom = () => {
        // let width = (window.innerWidth) ? window.innerWidth : ((document.body) && (document.body.clientWidth)) ? document.body.clientWidth : 0;
        let height = (window.innerHeight) ? window.innerHeight : ((document.body) && (document.body.clientHeight)) ? document.body.clientHeight : 0;
        let zoom = height / 1080;
        return zoom;
    };

    /**
     * 设置全屏--------------------------------------------------
     * @param state true:开启 false:关闭
     */
    public static onFullScreen(state: boolean) {
        let dom: any = document.documentElement;
        let winDom: any = document;
        let states = state;
        if (states === true) {
            if (dom.requestFullScreen) {
                dom.requestFullScreen();
            } else if (dom.webkitRequestFullScreen) {
                dom.webkitRequestFullScreen();
            } else if (dom.mozRequestFullScreen) {
                dom.mozRequestFullScreen();
            } else if (dom.msRequestFullScreen) {
                dom.msRequestFullScreen();
            }
        } else if (states === false) {
            if (winDom.cancelFullScreen) {
                winDom.cancelFullScreen();
            } else if (winDom.webkitCancelFullScreen) {
                winDom.webkitCancelFullScreen();
            } else if (winDom.mozCancelFullScreen) {
                winDom.mozCancelFullScreen();
            } else if (winDom.msCancelFullScreen) {
                winDom.msCancelFullScreen();
            }
        }
    }

    /**
     * 时间日期-------------------------------------------------
     */
    // const getTimeFromData = data =>data.toTimeString().slice(0,8);
    // let time = getTimeFromData(new Date());
    // console.log(time)
    public static times = () => {
        let date = new Date();
        // let year: any = date.getFullYear();             //获取当前年份   
        let mon: any = date.getMonth() + 1;             //获取当前月份   
        let da: any = date.getDate();                   //获取当前日   
        // let day = date.getDay();                //获取当前星期几   
        let h: any = date.getHours();              //获取小时   
        let m: any = date.getMinutes();            //获取分钟   
        let s: any = date.getSeconds();            //获取秒   
        if (mon < 10) mon = "0" + mon;
        if (da < 10) da = "0" + da;
        if (s < 10) s = "0" + s;
        if (h < 10) h = "0" + h;
        if (m < 10) m = "0" + m;
        // return `${year}年${mon}月${da}日 ${h}:${m}:${s}`;
        return `${h}:${m}:${s}`;
    }

    /**
     * 获取相机看相点----------------------------------------------
     */
    public static info() {
        window['engine'].Api.Camera.info((a, b) => {
            console.log(b);
        });
    }

    /**
     * 单点飞行---------------------------------------------------
     * @param point1 position x
     * @param point2 position y
     * @param point3 position z
     * @param target1 target x
     * @param target2 target y
     * @param target3 target z
     */
    public static flyTo(point1, point2, point3, target1, target2, target3,callback?) {
        let point = new window['engine'].Api.Type.Vector3(point1, point2, point3, "4326");
        let target = new window['engine'].Api.Type.Vector3(target1, target2, target3, "4326");
        window['engine'].Api.Camera.flyTo({ point: point, target: target, time: 2, }, () => {
            callback()
        });
    }

    /**
     * 气泡------------------------------------------------------
     * @param objType objType
     * @param id id
     * @param content 内容
     */
    public static setPop(objType, id, content) {
        window['engine'].Api.Pop.setPop({ objType: objType, id: id }, (result) => {
            let div = document.createElement('div');
            div.appendChild(content);
            result.appendChild(div);
        });
    }

    /**
     * 关闭气泡---------------------------------------------------
     * @param objType objType
     * @param id id
     */
    public static clearPop(objType, id) {
        window['engine'].Api.Pop.clearPop({ objType: objType, id: id });
    }

    /**
     * 漫游飞行---------------------------------------------------
     * @param id 飞行路径id
     * @param time 飞行时间
     */
    public static onRoam(id, time) {
        window['engine'].Api.Camera.cameraFlyLinesTo({ pathId: id, duration: time, unreset: true }, () => {

        });
    }

    /**
     * 停止漫游飞行------------------------------------------------
     */
    public static stopRoam() {
        window['engine'].Api.Camera.stopTween();
    }

    /**
     * 场景切换（白天黑夜）------------------------------------------
     * @param id 场景id
     */
    public static switchToEffect(id) {
        window['engine'].Api.Camera.switchToEffect({ effectID: id }, () => { });
    }

    /**
     * 图层显示隐藏（可控制多个多个）---------------------------------
     * @param name 图层名称（可传数组）
     * @param state true:显示 false:隐藏
     */
    public static layerSwitch(name: any, state: boolean) {
        window['engine'].Api.Layers.showLayer({
            objTypes: [name],
            show: state,
        });
    }

    /**
     * 对象模型显示隐藏---------------------------------------------
     * @param objType objType
     * @param id id（可传数组）
     * @param state true:显示 false:隐藏
     */
    public static modelSwitch(objType: any, id: any, state: boolean) {
        window['engine'].Api.MeshInfo.setVisible({
            objType: objType,
            id: [id],
            visible: state
        });
    }

    /**
     * 动画开启停止-------------------------------------------------
     * @param objType objType
     * @param id id
     * @param state true:开启 false:停止
     */
    public static doAnim(objType: any, id: any, state: boolean) {
        window['engine'].Api.Models.doAnim({ objType: objType, id: id, play: state })
    }

    /**
     * 移动模型----------------------------------------------------
     * @param objType objType
     * @param id id
     * @param point 坐标
     */
    public static doMove(objType: any, id: any, point: any) {
        let axis = new window['engine'].Api.Type.Vector3(point);
        window['engine'].Api.MeshInfo.doMeshMove({ objType: objType, id: id, nodes: [axis], duration: 0 })
    }

    /**
     * 旋转模型----------------------------------------------------
     * @param objType objType
     * @param id id
     * @param xyz 选择旋转轴
     * @param sum 旋转度数
     */
    public static doModelRotate(objType: any, id: any, xyz: any, sum: any) {
        window['engine'].Api.MeshInfo.doMeshRotation({ objType: objType, id: id, xyz: xyz, value: sum }, () => { })
    }

    /**
     * 旋转模型----------------------------------------------------
     * @param objType objType
     * @param id id
     * @param speed 速度
     * @param top 上升高度
    */
    public static moveAnimation(objType, id, speed, top) {
        window['engine'].Api.MeshInfo.getInfo({
            objType: objType,
            id: id
        }, (a, b) => {
            let axisData = JSON.parse(a).shapes[0];
            let axis = new window['engine'].Api.Type.Vector3(axisData.x, axisData.y, axisData.z + top);
            window['engine'].Api.MeshInfo.doMeshMove({ objType: objType, id: id, nodes: [axis], duration: speed, needDirection: false })
        });
    }

}