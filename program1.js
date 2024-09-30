// program1.js
function isValid(s) {
    let stack = [];
    let matchingBracket = { ')': '(', '}': '{', ']': '[' };

    for (let char of s) {
        if (char in matchingBracket) {
            let topElement = stack.length > 0 ? stack.pop() : '#';
            if (matchingBracket[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

module.exports = { isValid };
