const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const imgContainer = document.querySelector(".video-container");

let leftPosition = 0;

const imgContainerWidth = -imgContainer.offsetWidth;

prevBtn.onclick = () => {
  if (leftPosition < 0) {
    leftPosition += 200;
    imgContainer.style.left = leftPosition + "px";
    console.log(leftPosition);
  } else {
    return (leftPosition = 0);
  }
};

nextBtn.onclick = () => {
  if (leftPosition > imgContainerWidth + 1200) {
    leftPosition -= 200;
    imgContainer.style.left = leftPosition + "px";
    console.log(leftPosition);
  } else {
    return (leftPosition = 200);
  }
};

console.log(imgContainerWidth);

function revealDisclaimer(){
  document.getElementsByClassName("hiddenDisclaimer").innerHTML.style.display='block'
};
