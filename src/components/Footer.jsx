import React from "react";
import "./styles/Footer.css";

export default function Footer() {
  let date = new Date().getFullYear();
  return <footer>Copywrite @ {date} </footer>;
}
