
/* Below I will grab the text from the innerHTML code using variables and then split the text into an array */
const text = document.querySelector('.fancy');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";/* This prevents the string from being duplicated */

/* Below I will create a for loop which will add a SPAN tage around each individual text so that they can be used or grabbed individually */
for(let i=0; i<splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

/* Below I will create a variable called char which will be used to count the number of characters in the text and then create a timer which will be used to add a class of fade to each character in the text */
let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}