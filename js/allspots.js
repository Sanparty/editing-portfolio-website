console.log('this is working');


import videoObjectArray from "./components/data.js";

//differet genre videos

let promotionsVideos = videoObjectArray.filter(function (item) {
    return item.genre == 'Promotions';
});

let smarketingVideos = videoObjectArray.filter(function (item) {
    return item.genre == "Social Media Marketing";
});

let cmarketingVideos = videoObjectArray.filter(function (item) {
    return item.genre == "Corporate Marketing";
});

let featuresVideos = videoObjectArray.filter(function (item) {
    return item.genre == 'Features';
});

let mlseVideos = videoObjectArray.filter(function (item) {
    return item.client == 'Maple Leaf Sports and Entertainment';
});

let tmnVideos = videoObjectArray.filter(function (item) {
    return (item.brand == 'The Movie Network' || item.brand == 'The Movie Network Encore');  
});

let marketingVideos = videoObjectArray.filter(function (item) {
    return (item.genre == "Social Media Marketing" || item.genre == "Corporate Marketing");  
});



console.log (tmnVideos);






// new array code attempt


window.promotionsShow = function promotionsShow() {
    promotions()
}

window.featuresShow = function featuresShow() {
    features()
}

window.smarketingShow = function smarketingShow() {
    smarketing()
}


window.cmarketingShow = function cmarketingShow() {
    cmarketing()
}

window.mlseShow = function mlseShow() {
    mlse()
}

window.tmnShow = function tmnShow() {
    tmn()
}

window.marketingShow = function marketingShow() {
    marketing()
}
// let promotionsButton = document.getElementById('promotionsBtn');
// let featuresButton = document.getElementById('featuresBtn');
// let smarketingButton = document.getElementById('smarketingBtn');
// let cmarketingButton = document.getElementById('cmarketingBtn');

let container = document.getElementById('container');
console.log('Container text: ' + container.innerHTML);

function promotions() {
    container.innerHTML = "";
    
    const promotionslist = promotionsVideos.map((video) => {
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


    promotionslist.forEach((video) => {
        container.append(video)
    });

}

// Features

function features() {
    container.innerHTML = "";

    const promotionslist = featuresVideos.map((video) => {
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


    promotionslist.forEach((video) => {
        container.append(video)
    });
}

// Social Media Marketing

function smarketing() {
    container.innerHTML = "";

    const promotionslist = smarketingVideos.map((video) => {
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


    promotionslist.forEach((video) => {
        container.append(video)
    });
}

// Social Media Marketing

function cmarketing() {
    container.innerHTML = "";

    const promotionslist = cmarketingVideos.map((video) => {
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


    promotionslist.forEach((video) => {
        container.append(video)
    });
}


// MLSE

function mlse() {
    container.innerHTML = "";

    const promotionslist = mlseVideos.map((video) => {
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


    promotionslist.forEach((video) => {
        container.append(video)
    });
}

// The Movie Network

function tmn() {
    container.innerHTML = "";
   
    const promotionslist = tmnVideos.map((video) => {
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
    // let brand = document.createElement("div");
    // brand.innerHTML = `<h1>${tmnVideos.brand}</h1>`;
    // container.insertBefore(brand);

    promotionslist.forEach((video) => {
        container.append(video)
    });
}

function marketing() {
    container.innerHTML = "";
   
    const promotionslist = marketingVideos.map((video) => {
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
    // let brand = document.createElement("div");
    // brand.innerHTML = `<h1>${tmnVideos.brand}</h1>`;
    // container.insertBefore(brand);

    promotionslist.forEach((video) => {
        container.append(video)
    });
}