

function Navbar() {
  return (
    <header class="header header-transparent header-full">
      <nav class="navbar navbar-expand-lg sticky-navbar">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img src="assets/images/logo/logo-light.png" class="logo-light" alt="logo"/>
            <img src="assets/images/logo/logo-dark.png" class="logo-dark" alt="logo"/>
          </a>
          <button class="navbar-toggler" type="button">
            <span class="menu-lines"><span></span></span>
          </button>
          <div class="header__top-right">
            <ul class="list-unstyled d-flex justify-content-end align-items-center mb-0">
              <li>
                <div class="dropdown lang-dropdown">
                  <button class="dropdown-toggle lang-dropdown-toggle" id="langDropdown" data-toggle="dropdown">
                    <i class="icon-map"></i><span>English</span>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="langDropdown">
                    <a class="dropdown-item" href="#">Spain</a>
                    <a class="dropdown-item" href="#">France</a>
                  </div>
                </div>
              </li>
              <li>
                <ul class="navbar-actions list-unstyled mb-0 d-flex align-items-center">
                  <li class="d-none d-xl-block">
                    <a href="request-quote.html" class="btn action__btn-contact">Request A Quote</a>
                  </li>
                  <li>
                    <button class="action__btn action__btn-login open-login-popup">
                      <i class="icon-user"></i><span>Login</span>
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="collapse navbar-collapse" id="mainNavigation">
            <ul class="navbar-nav ml-auto">
              <li class="nav__item">
                <a href="index.html" class="nav__item-link">Home</a>
              </li>
              <li class="nav__item">
                <a href="about-us.html" class="nav__item-link">About Us</a>
              </li>
              <li class="nav__item has-dropdown">
                <a href="#" data-toggle="dropdown" class="dropdown-toggle nav__item-link">IT Solutions</a>
                <ul class="dropdown-menu wide-dropdown-menu">
                  <li class="nav__item">
                    <div class="row mx-0">
                      <div class="col-sm-6 dropdown-menu-col">
                        <a href="it-solutions.html" class="nav__item-link dropdown-menu-title">IT Solutions</a>
                        <ul class="nav flex-column">
                          <li class="nav__item"><a class="nav__item-link" href="it-solutions-single.html">IT
                              Management</a>
                          </li> 
                          <li class="nav__item"><a class="nav__item-link" href="it-solutions-single.html">Cyber
                              Security</a>
                          </li> 
                          <li class="nav__item"><a class="nav__item-link" href="it-solutions-single.html">Cloud
                              Computing</a>
                          </li> 
                          <li class="nav__item"><a class="nav__item-link" href="it-solutions-single.html">IT
                              Consulting</a>
                          </li> 
                          <li class="nav__item"><a class="nav__item-link" href="it-solutions-single.html">Software
                              Dev</a>
                          </li> 
                          <li class="nav__item"><a class="nav__item-link" href="it-solutions-single.html">IT Support</a>
                          </li>
                          
                        </ul>
                      </div>
                      <div class="col-sm-6 dropdown-menu-col">
                        <a href="industries.html" class="nav__item-link dropdown-menu-title">Industries</a>
                        <ul class="nav flex-column">
                          <li class="nav__item"><a class="nav__item-link"
                              href="industries-single-industry.html">Education,
                              Non-Profit</a></li> 
                          <li class="nav__item"><a class="nav__item-link"
                              href="industries-single-industry.html">Accounting,
                              Finance</a></li> 
                          <li class="nav__item"><a class="nav__item-link"
                              href="industries-single-industry.html">Government &
                              Public</a></li> 
                          <li class="nav__item"><a class="nav__item-link" href="industries-single-industry.html">Energy
                              &
                              Utilities</a></li> 
                          <li class="nav__item"><a class="nav__item-link" href="industries-single-industry.html">Legal,
                              Law
                              Firms</a></li> 
                          <li class="nav__item"><a class="nav__item-link"
                              href="industries-single-industry.html">Manufacturing</a>
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="nav__item">
                <a href="case-studies-grid.html" class="nav__item-link">Case Studies</a>
              </li>
              <li class="nav__item">
                <a href="blog.html" class="nav__item-link">Our Blog</a>
              </li>
              <li class="nav__item">
                <a href="coming-soon.html" class="nav__item-link">Coming Soon</a>
              </li>
              <li class="nav__item">
                <a href="contact-us.html" class="nav__item-link">Contacts</a>
              </li>
            </ul>
            <button class="close-mobile-menu d-block d-lg-none"><i class="fas fa-times"></i></button>
          </div>
          <div class="d-flex align-items-center">
            <a href="#" class="action__btn action__btn-search ml-30"><i class="icon-search"></i></a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar