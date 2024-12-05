function palindrome(word) {
    // Normalize the input: remove non-alphanumeric characters, convert to lowercase
    const normalizedWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    // Reverse the string
    const reverseWord = normalizedWord.split("").reverse().join("");
    
    // Check if palindrome
    if (normalizedWord === reverseWord) {
        return "It's a palindrome";
    } else {
        return "It's not a palindrome";
    }
}

let words = prompt("Please enter a word");
alert(palindrome(words));
