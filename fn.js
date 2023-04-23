const section = document.getElementById("section");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const boxes = section.querySelectorAll(".box");
let currentBoxIndex = 0;

// Oculta todas las cajas excepto la actual
function hideBoxes() {
  boxes.forEach((box) => {
    if (box !== boxes[currentBoxIndex]) {
      box.style.display = "none";
    } else {
      box.style.display = "flex";
    }
  });
}

// Muestra la siguiente caja
function showNextBox() {
  if (currentBoxIndex < boxes.length - 1) {
    currentBoxIndex++;
  } else {
    currentBoxIndex = 0;
  }
  hideBoxes();
}

// Muestra la caja anterior
function showPrevBox() {
  if (currentBoxIndex > 0) {
    currentBoxIndex--;
  } else {
    currentBoxIndex = boxes.length - 1;
  }
  hideBoxes();
}

// Agrega los eventos a los botones
nextBtn.addEventListener("click", showNextBox);
backBtn.addEventListener("click", showPrevBox);

// Oculta todas las cajas excepto la primera
hideBoxes();
<<<<<<< Updated upstream


function hideBoxes() {
  boxes.forEach((box) => {
    if (box !== boxes[currentBoxIndex]) {
      box.classList.remove("active");
    } else {
      box.classList.add("active");
    }
  });
}
=======
>>>>>>> Stashed changes
