const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");
  const interpretationText = document.getElementById("interpretation");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Invalid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Invalid weight";
  } else {
    const bmi = (weight / (height * height)).toFixed(2);

    switch (true) {
      case bmi < 18.5:
        interpretationText.innerHTML = "Underweight";
        break;
      case bmi >= 18.5 && bmi <= 24.9:
        interpretationText.innerHTML = "Normal weight";
        break;
      case bmi >= 25 && bmi <= 29.9:
        interpretationText.innerHTML = "Overweight";
        break;
      default:
        interpretationText.innerHTML = "Obese";
        break;
    }

    result.innerHTML = `BMI: ${bmi} ${interpretationText.innerText}`;
  }
});
