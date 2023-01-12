const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fetch = require('node-fetch');

var cors = require('cors');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);

app.post('/chatbot', (req, res) => {
    const message = req.body.message;
    const number = message.match(/\+d/);
    if (number) {
        fetch(`http://numbersapi.com/${number}?type=trivia`).then(response => response.text()).then(data =>{
            res.json({
                text: data
            });
        }).catch(error => {
            res.json({
                text: "Sorry, I couldn't find information about that number"
            })
        })
    } else {
        res.json({
            text: "I'm sorry, I didn't understand your question. Please provide a number for me to give information about."
        })
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})