import * as React from 'react';
import Bread from './../basic/Bread';

export default class Library extends React.Component<{}> {
    private breadData: Array<string> = [];

    componentDidMount() {
        this.breadData = ['Home', 'Library'];
        this.forceUpdate();
    }
    render() {
        return (
            <>
                <Bread breadData={this.breadData} />
                <div style={{ padding: 24, background: '#fff', minHeight: 'calc(100vh - 143px)' }}>Library</div>
            </>
        )
    }
}