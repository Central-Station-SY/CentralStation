import React from "react";
import "../styles/Modal.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import * as FontAwesome from "react-icons/fa";
import "../styles/Feature.css";

const Modal = ({ id, name, description, price, image, close, lang }) => {
  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.3 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };

  const textDirection = lang ? "ltr" : "rtl";

  return (
    <motion.div
      className="modal"
      variants={modalVariants}
      onClick={(e) => e.stopPropagation()}
      key={id}
    >
      <motion.img
        className="modal__image"
        alt="real estate mansion"
        src={require("../assets/images/items/" + image)}
        variants={imageVariants}
      ></motion.img>
      <motion.button
        className="modal__close-wrapper"
        whileHover={{ scale: 1.2 }}
        onClick={close}
      >
        <IoCloseCircleOutline className="modal__close-icon" />
      </motion.button>
      <motion.div className="modal__info" variants={modalInfoVariants}>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="modal__price">{price}</span>
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="modal__address">{name}</span>
        </motion.div>
        {/* <motion.div className="modal__row" variants={modalRowVariants}>
          <Feature iconName={"FaFire"} iconLabel={10} />
          <Feature iconName={"FaFire"} iconLabel={6} />
          <Feature iconName={"FaFire"} iconLabel={3} />
        </motion.div> */}
        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <p
            className="modal__description"
            style={
              lang
                ? { direction: textDirection }
                : { direction: textDirection, fontFamily: "Cairo" }
            }
          >
            {description}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Feature = ({ iconName, iconLabel }) => {
  const Icon = FontAwesome[iconName];
  return (
    <div className="feature">
      <div className="feature__circle">
        <Icon className="feature__icon" />
      </div>
      <span className="feature__label">{iconLabel}</span>
    </div>
  );
};

export default Modal;
