function showMessage() {
  alert("Добро пожаловать на сайт о популярных породах кошек 🐱");
}

function toggleMenu() {
  const nav = document.getElementById("navMenu");
  if (nav) {
    nav.classList.toggle("show");
  }
}

function changeBackground() {
  const colors = [
    "linear-gradient(135deg, #eaf6ff, #d8efff, #bfe5ff)",
    "linear-gradient(135deg, #e3f4ff, #c9eaff, #9fd8fb)",
    "linear-gradient(135deg, #f0f9ff, #d6efff, #a8dbf5)",
    "linear-gradient(135deg, #e6f7ff, #ccecff, #99d6ff)"
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.background = colors[randomIndex];
}

async function sendForm(event) {
  event.preventDefault();

  const form = document.querySelector(".contact-form");
  const submitBtn = form.querySelector("button[type='submit']");

  const data = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    breed: document.getElementById("breed").value,
    message: document.getElementById("message").value.trim()
  };

  const scriptURL = "https://script.google.com/macros/s/AKfycbwRtguQhQ8JuCSg324n2nhHe0Txi_tSj1uInrkrSDqBgvektCjeXBg49vQ1O-YdPhq4Bg/exec";

  submitBtn.disabled = true;
  submitBtn.textContent = "Отправка...";

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(data)
    });

    const result = await response.text();
    console.log("Ответ сервера:", result);

    alert("Спасибо! Сообщение отправлено.");
    form.reset();
  } catch (error) {
    alert("Ошибка при отправке.");
    console.error("Ошибка:", error);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Отправить";
  }
}
