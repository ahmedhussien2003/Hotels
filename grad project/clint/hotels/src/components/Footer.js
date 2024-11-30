import { Link } from "react-router-dom";
import "../App.css";
function Footer() {
  return (
      <footer className="text-white-50 text-center text-md-start bg-dark mt-5 w-100" >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="info">
                <img
                  src="./assets/images/images/logo (1).png"
                  alt=""
                  className="mb-4"
                />
                <p className="mb-5 text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut
                </p>
                <div className="footer-social">
                  <a href="#">
                    <svg
                      className="fs-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      >
                        <path d="M15.462 11.487a3.5 3.5 0 1 1-6.925 1.026a3.5 3.5 0 0 1 6.925-1.026M17 6.5h.5" />
                        <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z" />
                      </g>
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      className="fs-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                    >
                      <g
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      >
                        <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24s-10.745 24-24 24S0 37.255 0 24" />
                        <path d="M19.183 45.472q-.29-.375 0-6.674q-3.107.108-3.927-.431c-.819-.539-1.64-2.2-2.367-3.371s-2.343-1.356-2.995-1.618c-.652-.261-.816-1.328 1.797-.522c2.613.807 2.74 3.005 3.565 3.518c.825.514 2.796.29 3.689-.122s.827-1.944.987-2.551c.201-.567-.509-.693-.524-.697c-.873 0-5.454-.997-6.713-5.433c-1.258-4.437.363-7.337 1.228-8.583q.864-1.248-.153-5.314Q17.466 13.2 19.473 16c.002.01 1.756-1.043 4.527-1.043s3.755.858 4.514 1.043s1.366-3.266 6.053-2.326c-.979 1.923-1.798 4.326-1.173 5.314c.626.987 3.08 4.127 1.573 8.583q-1.509 4.455-5.929 5.433q-.506.162-.506.522c0 .36.456.399 1.114 2.086q.66 1.686.096 9.635q-1.427.363-2.22.488c-.937.147-1.955.23-2.955.261c-1 .032-1.347.029-2.73-.1a20 20 0 0 1-2.654-.424" />
                      </g>
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      className="fs-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="-2 -2 24 24"
                    >
                      <g fill="currentColor">
                        <path d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457c-.592 0-.945.398-1.1.784c-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066c1.41 0 2.468.922 2.468 2.902M6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115c-.014-.632-.465-1.114-1.199-1.114m-1.086 9.556h2.144V8.38H5.127z" />
                        <path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10" />
                      </g>
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      className="fs-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19.02 4.975A9.93 9.93 0 0 0 2.07 12A9.935 9.935 0 0 0 12 21.935a10 10 0 0 0 3.8-.75a10.2 10.2 0 0 0 3.22-2.16a9.934 9.934 0 0 0 0-14.05m-.7 13.34a8.92 8.92 0 0 1-5.32 2.57v-6.56h1.88a1 1 0 0 0 0-2H13v-2.74a1 1 0 0 1 1-1h1.2a1 1 0 0 0 0-2h-1.7a2.5 2.5 0 0 0-2.5 2.5v3.24H9.13a1 1 0 1 0 0 2H11v6.56a8.919 8.919 0 1 1 9.26-5.47a9.1 9.1 0 0 1-1.94 2.9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-2">
              <div className="links">
                <h6 className="text-white">
                  <a href="#">COMPANY:</a>
                </h6>
                <ul className="list-unstyled lh-lg mt-4">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/About">About us</Link>
                  </li>
                  <li>
                    <a href="#">Blog Update</a>
                  </li>
                  <li>
                    <a href="#">Our service</a>
                  </li>
                  <li>
                    <a href="#">Testimonial</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-lg-2 mb-5">
              <div className="links">
                <h6 className="text-white">
                  <a href="#">QUICK LINKS:</a>
                </h6>
                <ul className="list-unstyled lh-lg mt-4">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/About">About us</Link>
                  </li>
                  <li>
                    <a href="#">Blog Update</a>
                  </li>
                  <li>
                    <a href="#">Our service</a>
                  </li>
                  <li>
                    <a href="#">Testimonial</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="contact">
                <h6 className="text-white mb-5">
                  <a href="#">SUBSCRIBE NEWSLETTER:</a>
                </h6>
                <input
                  className="mb-4"
                  type="email"
                  placeholder="Enter Your Email:"
                />
                <a className="special-btn" href="#">
                  Subscribe Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-end">
          <div className="container">
            <div className="row">
              <div className="copy-right">
                <p>
                  Copyright &copy; 2024 <a className="text-success" href="">Travelo</a> All Right
                  Reserved
                </p>
                <p>
                  <a href="">Privacy</a> &<a href="">Policy</a> ||
                  <a href="">Terms</a> &<a href="">Conditions</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
export default Footer;
