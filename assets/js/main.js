const convertKmToMiles = () => {

    // Get KM value from input
    let kmValue = Number(document.getElementById("kmValue").value);

    // Operation Perform
    let milesValue = (kmValue * 0.621371).toFixed(3);

    milesValue = `${kmValue} kilometers is approximately ${milesValue} miles.`;

    console.log(milesValue);

    document.querySelector("#h4").innerHTML = milesValue;

    return;
}

