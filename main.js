const hiddenText = document.getElementsByClassName('hidden-text');
const btn = document.getElementsByClassName('btn');

console.log(hiddenText);
console.log(btn);

const toggleText = (i) => {
    if(hiddenText[i].classList.contains('hidden')){
        hiddenText[i].classList.remove('hidden');
    } else {
        hiddenText[i].classList.add('hidden');
    }
}

for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(event) {
        toggleText(i);
        console.log(event.target + i);
    });
}