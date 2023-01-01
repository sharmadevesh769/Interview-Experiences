import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="footer__addr">
          <h1 class="footer__logo">IntEXP</h1>

          <h2>Contact</h2>

          <address>
            FC-26, Panduk Shila Marg, Zero Pusta Rd, Shastri Park, Shahdara, New
            Delhi, Delhi 110053
            <a class="footer__btn" href="mailto:deveshsharma769@gmail.com">
              Email Us
            </a>
          </address>
        </div>

        <ul class="footer__nav">
          <li class="nav__item">
            <h2 class="nav__title">Team Members</h2>

            <ul class="nav__ul">
              <li>
                <a href="https://www.linkedin.com/in/manish-kumar-2468851a9/">
                  Manish Kumar
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/nitin-singh124/">Nitin</a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/pritish-nagpal-5409861a1/">
                  Pritish nagpal
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/deveshsharma769/">
                  Devesh kumar Sharma
                </a>
              </li>
            </ul>
          </li>

          <li class="nav__item nav__item--extra">
            <h2 class="nav__title nav_title_mid">Technology Used</h2>

            <ul class="nav__ul nav__ul--extra">
              <li>
                <a href="#">ReactJs</a>
              </li>

              <li>
                <a href="#">NodeJs</a>
              </li>

              <li>
                <a href="#">ExpressJs</a>
              </li>

              <li>
                <a href="#">MongoDB</a>
              </li>
            </ul>
          </li>

          <li class="nav__item">
            <h2 class="nav__title">Mentor</h2>

            <ul class="nav__ul">
              <li>
                <a href="#">Miss. Shweta Chauddhary</a>
              </li>
            </ul>
          </li>
        </ul>

        <div class="legal">
          <p>&copy; 2023. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
