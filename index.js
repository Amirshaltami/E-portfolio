// template_nwo8nct
// service_8u8b71e
// KBr4JSFK8sSy6lwSp
const scaleFactor = 1 / 20;
// Think of this variable like a light switch.
// It starts as "false" (meaning dark mode is currently OFF when the page loads).
let contrastToggle = false;

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

// This function runs every time you click the half-circle contrast icon in the navbar.
function toggleContrast() {
  // The "!" flips the switch to the opposite of whatever it currently is:
  // If it was false, it becomes true. If it was true, it becomes false.
  contrastToggle = !contrastToggle;

  // Check if the switch is now ON (true):
  if (contrastToggle) {
    // Stick the "dark-theme" label onto the <body> tag in HTML.
    // Once <body> has this label, all your ".dark-theme ..." rules in style.css automatically turn on!
    // (Note the space before dark-theme so it doesn't mash into other class names.)
    document.body.classList += " dark-theme";
  } else {
    // If the switch is now OFF (false), peel the "dark-theme" label off <body>
    // so the page goes right back to its normal light colors.
    document.body.classList.remove("dark-theme");
  }
}

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

let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}