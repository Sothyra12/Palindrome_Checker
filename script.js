/* file: script.js */

const result = document.getElementById('result');
const txtInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');

//function to check if the input is a palindrome or not
function isPalindrome() {
    let cleanedStr = txtInput.value.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let isPalindrome = cleanedStr === cleanedStr.split('').reverse().join('');
    return isPalindrome ? " is a palindrome" : " is not a palindrome";
};

//add event listener to the check button
checkBtn.addEventListener("click", () => {

    //check if the input is empty
    if (!txtInput.value) {
        alert("Please input a value");
        return;
    }

    //check if the input the text is a palindrome (switch statement is optional)
    switch (txtInput.value) {
        case "A":
            result.innerText = "A" + isPalindrome();
            break;
        case "eye":
            result.innerText = "eye" + isPalindrome();
            break;
        case "_eye":
            result.innerText = "_eye" + isPalindrome();
            break;
        case "race car":
            result.innerText = "race car" + isPalindrome();
            break;
        case "not a palindrome":
            result.innerText = "not a palindrome" + isPalindrome();
            break
        case "A man, a plan, a canal. Panama":
            result.innerText = "A man, a plan, a canal. Panama" + isPalindrome();
            break;
        case "never odd or even":
            result.innerText = "never odd or even" + isPalindrome();
            break;
        case "nope":
            result.innerText = "nope" + isPalindrome();
            break;
        case "almostomla":
            result.innerText = "almostomla" + isPalindrome();
            break;
        case "My age is 0, 0 si ega ym.":
            result.innerText = "My age is 0, 0 si ega ym." + isPalindrome();
            break;
        case "1 eye for of 1 eye.":
            result.innerText = "1 eye for of 1 eye." + isPalindrome();
            break;
        case "0_0 (: /-\ :) 0-0":
            result.innerText = "0_0 (: /-\ :) 0-0" + isPalindrome();
            break;
        case "five|\_/|four":
            result.innerText = "five|\_/|four" + isPalindrome();
            break;
        default:
            result.innerText = txtInput.value + isPalindrome();
            break;
    }

    //result.innerText = txtInput.value + isPalindrome();
});