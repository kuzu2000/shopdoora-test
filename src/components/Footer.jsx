const Footer = () => {
  return (
    <footer>
      <div className="footer-columns">
        <div className="footer-column">
          <div className="footer-group">
            <h2>Customer Service</h2>
            <ul>
              <li>
                <i className="fa fa-key"></i> Terms & Privacy Policy
              </li>
              <li>
                <i className="fa fa-undo"></i> Return Policy
              </li>
            </ul>
          </div>
          <div className="footer-group">
            <h2>Payment</h2>
            <ul className="payment">
              <li>
                <img
                  className="payment-logo"
                  src="./shopdoora/kbz-pay.png"
                  alt="KBZ Pay"
                  width="100"
                  height="35"
                />
              </li>
              <li>
                <img
                  className="payment-logo"
                  src="./shopdoora/wave-pay.png"
                  alt="Wave Pay"
                  width="70"
                  height="35"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-group">
            <h2>Languge</h2>
            <ul>
              <li>
                <input type="radio" name="language" id="zawgyi" />
                <label htmlFor="zawgyi">Myanmar (Zawgyi)</label>
              </li>
              <li>
                <input type="radio" name="language" id="unicode" />
                <label htmlFor="unicode">Myanmar (Unicode)</label>
              </li>
              <li>
                <input type="radio" name="language" id="english" />
                <label htmlFor="english">English</label>
              </li>
            </ul>
          </div>
          <div className="footer-group">
              <h2>Follow Us On</h2>
              <ul className="payment">
                <li>
                  <i className="fab fa-facebook" style={{color: '#3b5998'}}></i>
                </li>
                <li>
                <i className="fab fa-instagram-square"></i>
                </li>
                <li>
                  <i className="fab fa-viber" style={{color: '#59267c'}}></i>
                </li>
                <li>
                  <i className="fab fa-telegram" style={{color: '#0088cc'}}></i>
                </li>
                <li>
                  <i className="fab fa-twitter" style={{color: '#00acee'}}></i>
                </li>
              </ul>
            </div>
        </div>
        <div className="footer-column">
          <div className="footer-group">
            <h2>Contact Us</h2>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> Lay Daunt Kan Main
                Road, Cashmere Stop, Near Zawana, Thingangyun Tsp, Yangon.
              </li>
              <li>
                <i className="fa fa-phone"></i> 09458489458
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-group">
            <h2>Download Our App</h2>
            <img className="download-qr" src="./shopdoora/randomqr.png" alt="QR code" />
          </div>
        </div>
      </div>
      <div className="footer-copyr">
        <p>&copy; Copyright 2023 C by D Co., Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
