import { Avatar, Icon, Layout, Menu, Dropdown } from 'antd';
import * as React from 'react';
import './MainFrame.css';
import ModuleManage from './modules/ModuleManage';
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default class MainFrame extends React.Component<{ match: any, history: any }> {
    private moduleName: string = '';
    state = {
        collapsed: false,
    }

    componentDidMount() {
        this.moduleName = 'Dept';
        this.forceUpdate();
    }

    /**模块切换 */
    private loadModule(name) {
    }

    private onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    private dropMenuClick = (v) => {
        console.log(v);
        if (v.key === "loginOut") {
            this.props.history.push("/");
        }
    };
    private menuClick = (v) => {
        this.moduleName = v.key;
        this.forceUpdate();
    };
    public render() {
        const menu = (
            <Menu className="dropMenu" onClick={this.dropMenuClick}>
                <Menu.Item key="passWord">
                    修改密码
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="loginOut">
                    退出登录
                </Menu.Item>
            </Menu>
        );
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Header style={{ width: '100%', background: '#000', padding: 0, height: 50 }} >
                    <Dropdown overlay={menu} trigger={['click']}>
                        <div className="userAvatar">
                            <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                            <span>User</span>
                        </div>
                    </Dropdown>

                </Header>
                <Layout>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['Dept']} mode="inline" onClick={this.menuClick}>
                            <Menu.Item key="Dept">
                                <Icon type="pie-chart" />
                                <span>Dept</span>
                            </Menu.Item>
                            <Menu.Item key="Role">
                                <Icon type="desktop" />
                                <span>Role</span>
                            </Menu.Item>
                            <SubMenu
                                key="User"
                                title={
                                    <span>
                                        <Icon type="user" />
                                        <span>User</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="Tom">Tom</Menu.Item>
                                <Menu.Item key="Bill">Bill</Menu.Item>
                                <Menu.Item key="Alex">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="Team"
                                title={
                                    <span>
                                        <Icon type="team" />
                                        <span>Team</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="TeamA">TeamA</Menu.Item>
                                <Menu.Item key="TeamB">TeamB</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="Library">
                                <Icon type="file" />
                                <span>Library</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Content style={{ margin: '0 16px' }}>
                        {ModuleManage.initModuleClass(this.moduleName)}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}