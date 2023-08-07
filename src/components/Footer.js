import React from "react";

const Footer = () => {
  let date = new Date().getFullYear()
  return (
  <footer>
    <p>&copy; Copyright Reserved {date}</p>
    <p>Crafted by Hari Anand</p>
  </footer>
  );
};

export default Footer;
