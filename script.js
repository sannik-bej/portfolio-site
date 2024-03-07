const swapSpace = document.querySelector("#swap-space");
const aboutBtn = document.querySelector("#about-btn");
const secTitle = document.querySelector("#sec-title");
const desc = document.querySelector("#desc");
const interests = document.querySelector("#interests");
const works = document.querySelector("#works");
const aboutSec = {
  secTitle: "About Me",
  desc: "tech / video game enthusiast. i learn quick, stay organized.",
};
const workSec = {
  secTitle: "My Works",
  desc: "these are some of my guided/ self-created projects that i've done alongside my learning journey.",
};
function SwapSpace(index) {
  switch (index) {
    case 1:
      secTitle.innerHTML = aboutSec.secTitle;
      desc.innerText = aboutSec.desc;
      works.style.display = "none";
      interests.style.display = "block";
      break;
    case 2:
      secTitle.innerHTML = workSec.secTitle;
      desc.innerText = workSec.desc;
      interests.style.display = "none";
      works.style.display = "block";
      break;
    default:
      break;
  }
}
