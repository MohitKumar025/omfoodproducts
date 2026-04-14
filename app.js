// CONTACT FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const msg = document.getElementById("contactMsg");
  msg.textContent = "Message sent (demo).";

  // Option A: mailto fallback
  // window.location.href = `mailto:you@example.com`;

  // Option B: POST to server
  /*
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(new FormData(this))),
    headers: {'Content-Type':'application/json'}
  })
  */
});

// FEEDBACK LOCAL STORAGE
document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(this));
  let feedback = JSON.parse(localStorage.getItem("feedback") || "[]");
  feedback.push(data);
  localStorage.setItem("feedback", JSON.stringify(feedback));

  document.getElementById("feedbackMsg").textContent = "Feedback saved!";
});