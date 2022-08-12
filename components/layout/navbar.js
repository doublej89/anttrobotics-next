import { useDispatch } from 'react-redux'
import { open } from '../../slices/login-modal-slice'

function Navbar() {
  const dispatch = useDispatch();

  return (
    <header className="header header-transparent header-full">
      <nav className="navbar navbar-expand-lg sticky-navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="assets/images/logo/logo-light.png" className="logo-light" alt="logo"/>
            <img src="assets/images/logo/logo-dark.png" className="logo-dark" alt="logo"/>
          </a>
          <button className="navbar-toggler" type="button">
            <span className="menu-lines"><span></span></span>
          </button>
          <div className="header__top-right">
            <ul className="list-unstyled d-flex justify-content-end align-items-center mb-0">
              <li>
                <div className="dropdown lang-dropdown">
                  <button className="dropdown-toggle lang-dropdown-toggle" id="langDropdown" data-toggle="dropdown">
                    <i className="icon-map"></i><span>English</span>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="langDropdown">
                    <a className="dropdown-item" href="#">Spain</a>
                    <a className="dropdown-item" href="#">France</a>
                  </div>
                </div>
              </li>
              <li>
                <ul className="navbar-actions list-unstyled mb-0 d-flex align-items-center">
                  <li className="d-none d-xl-block">
                    <a href="request-quote.html" className="btn action__btn-contact">Request A Quote</a>
                  </li>
                  <li>
                    <button className="action__btn action__btn-login open-login-popup" onClick={() => dispatch(open())}>
                      <i className="icon-user"></i><span>Login</span>
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="mainNavigation">
            <ul className="navbar-nav ml-auto">
              <li className="nav__item">
                <a href="index.html" className="nav__item-link">Home</a>
              </li>
              <li className="nav__item">
                <a href="about-us.html" className="nav__item-link">About Us</a>
              </li>
              <li className="nav__item has-dropdown">
                <a href="#" data-toggle="dropdown" className="dropdown-toggle nav__item-link">IT Solutions</a>
                <ul className="dropdown-menu wide-dropdown-menu">
                  <li className="nav__item">
                    <div className="row mx-0">
                      <div className="col-sm-6 dropdown-menu-col">
                        <a href="it-solutions.html" className="nav__item-link dropdown-menu-title">IT Solutions</a>
                        <ul className="nav flex-column">
                          <li className="nav__item"><a className="nav__item-link" href="it-solutions-single.html">IT
                              Management</a>
                          </li> 
                          <li className="nav__item"><a className="nav__item-link" href="it-solutions-single.html">Cyber
                              Security</a>
                          </li> 
                          <li className="nav__item"><a className="nav__item-link" href="it-solutions-single.html">Cloud
                              Computing</a>
                          </li> 
                          <li className="nav__item"><a className="nav__item-link" href="it-solutions-single.html">IT
                              Consulting</a>
                          </li> 
                          <li className="nav__item"><a className="nav__item-link" href="it-solutions-single.html">Software
                              Dev</a>
                          </li> 
                          <li className="nav__item"><a className="nav__item-link" href="it-solutions-single.html">IT Support</a>
                          </li>
                          
                        </ul>
                      </div>
                      <div className="col-sm-6 dropdown-menu-col">
                        <a href="industries.html" className="nav__item-link dropdown-menu-title">Industries</a>
                        <ul className="nav flex-column">
                          <li className="nav__item"><a className="nav__item-link"
                              href="industries-single-industry.html">Education,
                              Non-Profit</a></li> 
                          <li className="nav__item"><a className="nav__item-link"
                              href="industries-single-industry.html">Accounting,
                              Finance</a></li> 
                          <li className="nav__item"><a className="nav__item-link"
                              href="industries-single-industry.html">Government &
                              Public</a></li> 
                          <li className="nav__item"><a className="nav__item-link" href="industries-single-industry.html">Energy
                              &
                              Utilities</a></li> 
                          <li className="nav__item"><a className="nav__item-link" href="industries-single-industry.html">Legal,
                              Law
                              Firms</a></li> 
                          <li className="nav__item"><a className="nav__item-link"
                              href="industries-single-industry.html">Manufacturing</a>
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav__item">
                <a href="case-studies-grid.html" className="nav__item-link">Case Studies</a>
              </li>
              <li className="nav__item">
                <a href="blog.html" className="nav__item-link">Our Blog</a>
              </li>
              <li className="nav__item">
                <a href="coming-soon.html" className="nav__item-link">Coming Soon</a>
              </li>
              <li className="nav__item">
                <a href="contact-us.html" className="nav__item-link">Contacts</a>
              </li>
            </ul>
            <button className="close-mobile-menu d-block d-lg-none"><i className="fas fa-times"></i></button>
          </div>
          <div className="d-flex align-items-center">
            <a href="#" className="action__btn action__btn-search ml-30"><i className="icon-search"></i></a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar