import "./NavBar.css";
import Image1 from "../Logo.png";

function NavBar() {
    return(
        <>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a href="/#">
    <img  src= {Image1} className="navbar-brand logo" alt="Logo"/>  </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#">Home</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/#">Products List</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}
export default NavBar;