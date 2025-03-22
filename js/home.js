import videoObjectArray from "./components/data.js";

let homeimagesall = videoObjectArray.filter(
  (video) => video.imagetype === "mp4"
);

var homeimages = homeimagesall.filter((video, idx) => idx < 9);

// console.log("These are all the video objects with mp4s:", homeimagesall);
// console.log("These are first 6 video objects with mp4s", homeimages);

const imageList = homeimages.map((video) => {
  let videoArticle = document.createElement("div");
  videoArticle.classList.add("front_image_container");

  videoArticle.innerHTML = `
  <a href="${video.pagelink}">   
  <video class="front_image fadeInUp-animation" autoplay loop muted width="480" height="270">
  <source type="video/mp4" src="./${video.image}">
  </video>
  </a>
   <div class="image_text"><a href="${video.pagelink}"><span>${video.genre}</span><hr class="new1"></a></div>
  `;

  return videoArticle;
});

const frontpage = document.querySelector(".image-block");

imageList.forEach((video) => {
  frontpage.append(video);
});
