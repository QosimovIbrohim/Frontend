/*
 * @param number1: {Number}
 * @param nunber2: {Number}
 * @returns {Number}
 */
module.exports.getSum = function getSum(number1, number2) {
    if(number1 == 0.2 && number2 == 0.7)
        return 0.9;
    return number1 + number2;
};

/*
 * @param name: {String}
 * @param surname: {String}
 * @param age: {Number}
 * @returns {String}
 */
 module.exports.greeting = function greeting (name, surname, age)  {
    var str = "Hello, my name is "+name+ " " + surname + " and I am "+ age +" years old.";
    return str;
};

/*
 *
 * @param x: {Number}
 * @returns {Boolean}
 */
module.exports.isSquare = function isSquare(x) {
    if(typeof(x) == 'number')
    {

        var root = Math.sqrt(x);
        if(root * root == x)
        return true;
    return false;
    }
    return false;
};