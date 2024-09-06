let paymentChart;

document
  .getElementById("dark-mode-switch")
  .addEventListener("change", function () {
    document.body.classList.toggle("dark-mode", this.checked);
  });

document.getElementById("calculate").addEventListener("click", function () {
  const amount = document.getElementById("amount").value;
  const rate = document.getElementById("rate").value;
  const years = document.getElementById("years").value;

  const principal = parseFloat(amount);
  const calculatedInterest = parseFloat(rate) / 100 / 12;
  const calculatedPayments = parseFloat(years) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    const totalPayment = (monthly * calculatedPayments).toFixed(2);
    const totalInterest = (totalPayment - principal).toFixed(2);

    // Display results in INR format
    document.getElementById(
      "monthly-payment"
    ).textContent = `Monthly Payment: ₹${monthly.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
    })}`;
    document.getElementById(
      "total-payment"
    ).textContent = `Total Payment: ₹${totalPayment.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
    })}`;
    document.getElementById(
      "total-interest"
    ).textContent = `Total Interest: ₹${totalInterest.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
    })}`;

    updateChart(principal, totalInterest);
  } else {
    alert("Please check your numbers");
  }
});

document.getElementById("year-slider").addEventListener("input", function () {
  document.getElementById("years").value = this.value;
});

function updateChart(principal, interest) {
  if (paymentChart) {
    paymentChart.destroy();
  }

  const ctx = document.getElementById("payment-chart").getContext("2d");
  paymentChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Principal", "Interest"],
      datasets: [
        {
          data: [principal, interest],
          backgroundColor: ["#28a745", "#007bff"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "bottom",
      },
    },
  });
}
