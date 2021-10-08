import videoObjectArray from "./components/data.js";

const videoList = videoObjectArray.map((video) => {
  let videoArticle = document.createElement("div");
  videoArticle.classList.add("video");
  videoArticle.setAttribute("id", video.id);

  videoArticle.innerHTML = `
    <figure class="video__spot">
     ${video.videolocation}
    </figure>
    <h1 class="video__name">${video.promoName}</h1>
    <ul class="video__details">
      <li class="detail video__brand">Brand: <span>${video.brand}</span></li>
      <li class="detail video__client">Client: <span>${video.client}</span></li>
      <li class="detail video__role">Role: <span>${video.role}</span></li>
      <li class="detail video__genre">Genre: <span>${video.genre}</span></li>
      <li class="detail video__duration">Duration: <span>${video.duration}</span></li>
    </ul>
  `;


  return videoArticle;
});

console.log("These are all the video objects:", videoList);

const videosection = document.querySelector(".videosection");

videoList.forEach((video) => {
  videosection.append(video)
});





// Promotions videos

let promotions = videoObjectArray.filter(video => video.genre === "Promotions");

console.log("These are all the promotion video objects:", promotions);

const promotionslist = promotions.map((video) => {
  let videoArticle = document.createElement("div");
  videoArticle.classList.add("video");
  videoArticle.setAttribute("id", video.id);

  videoArticle.innerHTML = `
    <figure class="video__spot">
     ${video.videolocation}
    </figure>
    <h1 class="video__name">${video.promoName}</h1>
    <ul class="video__details">
      <li class="detail video__brand">Brand: <span>${video.brand}</span></li>
      <li class="detail video__client">Client: <span>${video.client}</span></li>
      <li class="detail video__role">Role: <span>${video.role}</span></li>
      <li class="detail video__genre">Genre: <span>${video.genre}</span></li>
      <li class="detail video__duration">Duration: <span>${video.duration}</span></li>
    </ul>
  `;


  return videoArticle;
});


const videosection2 = document.querySelector(".container");

promotionslist.forEach((video) => {
  videosection2.append(video)
});

// Marketing videos

let marketing = videoObjectArray.filter(video => video.genre === "Social Media Marketing");

console.log("These are all the social media marketing video objects:", marketing);

const marketinglist = marketing.map((video) => {
  let videoArticle = document.createElement("div");
  videoArticle.classList.add("video");
  videoArticle.setAttribute("id", video.id);

  videoArticle.innerHTML = `
    <figure class="video__spot">
     ${video.videolocation}
    </figure>
    <h1 class="video__name">${video.promoName}</h1>
    <ul class="video__details">
      <li class="detail video__brand">Brand: <span>${video.brand}</span></li>
      <li class="detail video__client">Client: <span>${video.client}</span></li>
      <li class="detail video__role">Role: <span>${video.role}</span></li>
      <li class="detail video__genre">Genre: <span>${video.genre}</span></li>
      <li class="detail video__duration">Duration: <span>${video.duration}</span></li>
    </ul>
  `;


  return videoArticle;
});


let marketing2 = videoObjectArray.filter(video => video.genre === "Corporate Marketing");

console.log("These are all the corporate marketing video objects:", marketing2);

const marketinglist2 = marketing2.map((video) => {
  let videoArticle = document.createElement("div");
  videoArticle.classList.add("video");
  videoArticle.setAttribute("id", video.id);

  videoArticle.innerHTML = `
    <figure class="video__spot">
     ${video.videolocation}
    </figure>
    <h1 class="video__name">${video.promoName}</h1>
    <ul class="video__details">
      <li class="detail video__brand">Brand: <span>${video.brand}</span></li>
      <li class="detail video__client">Client: <span>${video.client}</span></li>
      <li class="detail video__role">Role: <span>${video.role}</span></li>
      <li class="detail video__genre">Genre: <span>${video.genre}</span></li>
      <li class="detail video__duration">Duration: <span>${video.duration}</span></li>
    </ul>
  `;


  return videoArticle;
});

