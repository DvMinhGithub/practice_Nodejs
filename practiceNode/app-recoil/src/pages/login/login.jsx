import { Tabs } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { loadingState } from '../../recoil/store/app';
import { useSetRecoilState } from 'recoil';
import { useRef } from 'react';
import callApi from '../../config/axios';
import { STORE } from '../../contants';
import { accessTokenState } from '../../recoil/store/account';
import { showNotification } from '../../utils'

const LoginPage = () => {
  const setPageLoading = useSetRecoilState(loadingState);
  const setAccessToken = useSetRecoilState(accessTokenState);

  const usernameRef = useRef()
  const passwordRef = useRef()
  const handleLogin = () => {
    const username = usernameRef.current.input.value
    const password = passwordRef.current.input.value
    const url = `${STORE.authUrl}/login`
    setPageLoading(true)
    callApi('post', url, { username, password })
      .then(res => {
        if (res.success) {
          setAccessToken(res.token);
          showNotification('success', res.message);
        }
        setPageLoading(false);
      })
      .catch((error) => {
        showNotification('error', error.message);
        setPageLoading(false);
      });
  }
  const items = [
    {
      key: '1',
      label: `Sign in`,
      children: <Form>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username" ref={usernameRef}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password" ref={passwordRef}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="#!" style={{ float: "right" }}>
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%" }}
            onClick={() => handleLogin()}>
            Log in
          </Button>
          Or <a href="#!">register now!</a>
        </Form.Item>
      </Form>
    },
    {
      key: '2',
      label: `Sign up`,
      children: `Content of Tab Pane 2`,
    },
  ];
  return (
    <>
      <div style={{ "maxWidth": "360px", "margin": "auto", "padding": "42px 24px 50px" }}>
        <Tabs defaultActiveKey="1" centered items={items} >
        </Tabs>
      </div>
    </>
  )
}

export default LoginPage