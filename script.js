// Handle form submission and display the BMI result to the user 
function handleForm(event) {
    event.preventDefault();

    let form = event.target;
    
    let height = form.height.value;
    let weight = form.weight.value;

    let bmi = calculateBMI(height, weight);

    let result = document.getElementById("result");
    result.innerText = "Your BMI is " + bmi;
}


// Calculate BMI and return the result
function calculateBMI(height, weight) {
    let heightInMs = height / 100;
    let calculatedBMI = weight / (heightInMs * heightInMs);
    return calculatedBMI
}