/* const express = require('express');
const app = express();
app.use(express.static('public/'));
app.listen(8080), function(){
    console.log('server listening at port 8080');
}; */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set up routes
app.get('/', (req, res) => {
  res.send(`
  <h1>INPUT SOMETHING</h1>
    <input id="userInput">
    <button onclick="myFunction()">Click Me</button>
    <h1 id="message"></h1>

    <script>
        function myFunction() {
            let userInput = document.querySelector("#userInput");
            let message = document.querySelector("#message");

            message.innerHTML = "Your input was: " + userInput.value;
        }
    </script>
  `);
});

app.post('/', (req, res) => {
  const name = req.body.name;
  res.send(`Hello, ${name}!`);
});

// Start the server
app.listen(8080, () => {
  console.log('Server started on port 8080');
});