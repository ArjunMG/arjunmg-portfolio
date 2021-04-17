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