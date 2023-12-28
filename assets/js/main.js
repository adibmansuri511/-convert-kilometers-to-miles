function swap() {

    // Take input from the user
    let a = parseInt(document.getElementById("valueOne").value);
    let b = parseInt(document.getElementById("valueTwo").value);

    // Before the Variable 1 & Variable 2 swap
    console.log(`Before Swap: Variable 1 = ${a}, Variable 2 = ${b}`);

    document.querySelector("#p1").innerHTML = `Before Swap: Variable 1 = ${a}, Variable 2 = ${b}`;

    // Create a temporary variable
    let temp;

    // Swap variables
    temp = a;
    a = b;
    b = temp;


    // After the Variable 1 & Variable 2 swap
    console.log(`After Swap: Variable 1 = ${a}, Variable 2 = ${b}`);

    document.querySelector("#p2").innerHTML = `After Swap: Variable 1 = ${a}, Variable 2 = ${b}`;

}
