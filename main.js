const hiddenText = document.getElementsByClassName('hidden-text');
const textBlock = document.getElementsByClassName('text-block');
const headers = document.querySelectorAll('h2');
const btn = document.getElementsByClassName('btn');

const hideAll = () => {
    for(let i = 0; i < textBlock.length; i++){
        hiddenText[i].classList.add('hidden');
        headers[i].style.fontWeight = '400';
        btn[i].classList.remove('rotated');
    }
}

const toggleText = (i) => {
    if(hiddenText[i].classList.contains('hidden')){
        hiddenText[i].classList.remove('hidden');
        headers[i].style.fontWeight = '700';
        btn[i].classList.add('rotated');
    } else {
        hiddenText[i].classList.add('hidden');
        headers[i].style.fontWeight = '400';
    }
}

for (let i = 0; i < textBlock.length; i++){
    textBlock[i].addEventListener('click', function() {
        hideAll();
        toggleText(i);
    });
}