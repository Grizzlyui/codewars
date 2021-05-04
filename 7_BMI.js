function bmi(weight, height) {
    const BMI = weight / (height * height);
    if(BMI <= 18.5) return "Underweight";
    if(BMI <= 25.0) return "Normal";
    if(BMI <= 30.0) return "Overweight";
    return "Obese";
  }

console.log(bmi(80, 1.80))