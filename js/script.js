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







