const questionInput = document.getElementById('question');
const submitBtn = document.getElementById('submitBtn');
const outputDiv = document.getElementById('outputSection');

const apiEndpoint = 'http://localhost:3000/';


const populateOutputFields = (data) => {
    clearDiv(outputDiv);

    let outputHeading = document.createElement('h2');
    outputHeading.textContent = 'Result';
    outputDiv.appendChild(outputHeading);

    let outputText = document.createElement('span');
    outputText.textContent = data.message;
    outputText.classList.add('lead');

    outputDiv.appendChild(outputText);
}

const showErrorMsg = (error) => {
    let errorDiv = document.createElement('div');

    errorDiv.id = 'errorSection';
    errorDiv.classList.add('alert');
    errorDiv.classList.add('alert-danger');
    
    errorDiv.textContent = `Something went wrong! ${error}`;
    
    document.body.insertBefore(errorDiv, document.body.firstChild);
}

const clearErrorMsg = () => {
    let errorDiv = document.getElementById('errorSection');
    if (errorDiv) {
        errorDiv.remove();
    }
}

const clearDiv = (div) => {
    Array.from(div.children)
        .forEach(child => div.removeChild(child));
}

/* 
    Submit button enabled only if user enters the question
*/
questionInput.addEventListener('input', () => {
    submitBtn.disabled = questionInput.value.length === 0;
})

submitBtn.addEventListener('click', () => {
    let question = questionInput.value;
    
    fetch(apiEndpoint.concat(`?question=${question}`))
        .then(response => response.json())
        .then(data => {
            populateOutputFields(data);
            clearErrorMsg();
        })
        .catch(err => {
            showErrorMsg(err);
            clearDiv(outputDiv);
        });
})