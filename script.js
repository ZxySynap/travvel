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

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "ซ่อน";
    } else {
        password.type = "password";
        togglePassword.textContent = "แสดง";
    }

});

// ระบบเข้าสู่ระบบ
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const userType = document.getElementById("userType").value;
    const username = document.getElementById("username").value.trim();
    const passwordValue = password.value;

    // บัญชีทดลอง
    const accounts = {
        admin: {
            username: "admin",
            password: "admin123",
            role: "ผู้ดูแลระบบ (Admin)"
        },

        user: {
            username: "user",
            password: "usertest1",
            role: "สมาชิกทั่วไป (User)"
        }
    };

    // ตรวจสอบประเภทผู้ใช้งาน
    if (!userType) {
        message.className = "error";
        message.textContent = "กรุณาเลือกประเภทผู้ใช้งาน";
        return;
    }

    const account = accounts[userType];

    // ตรวจสอบชื่อผู้ใช้และรหัสผ่าน
    if (
        username === account.username &&
        passwordValue === account.password
    ) {

        message.className = "success";
        message.innerHTML =
            "✓ เข้าสู่ระบบสำเร็จ!<br>" +
            "ยินดีต้อนรับ " + account.role;

    } else {

        message.className = "error";
        message.textContent =
            "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง";

    }

});

// ลืมรหัสผ่าน
document.getElementById("forgotPassword")
    .addEventListener("click", function (e) {

        e.preventDefault();

        alert("กรุณาติดต่อผู้ดูแลระบบเพื่อขอรีเซ็ตรหัสผ่าน");

    });
