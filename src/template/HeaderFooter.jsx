import { useState } from "react";

import LogoHeader from "./../assets/logo-header.png";
import LogoFooter from "./../assets/logo-footer.png";

export default function HeaderFooter({ children }) {
  const [isWindowOnTop, setIsWindowOnTop] = useState(true);

  window.onscroll = () => {
    if (window.pageYOffset === 0) {
      setIsWindowOnTop(true);
    } else {
      setIsWindowOnTop(false);
    }
  };

  return (
    <>
      <header className={`header ${isWindowOnTop ? "" : "header--scrolled"}`}>
        <img src={LogoHeader} width={125} />
      </header>
      {children}
      <footer className="footer">
        <div className="container mx-auto py-20 flex justify-center">
          <div className="text-center">
            <img src={LogoFooter} width={233} className="mx-auto" />
            <h6 className="h6 mt-9">Acme Corp Inc.</h6>
            <p className="body3 mt-9">
              Via Emilio De Marchi 4, Milano (MI) - ITALY <br />{" "}
              info@acmecorp.com
            </p>
            <p className="body4 mt-2">Designed by Deseip</p>
          </div>
        </div>
        <div className="footer-nav">
          <nav className="px-4 flex justify-start md:justify-center gap-16 flex-wrap">
            <p className="body2">2022 Acme Corp Inc. - P.IVA 01234567890 </p>
            <ul className="flex flex-col md:flex-row flex-wrap justify-start gap-16">
              <li>
                <a href="" className="body2">
                  PRIVACY POLICY
                </a>
              </li>
              <li>
                <a href="" className="body2">
                  COOKIE POLICY
                </a>
              </li>
              <li>
                <a href="" className="body2">
                  COOKIES PREFERENCES
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
