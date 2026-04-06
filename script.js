async function sendRequest(){
    const method = document.getElementById("method").value;
    const url = document.getElementById("url").value;

    const requestBox = document.getElementById("request-box");
    const responseBox = document.getElementById("response-box");

    requestBox.innerHTML = `
    <pre>Method: ${method}
    URL: ${url}
    Headers:
        Content-Type: application/json</pre>
    `;


    try{
        const response = await fetch(url, {method: method });
        const status = response.status;
        const data = await response.text();

        responseBox.innerHTML = `
        <pre>Status: ${status}
    
    Body:
    ${data}</pre>
        `;
    }catch (error) {
        responseBox.innerHTML = `<pre>Error: ${error.message}</pre>`;
    }
}