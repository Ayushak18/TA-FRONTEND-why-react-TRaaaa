function Header() {
  return (
    <header className="navbar">
      <div className="container flex">
        <div className="flex">
          <a href="#a" className="brand">
            <strong>Hydro</strong>
          </a>
          <nav>
            <ul className="flex nav-menu nav-menu-primary">
              <li>
                <a href="#a">Home</a>
              </li>
              <li>
                <a href="#a">About</a>
              </li>
              <li>
                <a href="#a">Blog</a>
              </li>
              <li>
                <a href="#a">Our Work</a>
              </li>
              <li>
                <a href="#a">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
        <nav>
          <ul class="flex nav-menu nav-menu-secondary">
            <li class="social-media-item">
              <a href="#a"><i class="fab fa-facebook-square"></i></a>
            </li>
            <li class="social-media-item">
              <a href="#a"><i class="fab fa-twitter"></i></a>
            </li>
            <li class="social-media-item">
              <a href="#a"><i class="fab fa-instagram"></i></a>
            </li>
            <li>
              <a class="btn btn-primary" href="#a"> Sign in / Join </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
