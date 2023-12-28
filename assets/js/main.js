const addition = () => {

    // Get first value from input
    let firstValue = Number(document.getElementById("firstValue").value);

    // Get second value from input
    let secondValue = Number(document.getElementById("secondValue").value);

    // Operation Perform
    let addition = firstValue + secondValue;

    addition = `The sum of ${firstValue} and ${secondValue} is : ${addition}`;

    console.log(addition);

    document.querySelector("#h4").innerHTML = addition;

    return;
}

