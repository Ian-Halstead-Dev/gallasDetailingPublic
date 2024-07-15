import "./Styles/reset.css";
import "./Styles/App.css";

import { NavLink } from "react-router-dom";

import logo from "./images/output-onlinepngtools.png";

import interior from "./images/interior.png";
import exterior from "./images/exterior.png";
import full from "./images/full_02.jpg";
import ceramic from "./images/Ceramic.png";
import paintCorrect from "./images/paintCorrect.png";
import favicon from "./images/icons8-facebook-50.png";

import Service from "./images/detailed_car.jpg";

import slideImages from "./data/slideshowImages";

import { Slide } from "react-slideshow-image";

export function Main() {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "750px",
    color: "white",
  };

  return (
    <div>
      <body>
        <div class="mission_container">
          <img class="logo" src={logo} />
          <h3 class="name">Vehicle Protection Specialist</h3>
          <h1 class="mission_statement">
            Where Every Detail
            <br />
            Counts.
          </h1>
          <h2 class="premier">
            Le Mars premier automotive detailing and <br />
            paint protection Specialist
          </h2>
          <button class="book_button">
            <NavLink
              to="/tickets"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h2>Book Today</h2>
            </NavLink>
          </button>
        </div>
        <div class="services_container">
          <div class="services">
            <ul>
              <li>
                <h1 class="service_header">Interior Detailing Package</h1>
                <img src={interior} />
                <p class="service_description">
                  Get your car looking and feeling brand new with Galles
                  Detailing! Our interior detailing service includes steam
                  cleaning all surfaces to get rid of germs and bacteria. We
                  also shampoo the upholstery, carpets, and mats, leaving
                  everything fresh and spotless. Enjoy a clean and rejuvenated
                  car interior with Galles Detailing.
                </p>
              </li>
              <li>
                <h1 class="service_header">Exterior Detailing Package</h1>
                <img src={exterior} />
                <p class="service_description">
                  Our Interior Detailing Package focuses on cleaning and
                  rejuvenating the inside of your vehicle. We start with a
                  comprehensive vacuuming of the seats, carpets, and floor mats.
                  This is followed by a deep cleaning of all upholstery and
                  leather conditioning (if applicable). We clean and sanitize
                  all interior surfaces, including the dashboard, center
                  console, door panels, and windows. Our goal is to leave your
                  car’s interior looking and smelling fresh and new.
                </p>
              </li>
              <li>
                <h1 class="service_header">Full-Service Detailing Package</h1>
                <img src={full} />
                <p class="service_description">
                  Give your car the ultimate makeover with Galles Detailing's
                  full package! Our comprehensive service includes both interior
                  and exterior detailing to make your car look brand new inside
                  and out. We steam clean and shampoo the upholstery, carpets,
                  and mats for a fresh, spotless interior. On the outside, we
                  provide a thorough wash, clay bar treatment, and wax to remove
                  dirt and grime, leaving your car with a brilliant,
                  long-lasting shine. Experience the luxury of a complete car
                  refresh with Galles Detailing.
                </p>
              </li>
              <li>
                <h1 class="service_header">Paint Correction Package</h1>
                <img src={paintCorrect} />
                <p class="service_description">
                  Restore your car's pristine finish with Galles Detailing's
                  paint correction service. Our expert team carefully removes
                  scratches, swirl marks, and imperfections to reveal a smooth,
                  flawless surface. Whether your car has minor blemishes or more
                  significant damage, our paint correction rocess will
                  rejuvenate its appearance, making it look as good as new.
                  Choose Galles Detailing for professional paint correction that
                  brings out the best in your vehicle.
                </p>
              </li>
              <li>
                <h1 class="service_header">Ceramic Coating</h1>
                <img src={ceramic} />
                <p class="service_description">
                  Protect and enhance your car's appearance with Galles
                  Detailing's ceramic coating service. Our comprehensive package
                  includes meticulous paint correction to eliminate scratches,
                  swirl marks, and imperfections, ensuring a flawless finish. We
                  then apply a high-quality ceramic coating, providing superior
                  protection against the elements and a deep, glossy shine that
                  lasts for years. Trust Galles Detailing to give your car the
                  ultimate protection and a stunning, showroom-quality look.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* <div class="past_jobs">
          <div class="slide-container">
            <Slide slidesToScroll={2} slidesToShow={2} indicators={true}>
              {slideImages.map((slideImage, index) => (
                <div key={index}>
                  <div
                    style={{
                      ...divStyle,
                      backgroundImage: `url(${slideImage.url})`,
                    }}
                  ></div>
                </div>
              ))}
            </Slide>
          </div>
        </div> */}

        {/* <div class="about_contact">
					CONTACT US HERE
				</div> */}
      </body>
      <footer class="main_footer">
        <h1 class="footer_message" style={{ color: "white" }}>
          Follow Us On Social Media
        </h1>

        <a href="https://www.facebook.com/GallesDetailing/" target="_blank">
          <img src={favicon} alt="Facebook" style={{ marginLeft: "1vw" }} />
        </a>
      </footer>
    </div>
  );
}
