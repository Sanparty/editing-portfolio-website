// Set up the Videoclass
class Video {
  constructor(
    id,
    promoName,
    brand,
    client,
    genre,
    role,
    offline,
    online,
    graphics,
    colorcorrection,
    audiomixing,
    duration,
    videohost,
    videolocation,
    datecreated,
    image,
    imagetype,
    pagelink
  ) {
    this.id = id;
    this.promoName = promoName;
    this.brand = brand;
    this.client = client;
    this.genre = genre;
    this.role = role;
    this.offline = offline;
    this.online = online;
    this.graphics = graphics;
    this.colorcorrection = colorcorrection;
    this.audiomixing = audiomixing;
    this.duration = duration;
    this.videohost = videohost;
    this.videolocation = videolocation;
    this.datecreated = datecreated;
    this.image = image;
    this.imagetype = imagetype;
    this.pagelink = pagelink
  }
}
   

// Export the Video class to be used by other files
export default Video;


// this.strapLength = {
//   left: strapLengthL,
//   right: strapLengthR,
// };
// this.lidOpen = lidOpen;
// this.dateAcquired = dateAcquired;
// this.image = image;
// }
// toggleLid(lidStatus) {
// this.lidOpen = lidStatus;
// }
// newStrapLength(lengthLeft, lengthRight) {
// this.strapLength.left = lengthLeft;
// this.strapLength.right = lengthRight;
// }
// backpackAge() {
// let now = new Date();
// let acquired = new Date(this.dateAcquired);
// let elapsed = now - acquired; // elapsed time in milliseconds
// let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
// return daysSinceAcquired;
// }
// }