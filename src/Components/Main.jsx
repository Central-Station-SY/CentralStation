import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.jpg";
import { motion } from "framer-motion";

const Main = () => {
  const [animateDown, setAnimateDown] = useState(false);

  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 1, delayChildren: 2 },
    },
    closed: { opacity: 0 },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.3 } },
    closed: { opacity: 0 },
  };

  return (
    <motion.div id="Main" className="hero_area">
      {/* <div className="bg-box">
        <img src={header} alt="" />
      </div> */}
      {/* <!-- slider section --> */}
      <motion.section className="slider_section">
        <motion.div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <motion.div className="carousel-inner">
            <motion.div className="carousel-item active">
              <motion.div className="container ">
                <motion.div className="row">
                  <motion.div className="col-md-7 col-lg-6 ">
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
                      className="detail-box"
                    >
                      <motion.h1>CENTRAL STATION</motion.h1>
                      <motion.p>
                        Doloremque, itaque aperiam facilis rerum, commodi,
                        temporibus sapiente ad mollitia laborum quam quisquam
                        esse error unde. Tempora ex doloremque, labore, sunt
                        repellat dolore, iste magni quos nihil ducimus libero
                        ipsam.
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
      {/* end slider section */}
    </motion.div>
  );
};

export default Main;
