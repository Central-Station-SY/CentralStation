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
    initial: { scale: 0.95 },
    hover: { scale: 1.1 },
  };

  const textDirection = lang ? "ltr" : "rtl";
  const categoryName = lang ? categoryName_en : categoryName_ar;

  return (
    <motion.div
      key={id}
      className="col-sm-6 col-lg-4"
      onClick={() => setIsActiveCategory(categoryName)}
    >
      <motion.div variants={glowVariants} className="box">
        <motion.div>
          <motion.div className="img-box">
            <img
              src={require("../assets/images/items/" + categoryImage)}
              alt={categoryName}
            />
          </motion.div>
          <motion.div className="detail-box">
            <h5
              style={{
                direction: textDirection,
                fontFamily: lang ? "VINTAGE COLLEGE DEPT_DEMO_outli" : "Cairo",
              }}
            >
              {categoryName}
            </h5>
            <button
              className="btn"
              style={{ position: "absolute", bottom: "10px", left: "10px" }}
            >
              <svg
                width="180px"
                height="60px"
                viewBox="0 0 180 60"
                className="border"
              >
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  className="bg-line"
                />
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  className="hl-line"
                />
              </svg>
              <span
                style={{
                  direction: textDirection,
                  fontFamily: lang ? "inherit" : "Cairo",
                }}
              >
                {lang ? "see details" : "التفاصيل"}
              </span>
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default CategoryCard;
