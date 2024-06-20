/**
 * Performs a calculation based on the provided type.
 *
 * @param {string} type - The type of calculation (SUM, SUBTRACT, or DIVIDE).
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} - The result of the calculation or 'Error' if division by zero.
 */
function calculate(type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    switch (type) {
        case 'SUM':
            return roundedA + roundedB;
        case 'SUBTRACT':
            return roundedA - roundedB;
        case 'DIVIDE':
            if (roundedB === 0) {
                return 'Error';
            }
            return roundedA / roundedB;
        default:
            throw new Error('Invalid type');
    }
}

module.exports = calculate;
