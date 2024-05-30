import React from "react";
import logo from "../assets/images/logo.jpg";
import { motion } from "framer-motion";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import {
  FaRegEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.div id="Footer" className="footer_section">
      <motion.div className="container">
        <motion.div className="row">
          <motion.div className="col-md-4 footer-col">
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                y: 3 % 2 === 0 ? 0 : 300,
              }}
              whileInView={{
                opacity: 1,
                y: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              viewport={{ once: true }}
              className="footer_contact"
            >
              <h4>CONTACT US</h4>
              <motion.div className="contact_link_box">
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Central+Station/@33.5161248,36.3158322,20.99z/data=!4m7!3m6!1s0x1518e700a55a71c5:0x47803d398b035bf7!4b1!8m2!3d33.5160915!4d36.3158215!16s%2Fg%2F11y22cg77t?entry=ttu"
                >
                  <CiLocationOn
                    className="fa fa-map-marker"
                    aria-hidden="true"
                  />
                  <span> Location</span>
                </a>
                <a>
                  <CiPhone className="fa fa-phone" aria-hidden="true" />
                  <span> Call +963 1234567890</span>
                </a>
                <a>
                  <FaRegEnvelope
                    className="fa fa-envelope"
                    aria-hidden="true"
                  />
                  <span> demo@gmail.com</span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              y: 3 % 2 === 0 ? 0 : 300,
            }}
            whileInView={{
              opacity: 1,
              y: 0, // Slide in to its original position
              transition: {
                duration: 2, // Animation duration
              },
            }}
            viewport={{ once: true }}
            className="col-md-4 footer-col"
          >
            <motion.div className="footer_detail">
              <a href="#" className="footer-logo">
                <img src={logo} alt="logo" />
              </a>
              <p>
                Necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with
              </p>
              <motion.div className="footer_social">
                <a href="#">
                  <FaFacebook className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href="#">
                  <FaTwitter className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a href="#">
                  <FaLinkedin className="fa fa-linkedin" aria-hidden="true" />
                </a>
                <a href="#">
                  <FaInstagram className="fa fa-instagram" aria-hidden="true" />
                </a>
                <a href="#">
                  <FaPinterestP
                    className="fa fa-pinterest"
                    aria-hidden="true"
                  />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              y: 3 % 2 === 0 ? 0 : 300,
            }}
            whileInView={{
              opacity: 1,
              y: 0, // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
            className="col-md-4 footer-col"
          >
            <h4>OPENING HOURS</h4>
            <p>Everyday</p>
            <p>10.00 Am -10.00 Pm</p>
          </motion.div>
        </motion.div>
        <motion.div className="footer-info">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a href="#">Central Station</a>
            <br />
            <br />
            &copy; <span id="displayYear"></span> Distributed By
            <a href="#" target="_blank">
              Seek Higher Things
            </a>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
