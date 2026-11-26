let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}

setInterval(() => {
    showSlide(currentSlide + 1);
}, 4000);


const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message");

// แสดง / ซ่อนรหัสผ่าน
togglePassword.addEventListener("click", function() {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "ซ่อน";
    } else {
        password.type = "password";
        togglePassword.textContent = "แสดง";
    }

});

// ตรวจสอบการเข้าสู่ระบบ
loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const user = username.value.trim();
    const pass = password.value;

    if (user === "" || pass === "") {
        message.style.color = "red";
        message.textContent = "กรุณากรอกข้อมูลให้ครบ";
        return;
    }

    // ตัวอย่างสำหรับทดลองใช้งานเท่านั้น
    if (user === "admin" && pass === "123456") {

        message.style.color = "green";
        message.textContent = "เข้าสู่ระบบสำเร็จ!";

        setTimeout(function() {
            window.location.href = "index.html";
        }, 1000);

    } else {

        message.style.color = "red";
        message.textContent = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";

    }

});

// ลืมรหัสผ่าน
document.getElementById("forgotPassword")
    .addEventListener("click", function(event) {
        event.preventDefault();
        alert("กรุณาติดต่อผู้ดูแลระบบเพื่อรีเซ็ตรหัสผ่าน");
    });
