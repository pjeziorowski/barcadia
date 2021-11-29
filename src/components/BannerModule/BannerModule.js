import { Link, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { MdArrowDownward as Arrow } from "react-icons/md"
import Button from "../Button/Button"
import { BannerModuleStyles } from "./BannerModuleStyles"

const BannerModule = ({ children, title, subTitle, price, enquire }) => {
  function scrollToArea() {
    navigate("#topContent")
  }

  return (
    <>
      <BannerModuleStyles>
        {children ? (
          children
        ) : (
          <StaticImage
            className="banner__image"
            imgClassName="banner__image--content"
            src="../../images/macbook-color.jpg"
            alt="Banner Image"
            layout="fullWidth"
            placeholder="blurred"
          />
        )}

        <div className="container">
          <div className="banner__content">
            <StaticImage
              src="../../images/logos/halluce-logo.svg"
              alt="Perk Image"
              layout="constrained"
              placeholder="tracedSVG"
            />
            {subTitle && <h2>{subTitle}</h2>}
            {price && (
              <h2 className="price">
                £{price}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h2>
            )}
            {enquire && <Button text="Enquire Now" as={Link} to="/contact" />}
            <Button text="Join the waiting list" as={Link} to="/products" />
            <button onClick={scrollToArea}>
              <Arrow />
            </button>
          </div>
        </div>
      </BannerModuleStyles>
      <span id="topContent"></span>
    </>
  )
}

export default BannerModule
