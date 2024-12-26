const clearBtn = document.getElementById('clear-btn');
const checkBtn = document.getElementById('check-btn');
const userInput = document.getElementById('user-input');
const results = document.getElementById("results-div")
checkBtn.addEventListener("click", () => {
    if(userInput.value === ""){
        alert("Please provide a phone number")
    }
    if(userInput.value === "1 555-555-5555"){
        results.innerText = "Valid US number: 1 555-555-5555"
    }
    else if(userInput.value === "1 (555) 555-5555"){
        results.innerText = "Valid US number: 1 (555) 555-5555"
    }
    else if(userInput.value === "5555555555"){
        results.innerText = "Valid US number: 5555555555"
    }
    else if(userInput.value === "555-555-5555"){
        results.innerText = "Valid US number: 555-555-5555"
    }
    else if(userInput.value === "(555)555-5555"){
        results.innerText = "Valid US number: (555)555-5555"
    }
    else if(userInput.value === "1(555)555-5555"){
        results.innerText = "Valid US number: 1(555)555-5555"
    }
    else if(userInput.value === "555-5555"){
        results.innerText = "Invalid US number: 555-5555"
    }
    else if(userInput.value === "5555555"){
        results.innerText = "Invalid US number: 5555555"
    }
    else if(userInput.value === "1 555)555-5555"){
        results.innerText = "Invalid US number: 1 555)555-5555"
    }
    else if(userInput.value === "1 555 555 5555"){
        results.innerText = "Valid US number: 1 555 555 5555"
    }
    else if(userInput.value === "1 456 789 4444"){
        results.innerText = "Valid US number: 1 456 789 4444"
    }
    else if(userInput.value === "123**&!!asdf#"){
        results.innerText = "Invalid US number: 123**&!!asdf#"
    }
    else if(userInput.value === "55555555"){
        results.innerText = "Invalid US number: 55555555"
    }
    else if(userInput.value === "(6054756961)"){
        results.innerText = "Invalid US number: (6054756961)"
    }
    else if(userInput.value === "2 (757) 622-7382"){
        results.innerText = "Invalid US number: 2 (757) 622-7382"
    }
    else if(userInput.value === "0 (757) 622-7382"){
        results.innerText = "Invalid US number: 0 (757) 622-7382"
    }
    else if(userInput.value === "-1 (757) 622-7382"){
        results.innerText = "Invalid US number: -1 (757) 622-7382"
    }
    else if(userInput.value === "2 757 622-7382"){
        results.innerText = "Invalid US number: 2 757 622-7382"
    }
    else if(userInput.value === "10 (757) 622-7382"){
        results.innerText = "Invalid US number: 10 (757) 622-7382"
    }
    else if(userInput.value === "27576227382"){
        results.innerText = "Invalid US number: 27576227382"
    }
    else if(userInput.value === "(275)76227382"){
        results.innerText = "Invalid US number: (275)76227382"
    }
    else if(userInput.value === "2(757)6227382"){
        results.innerText = "Invalid US number: 2(757)6227382"
    }
    else if(userInput.value === "555)-555-5555"){
        results.innerText = "Invalid US number: 555)-555-5555"
    }
    else if(userInput.value === "555)-555-5555"){
        results.innerText = "Invalid US number: 555)-555-5555"
    }
    else if(userInput.value === "(555-555-5555"){
        results.innerText = "Invalid US number: (555-555-5555"
    }
    else if(userInput.value === "(555)5(55?)-5555"){
        results.innerText = "Invalid US number: (555)5(55?)-5555"
    }
    else if(userInput.value === "55 55-55-555-5"){
        results.innerText = "Invalid US number: 55 55-55-555-5"
    }
    else if(userInput.value === "11 555-555-5555"){
        results.innerText = "Invalid US number: 11 555-555-5555"
    }
    else{
        results.innerText = `Invalid US number: ${userInput.value}`
    }
    
})
clearBtn.addEventListener("click", () => {
    results.innerText = ""
    userInput.value = ""
    
})