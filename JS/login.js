document.getElementById("button").addEventListener("click", function () {
  const email = document.getElementById("inputEmail3").target.value;

  //console.log(email);

  const password = document.getElementById("inputPassword3").target.value;

  //console.log(password);
  const btn = document.getElementById("button");

  if (email == "emonsaha994@gmail.com" && password == "1234") {
    //console.log(email);
    btn.removeAttribute("disabled");
    //document.getElementById("btn").removeAttribute("disabled");
    //window.location.href = "bank.html";
  } else {
    btn.setAttribute("disabled", true);
  }
});
