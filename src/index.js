module.exports = function toReadable (number) {
        let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
        if (number === 0) {
            return 'zero';
        }
    
        if (number < 10) {
            return ones[number];
        }
    
        if (number < 20) {
            return teens[number - 10];
        }
    
        if (number < 100) {
            return tens[Math.floor(number / 10)] + ' ' + ones[number % 10];
        }
    
        if (number < 1000) {
            return ones[Math.floor(number / 100)] + ' hundred ' + toReadable(number % 100);
        }
    
        return 'Число слишком большое для данной реализации';
    }
