document.getElementById('check-btn').addEventListener('click', function() {
    const input = document.getElementById('text-input').value;
    const result = document.getElementById('result');

    // Check if input is empty
    if (!input) {
      alert("Please input a value");
      return;
    }

    // Process input for palindrome check
    const cleanInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedInput = cleanInput.split('').reverse().join('');

    // Check if it's a palindrome and display result
    if (cleanInput === reversedInput) {
      result.textContent = `${input} is a palindrome`;
    } else {
      result.textContent = `${input} is not a palindrome`;
    }
  });