import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PerksModuleStyles } from "./PerksModuleStyles"
import Perk from "./Perk"

const PerksModule = () => {
  return (
    <PerksModuleStyles>
      <StaticImage
        className="perks__image--bg"
        src="../../images/abstract-building.jpg"
        alt="Perks Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay"></div>
      <div className="container">
        <Perk
          title="Commodifying Virality"
          content="We allow you to make the popularity of your video a tradable asset"
        >
        </Perk>
        <Perk
          title="Involving Viewers"
          content="Allowing viewers to make money by investing their fave videos"
        >
        </Perk>
        <Perk
          title="Gamification"
          content="Have fun betting on a videos virality "
        >
        </Perk>
        <Perk
          title="Gamification"
          content="Have fun betting on a videos virality "
        >
        </Perk>
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule
