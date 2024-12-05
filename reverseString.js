// const word = 'hello'
// const reverseWord = word.split('').reverse().join('')
// console.log('reverse word: ', reverseWord)

// function checkPalindrome(word){
//     const lower = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
//     const reversed = lower.split('').reverse().join('')
//     if (lower === reversed){
//         return `The word ${word} is a palindrome`
//     }else{
//         return `The word ${word} is not a palindrome`
//     }
// }

// console.log(checkPalindrome('radar'))

function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  
  }
console.log(getRandomComputerResult());