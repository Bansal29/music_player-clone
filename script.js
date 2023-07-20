//initialize the variables
let songIndex = 1;
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("progressbar");
let mastersongname = document.getElementById("mastersongname");
let mastersongcover = document.getElementById("cov");
let songs = [
  { songname: "Pehla gaana", filepath: "song-1.mp3", coverPath: "2.jpg" },
  { songname: "Dusra gaana", filepath: "song-2.mp3", coverPath: "3.jpg" },
  { songname: "Teesra gaana", filepath: "song-3.mp3", coverPath: "4.jpg" },
  { songname: "Chautha gaana", filepath: "song-4.mp3", coverPath: "5.jpg" },
  { songname: "Paanchva gaana", filepath: "song-5.mp3", coverPath: "6.jpg" },
  { songname: "Chanta gaana", filepath: "song-6.mp3", coverPath: "2.jpg" },
];
let audioelement = new Audio("song-1.mp3");

//handle pause/play from masterplay
masterplay.addEventListener("click", () => {
  if (audioelement.paused || audioelement.currentTime <= 0) {
    audioelement.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    document.getElementById("gif").style.opacity = 1;
    document.getElementById("cov").style.opacity = 1;
    document.getElementById(`s${songIndex}`).style.backgroundColor = "aqua";
  } else {
    audioelement.pause();
    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-circle-play");
    document.getElementById("gif").style.opacity = 0;
    // document.getElementById("cov").style.opacity = 0;
    document.getElementById(`s${songIndex}`).style.backgroundColor = "white";
  }
});

//listen to events for proggressbar
audioelement.addEventListener("timeupdate", () => {
  progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
  myprogressbar.value = progress;
});
myprogressbar.addEventListener("change", () => {
  audioelement.currentTime =
    (myprogressbar.value * audioelement.duration) / 100;
});

//makeallplay
const makeallplay = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
      document.getElementById(`s${songIndex}`).style.backgroundColor = "white";
    }
  );
};
//click to play from panel
Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeallplay();
      songIndex = parseInt(e.target.id);
      if (audioelement.paused) {
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioelement.src = `song-${songIndex}.mp3`;
        mastersongcover.src = `${songIndex}.jpg`;
        mastersongname.innerText = songs[songIndex - 1].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        document.getElementById("gif").style.opacity = 1;
        document.getElementById("cov").style.opacity = 1;
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
        document.getElementById(`s${songIndex}`).style.backgroundColor = "aqua";
      } else {
        e.target.classList.remove("fa-circle-pause");
        e.target.classList.add("fa-circle-play");
        audioelement.src = `song-${songIndex}.mp3`;
        mastersongname.innerText = songs[songIndex - 1].songname;
        mastersongcover.src = `${songIndex}.jpg`;
        document.getElementById("cov").style.opacity = 1;
        audioelement.currentTime = 0;
        audioelement.pause();
        document.getElementById("gif").style.opacity = 0;
        masterplay.classList.remove("fa-circle-pause");
        masterplay.classList.add("fa-circle-play");
        document.getElementById(`s${songIndex}`).style.backgroundColor =
          "white";
      }
    });
  }
);
//Next button functionality
document.getElementById("next").addEventListener("click", () => {
  if (songIndex > 6) {
    songIndex = 1;
  } else {
    songIndex += 1;
  }
  audioelement.src = `song-${songIndex}.mp3`;
  mastersongname.innerText = songs[songIndex - 1].songname;
  mastersongcover.src = `${songIndex}.jpg`;
  document.getElementById("cov").style.opacity = 1;
  audioelement.currentTime = 0;
  audioelement.play();
  document.getElementById("gif").style.opacity = 1;
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
  document.getElementById(`s${songIndex}`).style.backgroundColor = "aqua";
  document.getElementById(`s${songIndex - 1}`).style.backgroundColor = "white";
});

//Previous button functionality
document.getElementById("prev").addEventListener("click", () => {
  if (songIndex <= 1) {
    songIndex = 6;
  } else {
    songIndex -= 1;
  }
  audioelement.src = `song-${songIndex}.mp3`;
  mastersongname.innerText = songs[songIndex - 1].songname;
  mastersongcover.src = `${songIndex}.jpg`;
  document.getElementById("cov").style.opacity = 1;
  audioelement.currentTime = 0;
  audioelement.play();
  document.getElementById("gif").style.opacity = 1;
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
  document.getElementById(`s${songIndex}`).style.backgroundColor = "aqua";
  document.getElementById(`s${songIndex + 1}`).style.backgroundColor = "white";
});

//autochange bg
var backgroundImages = [
  "bg-2.jpeg",
  "bg-3.jpg",
  "bg-4.jpg",
  "bg-5.jpg",
  "bg-6.jpg",
];

var section = document.querySelector(".main");
var index = 0;

function changeBackgroundImage() {
  section.style.backgroundImage = `url('${backgroundImages[index]}')`;
  index = (index + 1) % backgroundImages.length;
}
changeBackgroundImage();
setInterval(changeBackgroundImage, 2500);
