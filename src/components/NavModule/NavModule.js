import { motion } from "framer-motion"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useContext } from "react"
import { UseSiteMetadata } from "../../hooks/useSiteMetadata"
import MenuContext from "../MenuContext"
import {
  barOneVariants, barThreeVariants, barTwoVariants, menuList
} from "./NavAnim"
import { menuItems } from "./NavConstants"
import { NavModuleStyles } from "./NavModuleStyles"

const NavModule = () => {
  const [isOpen, setNav] = useContext(MenuContext)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  const { title } = UseSiteMetadata()

  return (
    <NavModuleStyles>
      <div className="nav">
        <div className="container">
          <motion.button
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            onClick={toggleNav}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className={`hamburger${isOpen ? " open" : ""}`}
          >
            <motion.span
              className="bar"
              variants={barOneVariants}
            ></motion.span>
            <motion.span
              className="bar"
              variants={barTwoVariants}
            ></motion.span>
            <motion.span
              className="bar"
              variants={barThreeVariants}
            ></motion.span>
          </motion.button>

          {title && (
            <div className="logo">
              <Link to="/">
                <StaticImage
                  src="../../images/logos/halluce-logo.svg"
                  alt="Perk Image"
                  layout="constrained"
                  placeholder="tracedSVG"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuList}
        transition={{ type: "ease", stiffness: 50, velocity: 50 }}
        className="menu"
      >
        <ul>
          {menuItems.map((item, index) => (
            <li onClick={toggleNav} key={index}>
              <Link to={item.path} activeClassName="menu__item--active">
                {item.text}
                <span>.</span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </NavModuleStyles>
  )
}

export default NavModule
