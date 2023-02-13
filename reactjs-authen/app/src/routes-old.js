import React from 'react';
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import * as page from './pages';
import history from './history'
var token = localStorage.getItem('token')
var role = localStorage.getItem('role')
const Routes = () => (
    <div className="content">
        {
            console.warn(`role: ` + role)
        }
        <Router history={history}>
            <Switch>
                <Route exact path="/" >
                    {token
                        ? <Redirect to={`${role === 'admin' ? '/admin' : '/user'}`} />
                        : <page.LoginPage />}
                </Route>
                <Route exact path="/signup" component={page.SignUpPage}></Route>
                <Route exact path='/user'>
                    {() => {
                        if (token) {
                            if (role === 'user') {
                                return (<page.UserPage />)
                            } else if (role === 'admin') {
                                alert('Bạn không có quyền truy cập')
                                return (<Redirect to='/admin' />)
                            }
                        } else {
                            alert('Bạn không có quyền truy cập')
                            return (<Redirect to='/' />)
                        }
                    }}
                </Route>
                <Route exact path='/admin'>
                    {() => {
                        if (token) {
                            if (role === 'admin') {
                                return (<page.AdminPage />)
                            } else if (role === 'user') {
                                alert('Bạn không có quyền truy cập')
                                return (<Redirect to='user' />)
                            }
                        } else {
                            alert("Bạn không có quyền truy cập")
                            return (<Redirect to='/' />)
                        }
                    }}
                </Route>
            </Switch>
        </Router>
    </div>
);

export default Routes;