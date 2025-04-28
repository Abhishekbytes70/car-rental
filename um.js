const searchInput = document.getElementById('searchInput');
const carGrid = document.getElementById('carGrid');
const noResult = document.getElementById('noResult');

const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

const paymentModal = document.getElementById('paymentModal');
const paymentContent = document.getElementById('paymentContent');

let selectedCar = '';
let totalPrice = 0;

// Search functionality
searchInput.addEventListener('keyup', function() {
  const filter = searchInput.value.toLowerCase();
  const cars = carGrid.getElementsByClassName('car-card');
  let found = false;

  for (let i = 0; i < cars.length; i++) {
    const carName = cars[i].querySelector('h3').innerText.toLowerCase();
    if (carName.includes(filter)) {
      cars[i].style.display = '';
      found = true;
    } else {
      cars[i].style.display = 'none';
    }
  }
  noResult.style.display = found ? 'none' : 'block';
});

// Open Modal
function openModal(imageSrc, name, description) {
  modal.style.display = 'block';
  modalImage.src = imageSrc;
  modalTitle.textContent = name;
  modalDescription.textContent = description;
  selectedCar = name;
}

// Close Modal
function closeModal() {
  modal.style.display = 'none';
}

// Book Now
function bookNow() {
  const duration = document.getElementById('duration').value;
  const pricePerDay = 3000;
  totalPrice = pricePerDay * duration;

  closeModal();
  openPaymentModal();
}

// Open Payment Modal
function openPaymentModal() {
  paymentModal.style.display = 'block';
  paymentContent.innerHTML = `
    <h2>Payment for ${selectedCar}</h2>
    <p>Total Amount: ₹${totalPrice}</p>
    <label for="paymentMethod">Choose Payment Method:</label>
    <select id="paymentMethod" onchange="showPaymentOption()" style="width:100%; padding:10px; margin-top:10px;">
      <option value="">-- Select --</option>
      <option value="qr">QR Code</option>
      <option value="cash">Cash</option>
      <option value="card">Card</option>
    </select>
    <div id="paymentDetails" style="margin-top:20px;"></div>
    <button id="confirmPayment" style="display:none; margin-top:20px; padding:10px 20px; background:#4CAF50; color:white; border:none; border-radius:5px;">I Have Paid</button>
  `;
}

// Show Payment Option
function showPaymentOption() {
  const method = document.getElementById('paymentMethod').value;
  const paymentDetails = document.getElementById('paymentDetails');
  const confirmPayment = document.getElementById('confirmPayment');

  if (method === 'qr') {
    paymentDetails.innerHTML = `
      <p>Scan this QR to Pay:</p>
      <img src="qr.png" alt="QR Code" style="width:200px;">
    `;
    confirmPayment.style.display = 'block';
  } else if (method === 'cash') {
    paymentDetails.innerHTML = `
      <p>Please visit our shop to pay and confirm your booking. 🏢</p>
    `;
    confirmPayment.style.display = 'block';
  } else if (method === 'card') {
    paymentDetails.innerHTML = `
      <p>Enter Card Details:</p>
      <input type="text" placeholder="Card Number">
      <input type="text" placeholder="Expiry Date (MM/YY)">
      <input type="text" placeholder="CVV">
    `;
    confirmPayment.style.display = 'block';
  } else {
    paymentDetails.innerHTML = '';
    confirmPayment.style.display = 'none';
  }

  confirmPayment.onclick = function() {
    alert('✅ Payment Successful! Thank you for booking ' + selectedCar);
    paymentModal.style.display = 'none';
  };
}
