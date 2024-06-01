import React from "react";
import { motion } from "framer-motion";

function CategoryCard({
  id,
  categoryName_en,
  categoryName_ar,
  categoryImage,
  setIsActiveCategory,
  lang,
}) {
  const glowVariants = {
    initial: {
      scale: 0.95,
    },
    hover: {
      scale: 1.1,
    },
  };

  const textDirection = lang ? "ltr" : "rtl";

  const categoryName = lang ? categoryName_en : categoryName_ar;

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
            <h5
              style={
                lang
                  ? { direction: textDirection }
                  : { direction: textDirection, fontFamily: "Cairo" }
              }
            >
              {categoryName}
            </h5>
            {/* <p>{categoryDescription}</p> */}
            <button
              class="btn"
              style={{
                position: "absolute",
                bottom: "10px",
                left: "10px", // Adjust as needed
              }}
            >
              <svg
                width="180px"
                height="60px"
                viewBox="0 0 180 60"
                class="border"
              >
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  class="bg-line"
                />
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  class="hl-line"
                />
              </svg>
              <span
                style={
                  lang
                    ? { direction: textDirection }
                    : { direction: textDirection, fontFamily: "Cairo" }
                }
              >
                {" "}
                {lang ? "see details" : "التفاصيل"}{" "}
              </span>
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default CategoryCard;
