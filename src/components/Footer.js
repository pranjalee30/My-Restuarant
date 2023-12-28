import React from "react";
import Logo from "../images/Logo .svg";
const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={Logo} alt="" />
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/Menu">Menu</a>
            </li>
            <li>
              <a href="/Reserve">Reservations</a>
            </li>
            <li>
              <a href="/booking">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              Address: <br /> Sasamusa, Gopalganj <br /> 841505
            </li>
            <li>
              Phone No: <br /> 6202664551 <br /> 7903263599
            </li>
            <li>
              Email: <br /> pranjalk449@gmail.com
            </li>
          </ul>
        </div>
        <div>
          <h3>Social Media</h3>
          <ul>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">Facebook</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
