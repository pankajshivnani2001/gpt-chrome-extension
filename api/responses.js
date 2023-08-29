const responses = [
    {id: 1001, message: "Hello from API"},
    {id: 1002, message: "Hello world"},
    {id: 1003, message: "Hello from Node!"},
    {id: 1004, message: "Hello from GenAI!"},
    {id: 1005, message: "Hello from GPT!"},
    {id: 1006, message: "Hello from Pankaj!"}
]

const getAnswer = (question) => {
    return responses[
        String(question).length % responses.length
    ];
}

module.exports = getAnswer;