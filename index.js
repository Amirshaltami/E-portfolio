// Your personal EmailJS IDs used to route contact form submissions to your inbox
// template_nwo8nct
// service_8u8b71e
// KBr4JSFK8sSy6lwSp

// Controls how far the background shapes move relative to your mouse cursor (1/20th of the mouse distance)
const scaleFactor = 1 / 20;

// Tracks whether dark mode is currently ON (true) or OFF (false)
let contrastToggle = false;

// Runs whenever the mouse moves over the landing page, gently shifting all 9 background shapes in alternating directions
function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }
}

// Flips dark mode on and off when you click the half-circle contrast icon in the navbar
function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

// Intercepts the contact form submission, shows the loading spinner, sends the email via EmailJS, and shows a success or error state
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      'service_8u8b71e',
      'template_nwo8nct',
      event.target,
      'KBr4JSFK8sSy6lwSp'
    ).then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on amirshaltami2@gmail.com"
      );
    });
}

// Tracks whether the About/Contact modal is currently open and slides both halves in or out when clicked
let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

// Toggles the project overlay open and closed when a user taps the project card on a phone or tablet
function toggleProject(element) {
  element.classList.toggle("project__wrapper--active");
}