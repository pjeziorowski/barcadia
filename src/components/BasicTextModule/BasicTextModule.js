import { Link } from "gatsby"
import * as React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"

const BasicTextModule = () => {
  return (
    <BasicTextModuleStyles>
      <div className="container">
        <h2>
          Commodifying the virality of social media videos through NFTs
        </h2>
        <p style={{ marginBottom: "60px" }}>
          Other NFT marketplaces base the value of NFTs on how rare the NFT is, at Halluce we base the value of video NFTs on how viral and popular a video is on social media.
        </p>
      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
