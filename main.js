const hiddenText = document.getElementsByClassName('hidden-text');
const btn = document.getElementById('right-side');

const showText = (event) => {
    console.log(event.target.innerHTML);
}


btn.onclick = showText;