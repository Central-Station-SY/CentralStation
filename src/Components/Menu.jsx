import React, { useEffect, useState, useRef } from "react";
import { data } from "../assets/data";
import Card from "./Card";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function Menu() {
  const [isActiveCategory, setIsActiveCategory] = useState(null);
  const [cards, setCards] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showItems, setShowItems] = useState(false);
  const [langEn, setLangEn] = useState(true);
  const [activeButton, setActiveButton] = useState("English");
  const itemsPerPage = 50;
  const containerRef = useRef(null);
  const firstItemRef = useRef(null);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cards.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setCategories(data.menu);
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    if (isActiveCategory !== null) {
      const selectedCategory = data.menu.find(
        (category) =>
          category.categoryName_en === isActiveCategory ||
          category.categoryName_ar === isActiveCategory
      );

      if (selectedCategory) {
        setCards(selectedCategory.items);
      }

      setShowItems(true);
      window.history.pushState(
        { category: isActiveCategory },
        "",
        `#${isActiveCategory}`
      );
    } else {
      setCards([]);
      setShowItems(false);
      window.history.pushState({}, "", "");
    }
  }, [isActiveCategory, langEn]);

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.category) {
        setIsActiveCategory(event.state.category);
      } else {
        setIsActiveCategory(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (firstItemRef.current) {
      firstItemRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isActiveCategory, currentPage]);

  const handleLanguageChange = (lang) => {
    setLangEn(lang === "English");
    setActiveButton(lang);
    setIsActiveCategory(null);
    setCards([]);
    setShowItems(false);
    window.history.pushState({}, "", "");
  };

  return (
    <motion.div
      id="Menu"
      className="main_div"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 2 }}
      ref={containerRef}
    >
      <motion.div className="food_section layout_padding-bottom">
        <motion.div className="container">
          <motion.div className="heading_container heading_center">
            <h2>Our Menu</h2>
          </motion.div>
          <motion.div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "45px",
            }}
          >
            <motion.button
              style={{
                padding: "1px 12px",
                backgroundColor: "#EF8621",
                color: activeButton === "Arabic" ? "#851619" : "#EFF1DC",
                borderRadius: "54px",
                transition: "all 0.3s ease",
                border:
                  activeButton === "Arabic" ? "2px solid #851619" : "none",
                width: "73px",
                marginRight: "20px",
                height: "56px",
                transform:
                  activeButton === "Arabic" ? "scale(1.3)" : "scale(1)",
                boxShadow:
                  activeButton === "Arabic"
                    ? "0px 0px 25px rgba(239, 241, 220, 0.5)"
                    : "none",
              }}
              onClick={() => handleLanguageChange("Arabic")}
            >
              Arabic
            </motion.button>
            <motion.button
              style={{
                padding: "1px 12px",
                backgroundColor: "#EF8621",
                color: activeButton === "English" ? "#851619" : "#EFF1DC",
                borderRadius: "54px",
                transition: "all 0.3s ease",
                border:
                  activeButton === "English" ? "2px solid #851619" : "none",
                width: "73px",
                marginRight: "20px",
                height: "56px",
                transform:
                  activeButton === "English" ? "scale(1.3)" : "scale(1)",
                boxShadow:
                  activeButton === "English"
                    ? "0px 0px 25px rgba(239, 241, 220, 0.5)"
                    : "none",
              }}
              onClick={() => handleLanguageChange("English")}
            >
              English
            </motion.button>
          </motion.div>
          <motion.div className="filters_menu">
            {showItems ? (
              <motion.div>
                <motion.div className="filters_menu">
                  <motion.div
                    onClick={() => setIsActiveCategory(null)}
                    style={{ paddingRight: "110%" }}
                  >
                    <FaArrowCircleLeft size={"50px"} />
                  </motion.div>
                  <motion.div className="row grid">
                    {currentItems.map((item, index) => (
                      <Card
                        lang={langEn}
                        key={item.id}
                        {...item}
                        ref={index === 0 ? firstItemRef : null}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div className="row grid glow">
                {categories.map((item, index) => (
                  <CategoryCard
                    key={index}
                    setIsActiveCategory={setIsActiveCategory}
                    {...item}
                    lang={langEn}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
