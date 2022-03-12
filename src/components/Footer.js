import React from 'react';
import { Link } from 'react-router-dom';

const footer={
  footer:{
    //see if position:fixed works 
      // position: "fixed",
      // bottom: 0,
      // marginBottom: "20px",
      // width: "100%"
  }
}
const Footer = () => (
  <>
    <footer className="border-top footer text-muted" style={footer.footer}>
        <div className="container">
            &copy; 2022 - FizzBuzzWeb - <a href="/privacy">Privacy</a>
        </div>
    </footer>
  </>
);
export default Footer;