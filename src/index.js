module.exports = function getZerosCount(number) {

    var  counter1 = 0;
    var  counter2 = 0;
    var  counter3 = 0;
    var  counter4 = 0;
    var  counter5 = 0;
    var  counter6 = 0;
    var  counter7 = 0;
    var  counter8 = 0;
    var  counter9 = 0;
    var  counter10 = 0;
    var  counter11= 0;
    var counter = 0;

    counter1 = Math.trunc(number/5);

    counter2 = Math.trunc(number/25);

    counter3 = Math.trunc(number/125);

    counter4 = Math.trunc(number/625);

    counter5 = Math.trunc(number/3125);

    counter6 = Math.trunc(number/15625);

    counter7 = Math.trunc(number/78125);

    counter8 = Math.trunc(number/390625);

    counter9 = Math.trunc(number/1953125);

    counter10 = Math.trunc(number/9765625);

    counter11 = Math.trunc(number/48824125);

    return counter = counter1 + counter2 +counter3 + counter4 + counter5 +counter6 + counter7 + counter8
        +counter9 + counter10 + counter11;
}