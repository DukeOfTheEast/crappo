"use strict";

const cryptoCards = document.querySelector(".flex2");
const cryptoCard = document.querySelectorAll(".card");
const mineBtn = document.querySelector(".btn4");

const overlay = document.querySelector(".overlay");
const closeMod = document.querySelector(".close-modal");
const hashMod = document.querySelector(".hash-modal");

cryptoCards.addEventListener("click", function (e) {
  const crypt = e.target.closest(".card");

  cryptoCard.forEach((el) => {
    if (e.target === crypt) {
      el.classList.remove("card-active");
      crypt.classList.add("card-active");

      // BUTTONS CHANGE
      el.querySelector(".start").classList.add("hidden");
      crypt.querySelector(".start").classList.remove("hidden");
      el.querySelector(".btn").classList.remove("btn-active");
      crypt.querySelector(".btn").classList.add("btn-active");
      el.querySelector("svg").classList.remove("svg-active");
      crypt.querySelector("svg").classList.add("svg-active");
    }
  });
});

// // HAMBURGER MENU

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const navL = document.querySelector(".nav-l");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navL.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navL.classList.remove("active");
  })
);

// //MODAL
const hashInput = document.querySelector(".hash-input");
const hashRate = document.querySelector("#hashrate");
const eth = document.querySelector(".eth");
const dol = document.querySelector(".dol");
const optionH = document.querySelectorAll("option");

const showModal = function () {
  overlay.classList.remove("hidden");
  hashMod.classList.remove("hidden");
};

mineBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (hashInput.value === "" || hashInput.value === 0) {
    alert("Input a valid hashrate!!!");
    overlay.classList.add("hidden");
    hashMod.classList.add("hidden");
  } else if (hashRate.value === optionH[0].value) {
    showModal();
    eth.textContent = hashInput.value * 0.05513;
    dol.textContent = hashInput.value * 1275;
  } else if (hashRate.value === optionH[1].value) {
    showModal();
    eth.textContent = hashInput.value * (0.05513 / 1000);
    dol.textContent = hashInput.value * (1275 / 1000);
  } else if (hashRate.value === optionH[2].value) {
    showModal();
    eth.textContent = hashInput.value * (0.05513 / 1000000);
    dol.textContent = hashInput.value * (1275 / 1000000);
  } else if (hashRate.value === optionH[3].value) {
    showModal();
    eth.textContent = hashInput.value * (0.05513 / 1000000000);
    dol.textContent = hashInput.value * (1275 / 1000000000);
  } else if (hashRate.value === optionH[4].value) {
    showModal();
    eth.textContent = hashInput.value * (0.05513 / 1000000000000);
    dol.textContent = hashInput.value * (1275 / 1000000000000);
  }
  hashInput.value = "";
});

// CLOSE MODAL
overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
  hashMod.classList.add("hidden");
});

closeMod.addEventListener("click", function () {
  overlay.classList.add("hidden");
  hashMod.classList.add("hidden");
});
