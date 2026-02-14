function toggleLoginPassword() {
    const input = document.getElementById('passwordLogin');
    const icon = document.querySelector('.input-group-text i');

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = "password";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

dangNhap.addEventListener("click", async () => {
    const taiKhoan = document.getElementById("emailLogin").value.trim(); 
    const password = document.getElementById("passwordLogin").value.trim();
    const data = await getData(URL_PROFILE);
    const checkTK = data.find(user => user.userName === taiKhoan && user.pass === password);
    if (!checkTK) {
        alert("Tên đăng nhập hoặc mật khẩu không đúng !!!");
        return;
    }

    location.href = "Home.html";
});

