import logo from './logo.svg';
import './App.css';
import photo from "./photo.jpg";
import { FaWhatsapp, FaCheck, FaNode, FaBootstrap, FaCss3Alt, FaHtml5, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { CgMail } from "react-icons/cg";
import { SiJavascript, SiJquery, SiReact } from "react-icons/si";
import { TiMessageTyping } from "react-icons/ti";
import { GiMusicalNotes } from "react-icons/gi";
import { RiMovie2Fill } from "react-icons/ri";
function App() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i"
        rel="stylesheet"
        type="text/css"
      />
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#top">
          <span className="d-block d-lg-none">Vadodariya Savan</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={photo}
            />
          </span>
        </a>

        {/* sssss */}
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button> */}
        <nav className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">
                Interests
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#hobby">
                Hobby's
              </a>
            </li>
          </ul>
        </nav>
      </nav>
      <div className="container-fluid p-0 bgg">
        {/* About*/}
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Vadodariya
              <span className="text-primary"> Savan</span>
            </h1>
            <div className="subheading mb-5">
              117, Shree kunj res., Kenal road, kamrej, surat, 394180.
            </div>
            <p className="lead mb-5">
              Looking for challenging role in a reputable organization to utilize my technical, and
              management skills for the growth of the organization as well as to enhance my
              knowledge about in the IT - sector.<br></br>
              Also i am seeking an opportunity in a company where i can use my skill and education
              to company meet and surpass its goal.
            </p>
            <div className="social-icons">
              <a className="social-icon" target="_blank" href="https://www.linkedin.com/in/savan-vadodariya-b33b99259/">
                <FaLinkedinIn />
              </a>
              <a className="social-icon" target="_blank" href="mailto:savan8102003@gmail.com">
                <CgMail />
              </a>
              <a className="social-icon" target="_blank" href="https://web.whatsapp.com/send/?phone=8141354630&text&type=phone_number&app_absent=0">
                <FaWhatsapp />
              </a>
              <a className="social-icon" target="_blank" href="https://www.instagram.com/savan__197/">
                <FaInstagram />
              </a>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        {/* Education*/}
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Wisdom  international  school</h3>
                <div className="subheading mb-3">S.S.C</div>
                <p>PR: 87.91</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">March-2019</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Wisdom  international  school</h3>
                <div className="subheading mb-3">S.S.C</div>
                <p>PR: 83.44</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">May-2021</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Bhagwan  Mahavir University</h3>
                <div className="subheading mb-3">B.C.A</div>
                <p>Second year</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">-Running</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Creadtive Design and Multimedia Institute</h3>
                <div className="subheading mb-3">Full Stack Development</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Jan-2023</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        {/* Interests*/}
        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Interests</h2>
            <p>
              Apart from being a web developer, I enjoy most of my time being outdoors.
              sometimes i am going a small trip with my friends and enjoy my life.
            </p>
            <p className="mb-0">
              When forced indoors, I follow a number of sci-fi and fantasy genre movies
              and television shows, I am an aspiring chef, and I spend a large amount of
              my free time exploring the latest technology  in the front-end web development world.
            </p>
          </div>
        </section>
        <hr className="m-0" />
        {/* Skills*/}
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>

            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <FaHtml5 />
              </li>
              <li className="list-inline-item">
                <FaCss3Alt />
              </li>
              <li className="list-inline-item">
                <FaBootstrap />
              </li>
              <li className="list-inline-item">
                <SiJavascript />
              </li>
              <li className="list-inline-item">
                <SiJquery />
              </li>
              <li className="list-inline-item">
                <SiReact />
              </li>
              <li className="list-inline-item">
                <FaNode />
              </li>
            </ul>
            <div className="subheading mb-3">Programming Languages &amp; Tools</div>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li tt">
                  <FaCheck />
                </span>
                Programming C
              </li>
              <li>
                <span className="fa-li tt">
                  <FaCheck />
                </span>
                Programming C++
              </li>
              <li>
                <span className="fa-li tt">
                  <FaCheck />
                </span>
                HTML-5
              </li>
              <li>
                <span className="fa-li tt">
                  <FaCheck />
                </span>
                CSS-3
              </li>
              <li>
                <span className="fa-li tt">
                  <FaCheck />
                </span>
                Bootstrap-5
              </li>
              <li>
                <span className="fa-li tt">
                  <FaCheck />
                </span>
                Javascript
              </li>
              <li>
                <span className="fa-li tt">
                  <FaCheck />
                </span>
                Jquery
              </li>
              <li>
                <span className="fa-li tt">
                  <FaCheck />
                </span>
                React JS
              </li>
              <li>
                <span className="fa-li tt">
                  <FaCheck />
                </span>
                Node JS
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />
        {/* Hobby*/}
        <section className="resume-section" id="hobby">
          <div className="resume-section-content">
            <h2 className="mb-5">Awards &amp; Certifications</h2>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <TiMessageTyping />
              </li>
              <li className="list-inline-item">
                <GiMusicalNotes />
              </li>
              <li className="list-inline-item">
                <RiMovie2Fill />
              </li>
            </ul>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li tt">
                  <FaCheck />
                </span>
                Development
              </li>
              <li>
                <span className="fa-li tt">
                  <FaCheck />
                </span>
                Music
              </li>
              <li>
                <span className="fa-li tt">
                  <FaCheck />
                </span>
                Movie
              </li>

            </ul>
          </div>
        </section>
      </div>
    </>

  );
}

export default App;