const videosection3 = document.querySelector(".marketing");

marketinglist.forEach((video) => {
  videosection3.append(video)
});
marketinglist2.forEach((video) => {
  videosection3.append(video)
});


// Features

let features = videoObjectArray.filter(video => video.genre === "Features");

console.log("These are all the features video objects:", features);

const featureslist = features.map((video) => {
  let videoArticle = document.createElement("div");
  videoArticle.classList.add("video");
  videoArticle.setAttribute("id", video.id);

  videoArticle.innerHTML = `
    <figure class="video__spot">
     ${video.videolocation}
    </figure>
    <h1 class="video__name">${video.promoName}</h1>
    <ul class="video__details">
      <li class="detail video__brand">Brand: <span>${video.brand}</span></li>
      <li class="detail video__client">Client: <span>${video.client}</span></li>
      <li class="detail video__role">Role: <span>${video.role}</span></li>
      <li class="detail video__genre">Genre: <span>${video.genre}</span></li>
      <li class="detail video__duration">Duration: <span>${video.duration}</span></li>
    </ul>
  `;


  return videoArticle;
});

const videosection4 = document.querySelector(".features");

featureslist.forEach((video) => {
  videosection4.append(video)
});




// home page image block attempt .mp4

let homeimagesall = videoObjectArray.filter(video => video.imagetype === "mp4");

var homeimages = homeimagesall.filter((video,idx) => idx < 6)



console.log("These are all the video objects with mp4s:", homeimagesall);
console.log("These are first 6 video objects with mp4s", homeimages);

const imageList = homeimages.map((video) => {
  let videoArticle = document.createElement("div");
  videoArticle.classList.add("front_image_container");

  videoArticle.innerHTML = `
  <a href="${video.pagelink}">   
  <video class="front_image" autoplay loop muted width="480" height="270">
  <source type="video/mp4" src="./${video.image}">
  </video>
  </a>
    <div class="image_text"><a href="${video.pagelink}"><span>${video.genre}</span><hr class="new1"></a></div>
  `;


  return videoArticle;
});



const frontpage = document.querySelector(".image-block");

imageList.forEach((video) => {
  frontpage.append(video)
});


// window.onscroll = function() {
//   scrollFunction();
// };

// //Get the button:
// mybutton = document.getElementById("myBtn");


// function scrollFunction() {
// if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//   mybutton.style.opacity = "1";
// } else {
//   mybutton.style.opacity = "0";
// }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
// document.body.scrollTop = 0; // For Safari
// document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }







// console.log(promotions);
// console.log(videoObjectArray);
// console.log(videoList);
// console.log(terminator2);
// console.log(terminator2.image); 

/* <figure class="video__spot">
     ${video.videolocation}
    </figure>
    <h1 class="video__name">${video.promoName}</h1>
    <ul class="video__details">
      <li class="detail video__brand">Brand: <span>${video.brand}</span></li>
      <li class="detail video__client">Client: <span>${video.client}</span></li>
      <li class="detail video__role">Role: <span>${video.role}</span></li>
      <li class="detail video__genre">Genre: <span>${video.genre}</span></li>
      <li class="detail video__duration">Duration: <span>${video.duration}</span></li>
<<<<<<< Updated upstream
    </ul> */


// home page image block attempt

// let homeimages = videoObjectArray.filter(video => video.imagetype ==="gif");

// const imageList = homeimages.map((video) => {
//   let videoArticle = document.createElement("div");
//   videoArticle.classList.add("front_image_container");

//   videoArticle.innerHTML = `
//   <a href="${video.pagelink}"><img class="front_image" alt="${video.promoName}" src="./${video.image}"></img></a>
//     <div class="image_text"><a href="${video.pagelink}"><span>${video.genre}</span><hr class="new1"></a></div>
    
//   `;


//   return videoArticle;
// });



// const frontpage = document.querySelector(".image-block");

// imageList.forEach((video) => {
//   frontpage.append(video)
// });
