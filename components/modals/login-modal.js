import { useSelector } from 'react-redux' 

function LoginModal() {
  const isOpen = useSelector(state => state.loginModal.isOpen);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="login-popup">
      <div className="login-popup-wrapper">
        <form className="login-popup__form">
          <h3 className="login-popup__title">Login!</h3>
          <p className="login-popup__desc">Connect, organize and get things done to keep your IT business safe.</p>
          <div className="form-group mb-20">
            <i className="icon-mail input-icon"></i>
            <input type="text" className="form-control" placeholder="Email"/>
          </div>
          <div className="form-group mb-20">
            <i className="icon-lock input-icon"></i>
            <input type="password" className="form-control" placeholder="********"/>
          </div>
          <div className="d-flex align-items-center justify-content-between mb-20">
            <div className="custom-control custom-checkbox d-flex align-items-center">
              <input type="checkbox" className="custom-control-input" id="customCheck1"/>
              <label className="custom-control-label" for="customCheck1">Remember Me!</label>
            </div>
            <a href="#" className="fz-14 font-weight-bold color-secondary">Forget Password?</a>
          </div>
          <button type="submit" className="btn btn__primary btn__block btn__xl">
            <span>Login</span>
            <i className="icon-arrow-right"></i>
          </button>
        </form>
        <div className="d-flex justify-content-center align-items-center mt-20">
          <span className="color-white fz-14 font-weight-bold">Don’t Have An Account?</span>
          <button id="go-register" className="go-register fz-14 font-weight-bold">
            <span>Register Here</span><i className="icon-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('login-popup')
  );
}

export default LoginModal;