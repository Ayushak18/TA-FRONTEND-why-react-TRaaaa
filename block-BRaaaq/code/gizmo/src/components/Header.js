function Header() {
  return (
    <>
      <div className="header flex">
        <ul>
          <li>
            <a href="#a" className="brand">
              Brand
            </a>
          </li>
        </ul>
        <ul className="ul flex">
          <li>
            <a href="#a">Home</a>
          </li>
          <li>
            <a href="#a">About</a>
          </li>
          <li>
            <a href="#a">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
