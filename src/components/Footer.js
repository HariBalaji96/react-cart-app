import React from "react";

const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <div id="footer">
      <p>&copy; Copyright Reserved {date}</p>
      <p>Crafted by Hari Anand</p>
    </div>
  );
};

export default Footer;
