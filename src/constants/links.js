import * as React from "react"
import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
} from "react-icons/fa"

export const menuItems = [
  {
    path: "/",
    text: "home",
  },
  {
    path: "https://beta.halluce.com",
    text: "marketplace",
  },
  {
    path: "/blog",
    text: "blog",
  },
  {
    path: "/blog",
    text: "how it works",
  },
  {
    path: "/contact",
    text: "contact",
  },
]

export const socialItems = [
  {
    path: "www.facebook.com",
    icon: <Facebook />,
  },
  {
    path: "www.twitter.com",
    icon: <Twitter />,
  },
  {
    path: "www.instagram.com",
    icon: <Instagram />,
  },
  {
    path: "www.linkedin.com",
    icon: <Linkedin />,
  },
]
