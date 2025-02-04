"use strict";

import socialLinks from "./components/socialLinks.js";

const socialLinksContainer = document.querySelectorAll(".social-media");

socialLinks.forEach((link) => {
  const socialLink = document.createElement("a");
  socialLink.href = link.link;
  socialLink.target = "_blank";
  socialLink.className = "social-media_logo";
  socialLink.innerHTML = `<img src="images/${link.image}" alt="${link.alt}">`;
  socialLinksContainer[0].appendChild(socialLink);
});
