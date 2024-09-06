document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    document
      .querySelectorAll(".calculator")
      .forEach((calc) => calc.classList.remove("active"));
    document.querySelector(tab.dataset.target).classList.add("active");
  });
});

document.getElementById("calculate-loan").addEventListener("click", () => {
  const principal = parseFloat(document.getElementById("loan-principal").value);
  const rate =
    parseFloat(document.getElementById("loan-rate").value) / 100 / 12;
  const time = parseFloat(document.getElementById("loan-time").value) * 12;

  const payment =
    (principal * rate * Math.pow(1 + rate, time)) /
    (Math.pow(1 + rate, time) - 1);
  const totalPayment = payment * time;
  const interestAmount = totalPayment - principal;

  document.getElementById(
    "result-loan-payment"
  ).innerHTML = `Monthly EMI: $${Math.round(
    payment
  )}<br>Total Amount Payable: $${Math.round(
    totalPayment
  )}<br>Interest Amount: $${Math.round(interestAmount)}`;
});

document.getElementById("calculate-savings").addEventListener("click", () => {
  const principal = parseFloat(
    document.getElementById("savings-principal").value
  );
  const rate = parseFloat(document.getElementById("savings-rate").value) / 100;
  const time = parseFloat(document.getElementById("savings-time").value);
  const contribution = parseFloat(
    document.getElementById("savings-contribution").value
  );

  const futureValue =
    principal * Math.pow(1 + rate, time) +
    contribution * ((Math.pow(1 + rate, time) - 1) / rate);
  const interestEarned = futureValue - principal - contribution * time;

  document.getElementById(
    "result-savings"
  ).innerHTML = `Total Savings: $${Math.round(
    futureValue
  )}<br>Interest Earned: $${Math.round(interestEarned)}`;
});

document.getElementById("calculate-mortgage").addEventListener("click", () => {
  const principal =
    parseFloat(document.getElementById("mortgage-amount").value) || 0;
  const downPayment =
    parseFloat(document.getElementById("down-payment").value) || 0;
  const annualRate =
    parseFloat(document.getElementById("mortgage-rate").value) / 100 || 0;
  const years = parseFloat(document.getElementById("mortgage-time").value) || 0;
  const propertyTaxes =
    parseFloat(document.getElementById("property-taxes").value) || 0;
  const annualInsurance =
    parseFloat(document.getElementById("insurance").value) || 0;
  const otherTaxes =
    parseFloat(document.getElementById("other-taxes").value) || 0;

  const loanAmount = principal - downPayment;

  if (loanAmount <= 0) {
    document.getElementById("result-mortgage").innerHTML =
      "Down payment cannot be greater than or equal to the mortgage amount.";
    return;
  }

  const monthlyRate = annualRate / 12;
  const numberOfPayments = years * 12;

  const monthlyPayment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  const monthlyPropertyTaxes = propertyTaxes / 12 || 0;
  const monthlyInsurance = annualInsurance / 12 || 0;

  const totalMonthlyPayment =
    monthlyPayment + monthlyPropertyTaxes + monthlyInsurance;

  const totalPayment = totalMonthlyPayment * numberOfPayments;

  const totalAnnualPropertyTaxes = propertyTaxes * years;
  const totalAnnualInsurance = annualInsurance * years;
  const totalAnnualOtherTaxes = otherTaxes * years;

  const totalCostIncludingTaxes = totalPayment + totalAnnualOtherTaxes;

  const interestAmount = totalPayment - loanAmount;

  document.getElementById(
    "result-mortgage"
  ).innerHTML = `Monthly Payment: $${Math.round(
    totalMonthlyPayment
  )}<br>Total Amount Payable: $${Math.round(
    totalCostIncludingTaxes
  )}<br>Interest Amount: $${Math.round(interestAmount)}`;
});

document
  .getElementById("calculate-investment")
  .addEventListener("click", () => {
    const principal = parseFloat(
      document.getElementById("investment-principal").value
    );
    const rate =
      parseFloat(document.getElementById("investment-rate").value) / 100;
    const time = parseFloat(document.getElementById("investment-time").value);

    const futureValue = principal * Math.pow(1 + rate, time);
    const profitAmount = futureValue - principal;

    document.getElementById(
      "result-investment"
    ).innerHTML = `Total Return: $${Math.round(
      futureValue
    )}<br>Profit Amount: $${Math.round(profitAmount)}`;
  });
