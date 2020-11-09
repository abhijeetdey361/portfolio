
const form = document.querySelector('#contact-form');
form.addEventListener('submit',event => {
  event.preventDefault();
  submit(event);
});

function submit(e){
    console.log("Hello World");
   let inputName = document.getElementById("name");
   localStorage.setItem("name",inputName.value);
   let inputEmail= document.getElementById("email");
   localStorage.setItem("email", inputEmail.value);
   let inputNumber = document.getElementById("number");
   localStorage.setItem("number",inputNumber.value);
   let inputReason = document.getElementById("textarea");
   localStorage.setItem("textarea",inputReason.value);
   console.log(inputReason.value);
}

let take = document.getElementById('typewritercontent');

let typewriter = new Typewriter(take, {
  loop: true,
  delay: 75,
});
let arr = ['A Front-end Developer','A Back-end Developer','A Coder'];
for(let i=0;i<arr.length;i++){
    let s = arr[i];
    s.toString();

    typewriter
  .pauseFor(1000)
  .typeString(s)
  .pauseFor(2000)
  .deleteChars(25)
  .pauseFor(1000)
  .start();

}

mybutton = document.getElementById("scrollButton");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

  

