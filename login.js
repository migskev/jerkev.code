const user = [
  { username: "Miguel", password: "456", fname: "Miguel Kevin Santiago" },
  { username: "Jerwin", password: "123", fname: "John Jerwin Tungol" }
];
function log() {
  const uname = document.lgfrm.user.value.trim();
  const pass = document.lgfrm.pass.value.trim();
  const ErrorMes = document.getElementById("error-message");
  const foundUser = user.find(u => u.username === uname && u.password === pass);

  if (foundUser) {
    localStorage.setItem("fname", foundUser.fname);

    alert(`Welcome, ${foundUser.fname}! You have successfully logged in.`);

    if (uname === "Jerwin") {
      window.location.href = "Jerwin.html";
    } else if (uname === "Miguel") {
      window.location.href = "Kevs.html";
    }
  } else {
    ErrorMes.textContent = "Invalid username or password";
    setTimeout(() => {
      ErrorMes.textContent = "";
    }, 2000);
  }
}
