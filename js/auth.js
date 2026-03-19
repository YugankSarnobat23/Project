const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const underline = document.querySelector(".underline");

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const switchText = document.getElementById("switchText");
const switchBtn = document.getElementById("switchBtn");

loginTab.onclick = () => setMode("login");
signupTab.onclick = () => setMode("signup");
switchBtn.onclick = () => {
  setMode(loginTab.classList.contains("active") ? "signup" : "login");
};

function setMode(mode) {
  if (mode === "login") {
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    underline.style.transform = "translateX(0)";

    title.textContent = "Welcome Back";
    subtitle.textContent = "Log in to find or build your team";
    switchText.textContent = "Don’t have an account?";
    switchBtn.textContent = "Sign up";
  } else {
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    underline.style.transform = "translateX(88px)";

    title.textContent = "Create Account";
    subtitle.textContent = "Join TalentLink and build your team";
    switchText.textContent = "Already have an account?";
    switchBtn.textContent = "Log in";
  }
}
document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  window.location.href = "db.html";
});
document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  window.location.href = "dashboard.html";
});
