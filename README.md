# Mock API Chrome Extension

This is a simple chrome extension that takes a question from the user and returns a random response based on the length of the question.
The API is built using NodeJs and ExpressJs. The UI is built using HTML, CSS, Bootstrap, and Javascript.

## Features

1.  Input Validation: API is not triggered for blank inputs.
2.  Error Handling: Error messages are displayed if the API is unreachable.
3.  CORS Configuration: Cross Origin Resource Sharing(CORS) has been configured and can be extended to permit and restrict origins.

## How to Run Locally

1.  Ensure you have Node installed in your local.
2.  To install express and cors package, run:

```
npm install express
npm install cors
```

3.  Clone the Git repository using git clone command.

```
git clone https://github.com/pankajshivnani2001/gpt-chrome-extension
```

4.  Navigate to the api directory in the repository and run the following command to start the node server responsible for our API:

```
node index.js
```

5. Open chrome browser and navigate to Extensions > Manage Extensions by clicking on the three vertical dots from the top right.
6. Click on Load Unpacked option from the top left and select the cloned Git repository.
7. You can now play around with the extension by clicking on the extensions icon from the top right and selecting the GenAI Chrome Extension.
