// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  // Hide results
  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'block';
  setTimeout(calculateResults, 2000);
  // Show loader
  

  e.preventDefault();
});

// Calculates Results
function calculateResults() {

  // UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);

  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatePayments = parseFloat(years.value) * 12;

  // Compute Monthly Payment
  const x = Math.pow(1 + calculatedInterest, calculatePayments);
  const monthly = (principal*x*calculatedInterest)/ (x - 1);
  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayments).toFixed(2);
    totalInterest.value = ((monthly *calculatePayments) - principal).toFixed(2);
     // Show results
     document.getElementById('results').style.display = 'block';

     // Hide Loader
     document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please check your numbers');
  }


}

// Show Error
function showError(error) {
   // hide results
   document.getElementById('results').style.display = 'none';

   // Hide Loader
   document.getElementById('loading').style.display = 'none';
  // Create a div
  const errorDiv = document.createElement('div');
  // Add class
  errorDiv.className = 'alert alert-danger';

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Create text nod and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error about heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 2000);
}
// Clear error
function clearError(){
  document.querySelector('.alert').remove();
}