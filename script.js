const cvDialog = document.querySelector("[data-cv-dialog]");
const openCvButtons = document.querySelectorAll("[data-open-cv]");
const closeCvButton = document.querySelector("[data-close-cv]");
const contactModal = document.querySelector("[data-contact-modal]");
const openContactButtons = document.querySelectorAll("[data-open-contact]");
const closeContactButton = document.querySelector("[data-close-contact]");

async function loadPartial(selector, path) {
  const target = document.querySelector(selector);
  if (!target) return;
  try {
    const response = await fetch(path);
    if (!response.ok) return;
    target.innerHTML = await response.text();
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadPartial("#site-header", "header.html");
  loadPartial("#site-footer", "footer.html");
});

function openCvDialog() {
  if (!cvDialog) return;
  cvDialog.showModal();
}

function closeCvDialog() {
  if (!cvDialog) return;
  cvDialog.close();
}

openCvButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    openCvDialog();
  });
});

if (closeCvButton) {
  closeCvButton.addEventListener("click", closeCvDialog);
}

if (cvDialog) {
  cvDialog.addEventListener("click", (event) => {
    if (event.target === cvDialog) {
      closeCvDialog();
    }
  });
}

function openContactModal() {
  if (!contactModal) return;
  contactModal.showModal();
}

function closeContactModal() {
  if (!contactModal) return;
  contactModal.close();
}

openContactButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    openContactModal();
  });
});

if (closeContactButton) {
  closeContactButton.addEventListener("click", closeContactModal);
}

if (contactModal) {
  contactModal.addEventListener("click", (event) => {
    if (event.target === contactModal) {
      closeContactModal();
    }
  });
}
