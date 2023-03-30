let menuOpen = document.getElementById('menuOpen');
let menuClose = document.getElementById('menuClose');
let transparentBackground = document.getElementById('transparentBackground');
// let faqQuestion = document.querySelectorAll('.faq-question');
// let answer = document.querySelector('.faq-answer');
// let displayNone = document.querySelector('#faqAnswer');
const faqQuestion = document.querySelectorAll('.faq-question');
const answer = document.querySelectorAll('.faq-answer');

const plusSigns = document.querySelectorAll('.plus-sign');
const minusSigns = document.querySelectorAll('.minus-sign');



console.log(menuOpen);

menuOpen.addEventListener ('click', function(){
    transparentBackground.style.display = "block";
})

menuClose.addEventListener ('click', function (){
    transparentBackground.style.display = "none";
})

// faqQuestion.addEventListener ('click', ()=>{
//     console.log('question clicked')
//     displayNone.style.display = displayNone.style.display === 'none'? 'block':'none';
// })

// faqQuestion.forEach(function(question){
//     question.addEventListener('click', function(){
//         let answer = question.parentElement.querySelector('.faq-answer');
//         answer.classList.toggle('show');
//     })
// })

faqQuestion.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      answer.forEach((ans, ansIndex) => {
        if (index === ansIndex) {
          ans.style.display = ans.style.display === 'none' ? 'block' : 'none';
        } else {
          ans.style.display = 'none';
        }
      });
      // toggle plus and minus
      plusSigns.forEach((plusSign) => {
        plusSign.addEventListener('click', () => {
          plusSign.style.display = 'none';
          const minusSign = plusSign.nextElementSibling;
          minusSign.style.display = 'inline';
        });
      });

      minusSigns.forEach((minusSign) => {
        minusSign.addEventListener('click', () => {
          minusSign.style.display = 'none';
          const plusSign = minusSign.previousElementSibling;
          plusSign.style.display = 'inline';
        });
      });
    });
  });

  

  

// faqQuestion.forEach((elem)=>{
//     elem.addEventListener('click', ()=>{
//         minusSign.style.display = minusSign.style.display === 'none' ? 'block' : 'none';
        
//     })
// }) 

// menuOpen.onclick = function () {

// }