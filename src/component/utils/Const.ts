
export default class Const {
    /** 模块权限 */
    public static ModuleRole = {
        Edit: '1',
        Query: '0'
    }
    /** 后端访问地址 */
    // public static RemotePath = "http://localhost:9001";
    public static RemotePath = "http://localhost:9000";
    public static SysToken = "";
    /** 系统标题高度 */
    public static SysTitleHeight = "40px";
    /*** 数据库查询条件*/
    public static GridQueryCondition = {
        /**字段匹配 */
        QueryLike: 'qry_like_',
        /**时间字段 >= */
        QueryDateMin: 'qry_min_',
        /**qry_max_  时间字段 <= */
        QueryDateMax: 'qry_max_',
        /*          *数值>= */
        QueryNumberMin: 'qry_int_min_',
        /** 数值<= */
        QueryNumberMax: 'qry_int_max_',
        /** 字段  = */
        QueryEqual: 'qry_',
    };
    public static MapLayer = {
        /** 管网 */
        Pipeline: 'Pipeline',
        /** 资源 */
        Resources:'Resources',
        /** 消防 */
        FireControl:'FireControl',
        /** 能源 */
        Energy:'Energy',
        /** 安防 */
        Monitor:'Monitor',
        /** 园区监控 */
        ParkMonitor:'ParkMonitor',
        /** 电网 */
        PowerGrid:'PowerGrid',

    }
    //public static MapApi = window['engine']['Api'];

}