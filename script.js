// to set an update interval at every 2 sec(2000ms)
var callAPI = (asciiString) => {
    let url = "https://l8dbng5792.execute-api.us-east-1.amazonaws.com/dev"; // test url
    // assuming data is json, if it is text use response.text()
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"asciiString": asciiString});
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => {
        let textArea = document.getElementById("hexString");
        // parsing the JSON value to string
        let resp = JSON.parse(result);
        textArea.value = resp.body;
    })
    .catch(error => console.log('error', error));
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos ) {
    // && currentScrollPos < 100
    document.getElementById("top-bar").style.top = "0";
  } else {
    document.getElementById("top-bar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
} 


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("top-bar");
    if (x.className === "nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar";
    }
}