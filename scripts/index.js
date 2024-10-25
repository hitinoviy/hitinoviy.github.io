let nav = document.querySelector('.menu');
let navLinks = nav.querySelectorAll('.menu__link');

window.addEventListener('hashchange', (e) => {
  toggleMenuActiveClass(e.newURL);
});

const toggleMenuActiveClass = (url) => {
  navLinks.forEach((item) => {
    item.classList.remove('active');
    if (item.href === url) {
      item.classList.add('active');
    }
  });
};

const form = document.querySelector('.contact__form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#mail');
const messageInput = document.querySelector('#message');
const resultOutput = document.querySelector('.contact__success');

const serviceID = 'service_be2g7bt';
const templateID = 'template_4r8j27r';
const publicKey = 'J6dKmnsynSowDwOcl';

emailjs.init(publicKey);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputData = {
    form_name: nameInput.value,
    user_email: emailInput.value,
    message: messageInput.value,
  };
  emailjs.send(serviceID, templateID, inputData).then(
    () => {
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
      resultOutput.textContent = 'Your letter has been sent successfully';
    },
    (error) => {
      console.log(error);
      resultOutput.textContent = 'An error occurred, we are already working on it';
    }
  );
});
