import logo from"./logo (1).png"
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="fixed-top bg-white mb-5">
      <div className="social-links bg-black">
        <div className="container p-lg-0">
          <div className="row icons text-white py-3">
            <div className="contact-info text-center mb-4 mb-xl-0 col-8 me-5">
              <span className="m-0 me-sm-5">
              <svg className="me-2 text-success fs-2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"></path></svg> +201122327923
              </span>
              <span className="m-0 me-sm-5">
              <svg className="me-2 text-success fs-2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"></path></svg>
                touersinfo@gmail.com
              </span>
              <span className="m-0 me-sm-5">
              <svg className="me-2 text-success fs-2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0a7.78 7.78 0 0 0 0 11.13L12 21.999l5.657-5.565a7.78 7.78 0 0 0 0-11.13M12 13.499c-.668 0-1.295-.26-1.768-.732a2.503 2.503 0 0 1 0-3.536c.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732a2.503 2.503 0 0 1 0 3.536c-.472.472-1.1.732-1.768.732"></path></svg>290 Grand Avenue
                maitland FL32571
              </span>
            </div>
            <ul className="list-unstyled d-flex justify-content-between align-items-center mb-0 ms-5 col-2 border-start p-0">
              <li className="ms-4 me-2">
              <svg className="me-2  fs-3" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M4.594 4.984a1 1 0 0 1 .941.429C7.011 7.572 8.783 8.47 10.75 8.674c.096-.841.323-1.672.75-2.404c.626-1.074 1.644-1.864 3.098-2.156c2.01-.404 3.54.324 4.427 1.215l1.792-.335a1 1 0 0 1 1.053 1.478l-1.72 3.022c.157 4.361-1.055 7.405-3.639 9.502c-1.37 1.112-3.332 1.743-5.485 1.938c-2.17.196-4.623-.041-7.061-.753a1 1 0 0 1 .007-1.922c1.226-.349 2.16-.65 3.003-1.177c-1.199-.636-2.082-1.468-2.707-2.416c-.868-1.318-1.19-2.788-1.254-4.113S3.141 8 3.343 7.115c.115-.505.249-1.011.434-1.495a1 1 0 0 1 .818-.636Z"></path></g></svg>
              </li>
              <li className="mx-2">
              <svg className="me-2  fs-3" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 12.05a8 8 0 1 0-9.25 8v-5.67h-2v-2.33h2v-1.77a2.83 2.83 0 0 1 3-3.14a12 12 0 0 1 1.79.16v2h-1a1.16 1.16 0 0 0-1.3 1.26v1.51h2.22l-.36 2.33h-1.85V20A8 8 0 0 0 20 12.05"></path></svg>
              </li>
              <li className="mx-2">
              <svg className="me-2  fs-3" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg>
              </li>
              <li className="mx-2">
              <svg className="me-2  fs-3" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3m0 736q-671.7-.15-671.7-.3q.15-671.7.3-671.7q671.7.15 671.7.3q-.15 671.7-.3 671.7M230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8m252.3 245.1c0-49.8 9.5-98 71.2-98c60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9c-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6z"></path></svg>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light container d-flex justify-content-between align-items-center py-3">
        <div className="logo w-25">
          <img src={logo} alt="" />
        </div>

        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="d-lg-flex justify-content-between align-items-center collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mt-4 mt-lg-0 text-center">
            <li className="nav-item active mx-2">
              <Link className="nav-link" to="/">
                 Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/">
                Tours
              </Link>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Destination
              </a>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
          </ul>

          <button
            className="btn btn-success text-white px-4 py-3 rounded my-2 my-sm-0"
          >
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
