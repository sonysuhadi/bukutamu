const form = document.getElementById("guestForm");
const guestList = document.getElementById("guestList");

// Ambil data dari localStorage
let messages = JSON.parse(localStorage.getItem("guestMessages")) || [];

function renderMessages() {
  guestList.innerHTML = "";
  messages.forEach((msg) => {
    const li = document.createElement("li");
    li.innerHTML = <strong>${msg.name}</strong>: ${msg.message};
    guestList.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && message) {
    const newMsg = { name, message };
    messages.push(newMsg);
    localStorage.setItem("guestMessages", JSON.stringify(messages));
    renderMessages();
    form.reset();
  }
});

// Tampilkan saat pertama kali
renderMessages();