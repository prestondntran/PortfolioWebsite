import React from "react";

export default function Navbar() {
  return (
    <nav>
      <h1>PRESTON TRAN</h1>
      <ul class="navigation">
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="#certificates" class="nav-link">Certificates</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
}