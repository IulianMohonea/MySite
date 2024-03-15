


function afiseazaTastaApasata(event) {
  var codTasta = event.keyCode || event.which;
  alert("Ați apăsat tasta cu codul: " + codTasta);
}

function validateForm() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var phoneInput = document.getElementById("phone");

  var namepos = /^[A-Za-z\s]+$/;
  var phonepos = /^[0-9]{10}$/;

  if (!namepos.test(nameInput.value)) {
    alert("Numele poate conține doar litere și spații!");
    return false;
  }

  if (!phonepos.test(phoneInput.value)) {
    alert("Introduceți un număr de telefon valid (10 cifre)!");
    return false;
  }
  var dogImageContainer = document.getElementById("dogImageContainer");
  var dogImage = document.getElementById("dogImage");
  dogImage.src = "https://static.eva.ro/img/auto_resized/db/article/217/799/125016l-1360x0-w-b6a49dd9/--c08ec674/viata-de-caine-fericit-30-de-imagini-pe-care-si-pisicile-le-invidiaza.jpg";
  dogImage.alt = "Imagine Câine";
  dogImageContainer.style.display = "block";
  document.getElementById("myForm").remove();
  showForm();
  alert("Formularul a fost validat cu succes!! Acum completati mesajul!!");
  return false;
}


function showForm() {
  var formContainer = document.getElementById("formContainer");

  var form = document.createElement("form");
  var messageLabel = document.createElement("label");
  var messageInput = document.createElement("textarea");
  var submitButton = document.createElement("input");

  form.setAttribute("id", "myForm");
  form.setAttribute("onsubmit", "return submitForm()");
  messageInput.setAttribute("name", "message");
  messageInput.setAttribute("placeholder", "Mesaj");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Trimite");


  messageLabel.appendChild(document.createTextNode("Mesaj:"));
  form.appendChild(messageLabel);
  form.appendChild(messageInput);

  form.appendChild(submitButton);


  formContainer.appendChild(form);
}

function submitForm() {
  var messageInput = document.getElementsByName("message")[0];


  if (messageInput.value === "") {
    alert("Te rog sa completezi toate campurile formularului!");
    return false;
  }

  var formContainer = document.getElementById("formContainer");
  formContainer.innerHTML = "Multumesc pentru mesaj!";

  var dogImageContainer = document.getElementById("dogImageContainer");
  var dogImage = document.getElementById("dogImage");
  dogImage.src = "https://static.eva.ro/img/auto_resized/db/article/217/799/125016l-1360x0-w-b6a49dd9/--c08ec674/viata-de-caine-fericit-30-de-imagini-pe-care-si-pisicile-le-invidiaza.jpg";
  dogImage.alt = "Imagine Caine";
  dogImageContainer.style.display = "block";
  return false;
}


function NightMode(event) {
  var body = document.body;
  body.classList.toggle("night-mode-back");

  event.stopPropagation();
  console.log("StopPropagation");

  var helper = document.getElementsByClassName("content");
  helper[0].classList.toggle("night-mode");


  var coffee = document.getElementsByClassName("coffee");
  coffee[0].classList.toggle("night-mode");
  
  event.stopPropagation();
  console.log("StopPropagation");
}

function coffeecharacteristics(){
  var element = document.querySelector('.coffee');
    var computedStyle = window.getComputedStyle(element);

    console.log(computedStyle.width);
    console.log(computedStyle.height);
    console.log(computedStyle.backgroundColor);
}
coffeecharacteristics();

var hoverMouse = document.getElementById("Leaguesad");


button.addEventListener('mouseover', function(event) {
  console.log('Cursorul a intrat pe buton');
  leaguehover('mouseover');
});

button.addEventListener('mouseout', function(event) {
  console.log('Cursorul a ieșit de pe buton');
  leaguehover('mouseout');
});

function leaguehover(element) {
  element.style.color = 'red';
}

function leagueoutofcover(element) {
  element.style.color = 'green';
}


var input = document.getElementById('myForm');

    input.addEventListener('keydown', function(event) {
      console.log('Tasta apăsată:', event.key);
    });

    input.addEventListener('keyup', function(event) {
      console.log('Tasta eliberată:', event.key);
    });


