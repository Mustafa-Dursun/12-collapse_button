const acmalar = document.querySelectorAll('.ac');
const kapatmalar = document.querySelectorAll('.kapat');
const boxes = document.querySelectorAll('.box')


// acmalar.forEach((ac) => {
//     ac.addEventListener('click', ()=> {
//         ac.parentElement.parentElement.classList.add('active');
//     })
// });

// kapatmalar.forEach((kapat) => {
//     kapat.addEventListener('click', ()=> {
//         kapat.parentElement.parentElement.classList.remove('active');
//     })
// })

boxes.forEach((box) => {
    box.addEventListener('click', ()=> {
        box.classList.toggle('active');
    })
});

