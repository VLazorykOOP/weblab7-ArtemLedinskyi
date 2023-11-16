function countZeros() {
    var inputArray = document.getElementById('inputArray').value.split(" ").map(Number); 
    var zeroCount = 0;

    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === 0) {
            zeroCount++;
        }
    }

    document.getElementById('result').value = "Масив: " + inputArray.join(', ') + "\nКількість нульових елементів: " + zeroCount;
}