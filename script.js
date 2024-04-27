// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
// console.log(document.cookie);

// a function to set a cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//   a function to Get a cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

  function checkCookie() {
    let username = getCookie("username");
    if (username != "") {
    //  alert("Welcome again " + username);
     document.getElementById("Titulli").textContent = "Welcome back  " + username + "!";
    } else {
      // username = prompt("Please enter your name:", "");
      username = document.getElementById("inpuuut").value;
      if (username != "" && username != null) {
        setCookie("username", username, 365);
      }
    }
  }