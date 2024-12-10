const convertBtn = document.getElementById("convert-btn")
const output = document.getElementById("output")
const inputNumber = document.getElementById("number")

// function convertNumberToNumerals(){
//     const convertedNum = parseInt(inputNumber.value)
//     if (!convertedNum) {
//         output.innerHTML = "Please enter a valid number"
//         return
//     }
//     else if(convertedNum < 0){
//         output.innerHTML = "Please enter a number greater than or equal to 1"
//         return
//     }
//     else if(convertedNum === -1){
//         output.innerHTML = "Please enter a number greater than or equal to 1"
//         return
//     }
//     else if(convertedNum >= 4000){
//         output.innerHTML = "Please enter a number less than or equal to 3999"
//         return
//     }
//     else if(convertedNum === 9){
//         output.innerHTML = "IX"
//         return
//     }
//     else if(convertedNum === 16){
//         output.innerHTML = "XVI"
//         return
//     }
//     else if(convertedNum === 649){
//         output.innerHTML = "DCXLIX"
//         return
//     }
//     else if(convertedNum === 1023){
//         output.innerHTML = "MXXIII"
//         return
//     }
//     else if(convertedNum === 3999){
//         output.innerHTML = "MMMCMXCIX"
//         return
//     }

    
// }

// convertBtn.addEventListener("click", convertNumberToNumerals)

function toRomanNumerals() {
    let convertedNum = parseInt(inputNumber.value)
    if (convertedNum <= 0 || convertedNum >= 4000) {
        output.innerHTML = "Invalid number. Enter a number between 1 and 3999.";
    }

    const romanMap = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" },
    ];

    let result = "";

    for (const { value, numeral } of romanMap) {
        while (convertedNum >= value) {
            result += numeral;
            convertedNum -= value;
        }
    }

    output.innerHTML = result;
}
convertBtn.addEventListener("click", toRomanNumerals)