import { Fragment } from 'react'
import LoginModal from '../modals/login-modal';
import Navbar from './navbar';

function Layout(props) {
  return (
    <Fragment>
      <Navbar/>
      <LoginModal/>
      {props.children}
    </Fragment>
  )
}

export default Layout;