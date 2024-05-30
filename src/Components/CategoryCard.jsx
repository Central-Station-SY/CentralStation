import React, { useEffect, useState } from "react";
import { data } from "../assets/data";
import Card from "./Card";
import { motion } from "framer-motion";

function CategoryCard({
  id,
  categoryName,
  categoryImage,
  categoryDescription,
  setIsActiveCategory,
}) {
  const glowVariants = {
    initial: {
      scale: 0.95,
    },
    hover: {
      scale: 1.1,
    },
  };
  return (
    <motion.div
      key={id}
      className="col-sm-6 col-lg-4"
      onClick={() => setIsActiveCategory(categoryName)}
      initial={glowVariants.initial}
      whileHover={glowVariants.hover}
    >
      <motion.div variants={glowVariants} className="box">
        <motion.div>
          <motion.div className="img-box">
            <img src={require("../assets/images/" + categoryImage)} alt="" />
          </motion.div>
          <motion.div className="detail-box">
            <h5>{categoryName}</h5>
            <p>{categoryDescription}</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default CategoryCard;
