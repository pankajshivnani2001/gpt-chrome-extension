const express = require('express');
const cors = require('cors');
const getAnswer = require('./responses');

const app = express();
const port = 3000;


app.use(cors({
    origin: `*`
}));


app.get('/', (request, response) => {
    const question = request.query.question;
    console.log(question);

    const answer = getAnswer(question);
    console.log(answer);

    response.send(answer);
})

app.listen(port, () => {
    console.info(`App running on port ${port}`);
})