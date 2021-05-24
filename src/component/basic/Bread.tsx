import * as React from 'react';
import { Breadcrumb } from 'antd';

/**面包屑 */
export default class Bread extends React.Component<{ breadData: Array<string> }> {

    private initBreadCrumb(data) {
        return (
            data.map((ele, index) => {
                return (
                    <Breadcrumb.Item key={index}>{ele}</Breadcrumb.Item>
                )
            })
        )
    }

    render() {
        return (
            <>
                {this.props.breadData ? <Breadcrumb style={{ margin: '16px 0' }}>
                    {this.initBreadCrumb(this.props.breadData)}
                </Breadcrumb> : null}
            </>
        )
    }
}