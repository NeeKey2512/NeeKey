function checkPassword() {
  const pwd = document.getElementById("password").value;
  if (pwd === "neekey@2512") {
    window.location.href = "page2.html";
  } else {
    alert("Wrong password 😔");
  }
}

function sayYes() {
  window.location.href = "page3.html";
}

function sayNo() {
  document.getElementById("no-msg").innerText = "U cannot say No 😌";
}
