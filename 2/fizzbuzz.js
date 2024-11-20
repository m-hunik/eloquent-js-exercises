let number = 0;
while (number < 100) {
    ++number;
    if (number % 3 == 0) {
        console.log("fizz");
    } else if (number % 5 == 0) {
        console.log("buzz");
    } else {
        console.log(number);
    }
}