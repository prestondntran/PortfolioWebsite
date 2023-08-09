import React from "react";
import spotify from './images/spotifyapp.png';
import drawing from './images/drawingapp.png';

export default function Projects() {
  return (
    <section class="projects" id="projects">
      <h2 class="projects-title">Recent Projects</h2>
      <center>
        <div class="projects-container">
          <div class="project-container project-card">
            <img
              src={spotify}
              alt="spotify-rec"
              loading="lazy"
              class="project-pic"
            />
            <h3 class="project-title">Spotify Recommendation Engine</h3>
            <p class="project-details">
              Get song recommendations from Spotify based on specific
              artists, songs, and genres.
            </p>
            <a href="https://github.com/prestondntran/SpotifyApp" target="_blank" class="project-link">Check it Out</a>
          </div>
          <div class="project-container project-card">
            <img
              src={drawing}
              alt="sketchpad"
              loading="lazy"
              class="project-pic"
            />
            <h3 class="project-title">Sketchpad and Color Generator</h3>
            <p class="project-details">
              Create vibrant images using a variety of drawing tools
              and color generators.
            </p>
            <a href="https://github.com/prestondntran/DrawingApp" target="_blank" class="project-link">Check it Out</a>
          </div>
        </div>
      </center>
    </section>
  );
}