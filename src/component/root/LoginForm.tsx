import * as React from 'react';
import './LoginForm.css';
import { Form, Input, Button } from 'antd';

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};

class Login extends React.Component<{ form: any, history: any }> {
    state = {
        checkNick: false,
    };


    private check = () => {
        this.props.form.validateFields(err => {
            if (!err) {
                this.props.history.push("/");
            }
        });
    };

    private handleChange = e => {
        this.setState(
            { checkNick: e.target.checked, },
            () => {
                this.props.form.validateFields(['nickname']);
            },
        );
    };

    public render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="loginForm">
                <Form.Item {...formItemLayout} label="Name">
                    {getFieldDecorator('username', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your name',
                            },
                        ],
                    })(<Input placeholder="Please input your name" />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Nickname">
                    {getFieldDecorator('nickname', {
                        rules: [
                            {
                                required: this.state.checkNick,
                                message: 'Please input your nickname',
                            },
                        ],
                    })(<Input placeholder="Please input your nickname" />)}
                </Form.Item>
                <Form.Item {...formTailLayout}>
                    <Button type="primary" onClick={this.check}>
                        Check
                     </Button>
                </Form.Item>
            </div>
        );
    }
}

const LoginForm = Form.create({})(Login);
export { LoginForm }