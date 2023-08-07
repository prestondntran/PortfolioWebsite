import React from "react";
import instagram from './images/Instagram_logo_2016.svg.webp';
import linkedIn from './images/640px-LinkedIn_logo_initials.png';
import github from './images/github-logo.png';

export default function About() {
  return (
    <section class="contact" id="contact">
      <h2>Contact Me</h2>
      <div class="contact-form-container">
        <div class="contact-form">
          <form action="https://formspree.io/f/moqojwna" method="POST">
            <div class="form-control">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="sender-name"
                placeholder="Enter Your Name"
                class="input-field"
                required
              />
            </div>
            <div class="form-control">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="sender-email"
                placeholder="Enter Your Email"
                class="input-field"
                required
              />
            </div>
            <div class="form-control">
              <label for="message">Message</label>
              <textarea
                id="message"
                cols="60"
                rows="10"
                placeholder="Enter Your Message"
                name="message"
                class="input-field"
                required
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit"
              id="submit-btn"
              class="submit-btn"
            />
          </form>
        </div>
      </div>
      <div class="socials">
        <a href="https://www.instagram.com/prestontrannnn/" target="_blank"
          ><img
            src={instagram}
            alt="Instagram"
            loading="lazy"
            class="socicon"
        /></a>
        <a href="https://www.linkedin.com/in/preston-tran-059903235/" target="_blank"
          ><img
            src={linkedIn}
            alt="Linkedin"
            loading="lazy"
            class="socicon"
        /></a>
        <a href="https://github.com/prestondntran" target="_blank"
          ><img src={github} alt="Github" class="socicon"
        /></a>
      </div>
    </section>
  );
}