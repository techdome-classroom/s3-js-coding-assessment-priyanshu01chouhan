// program2.js
function romanToInt(s) {
    // Define Roman numeral values
    const romanMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    // Traverse the string from right to left
    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanMap[s[i]];

        // If the current value is less than the previous value, subtract it (subtractive notation)
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            // Otherwise, add it
            total += currentValue;
        }

        // Update the previous value
        prevValue = currentValue;
    }

    return total;
}

module.exports = { romanToInt };