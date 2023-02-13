// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Navigate
// } from "react-router-dom";

// import * as page from './pages';
// var token = localStorage.getItem('token')
// var role = localStorage.getItem('role')

// export default function RouteApp() {
//     return (
//         <>
//             <Router>
//                 <Routes >
//                     <Route index path="/" element={<page.SignUpPage />} />
//                     <Route exact path="/"  >
//                         {/* {token
//                             ? <Navigate to={`${role === 'admin' ? '/admin' : '/user'}`} />
//                             : <page.LoginPage />} */}

//                         {token ?
//                             (<Route path="/" Navigate to={`${role === 'admin' ? '/admin' : '/user'}`} />
//                             )
//                             : <Route path="/" element={<page.LoginPage />} />}

//                     </Route>

//                     <Route exact path="/signup" element={<page.SignUpPage />} />

//                     <Route exact path='/user'>
//                         {() => {
//                             if (token) {
//                                 if (role === 'user') {
//                                     <Route path='/user' element={<page.UserPage />} />
//                                 } else if (role === 'admin') {
//                                     alert('Bạn không có quyền truy cập')
//                                     return (<Navigate to='/admin' />)
//                                 }
//                             } else {
//                                 alert('Bạn không có quyền truy cập')
//                                 return (<Navigate to='/' />)
//                             }
//                         }}
//                     </Route>

//                     <Route exact path='/admin'>
//                         {() => {
//                             if (token) {
//                                 if (role === 'admin') {
//                                     return (<page.AdminPage />)
//                                 } else if (role === 'user') {
//                                     alert('Bạn không có quyền truy cập')
//                                     return (<Navigate to='user' />)
//                                 }
//                             } else {
//                                 alert("Bạn không có quyền truy cập")
//                                 return (<Navigate to='/' />)
//                             }
//                         }}
//                     </Route>
//                 </Routes >
//             </Router >


//         </>
//     )
// }