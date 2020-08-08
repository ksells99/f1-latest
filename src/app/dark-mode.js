const themeSwitch = document.querySelector("input");

var userTheme = localStorage.getItem("theme");

if (userTheme == "dark") {
  document.body.classList.toggle("dark-theme");
  document.getElementById("slider").checked = true;
}

themeSwitch.addEventListener("click", () => {
  let twttr;
  document.body.classList.toggle("dark-theme");
  window.scrollTo(0, 0);
  location.reload();
  if (twttr) {
    twttr.widgets.load();
  }

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    document.getElementById("slider").checked = true;
  } else {
    localStorage.setItem("theme", "light");
    document.getElementById("slider").checked = false;
  }
});
