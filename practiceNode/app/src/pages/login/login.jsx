import {
  MDBBtn, MDBCard, MDBCheckbox, MDBContainer, MDBInput, MDBTabs, MDBTabsContent, MDBTabsItem,
  MDBTabsLink, MDBTabsPane
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import UseAuth from '../../hooks/UseAuth';

const LoginPage = () => {
  const [justifyActive, setJustifyActive] = useState('tab1');
  const [account, setAccount] = useState({})
  const {
    handleLogin
  } = UseAuth()

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };
  const handleChange = (e) => {
    const { value, name } = e.target
    setAccount(preAccount => ({
      ...preAccount, [name]: value
    }))
  }
  return (
    <Container className="p-3" style={{ backgroundColor: "F5F5F5" }}>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-75 ">
        <MDBCard className='p-5'>
          <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                Login
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                Register
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            {/* Login Tab */}
            <MDBTabsPane show={justifyActive === 'tab1'}>
              <div className="text-center mb-3">
                <h1>Sign in</h1>
              </div>
              <MDBInput wrapperClass='mb-4' label='Username' type='text' name='username' onChange={handleChange} />
              <MDBInput wrapperClass='mb-4' label='Password' type='password' name='password' onChange={handleChange} />
              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="#!">Forgot password?</a>
              </div>
              <MDBBtn className="mb-4 w-100" onClick={()=> handleLogin(account)}>Sign in</MDBBtn>
              <p className="text-center">Not a member?
                <a href="#!">Register</a></p>
            </MDBTabsPane>

            {/* Register Tab */}
            <MDBTabsPane show={justifyActive === 'tab2'}>
              <div className="text-center mb-3">
                <h1>Sign up</h1>
              </div>
              <MDBInput wrapperClass='mb-4' label='Name' type='text' />
              <MDBInput wrapperClass='mb-4' label='Username' type='text' />
              <MDBInput wrapperClass='mb-4' label='Email' type='email' />
              <MDBInput wrapperClass='mb-4' label='Password' type='password' />
              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
              </div>
              <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCard>
      </MDBContainer >
    </Container >
  );
}
export default LoginPage;