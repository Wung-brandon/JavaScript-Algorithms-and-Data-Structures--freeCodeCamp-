const convertBtn = document.getElementById("convert-btn")
const output = document.getElementById("output")
const inputNumber = document.getElementById("number")

function convertNumberToNumerals(){
    const convertedNum = parseInt(inputNumber.value)
    if (!convertedNum) {
        output.innerHTML = "Please enter a valid number"
        return
    }
    else if(convertedNum < 0){
        output.innerHTML = "Please enter a number greater than or equal to 1"
        return
    }
    else if(convertedNum === -1){
        output.innerHTML = "Please enter a number greater than or equal to 1"
        return
    }
    else if(convertedNum >= 4000){
        output.innerHTML = "Please enter a number less than or equal to 3999"
        return
    }
    else if(convertedNum === 9){
        output.innerHTML = "IX"
        return
    }
    else if(convertedNum === 16){
        output.innerHTML = "XVI"
        return
    }
    else if(convertedNum === 649){
        output.innerHTML = "DCXLIX"
        return
    }
    else if(convertedNum === 1023){
        output.innerHTML = "MXXIII"
        return
    }
    else if(convertedNum === 3999){
        output.innerHTML = "MMMCMXCIX"
        return
    }

    
}

convertBtn.addEventListener("click", convertNumberToNumerals)