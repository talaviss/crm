import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div id="credits">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6">
            <span>PRIVACY&nbsp;&nbsp;</span>
            <span>TERMS&nbsp;&nbsp;</span>
            <span>&copy; 2017 Amdocs</span>
          </div>
          <div className="col-md-6" id="social-networks">
            <a href="https://www.linkedin.com/in/tal-avissar-b24a961/?ppe=1"><i className="fa fa-2x fa-linkedin-square" /></a>&nbsp;
            <a href="https://www.facebook.com/amdocs"><i className="fa fa-2x fa-facebook" /></a>&nbsp;
            <a href="https://www.youtube.com/user/amdocsinc"><i className="fa fa-2x fa-youtube" /></a>&nbsp;

            <a href="http://www.twitter.com"><i className="fa fa-twitter fa-2x" /></a>&nbsp;
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
