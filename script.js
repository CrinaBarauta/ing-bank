$(document).ready(function () {
    const form  = document.getElementsByTagName('form')[0];
    
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const country = document.getElementById('country');
    
    const firstNameError = document.querySelector('#firstName + span.error');
    const lastNameError = document.querySelector('#lastName + span.error');
    const countryError = document.querySelector('#country + span.error');
    
    firstName.addEventListener('input', function (event) {
    // Each time the user types something, we check if the form fields are valid.
    if (firstName.validity.valid) {
        // In case there is an error message visible, when the field is valid, we remove the error message.
        firstNameError.innerHTML = ''; // Reset the content of the message
        firstNameError.className = 'error'; // Reset the visual state of the message
    } else {
        // If there is still an error, show that specific error
        showError();
    }
    });
    
    lastName.addEventListener('input', function (event) {
        // Each time the user types something, we check if the form fields are valid.
        if (lastName.validity.valid) {
            // In case there is an error message visible, whn the field is valid, we remove the error message.
            lastNameError.innerHTML = ''; // Reset the content of the message
            lastNameError.className = 'error'; // Reset the visual state of the message
        } else {
            // If there is still an error, show that specific error
            showError();
        }
        });

        country.addEventListener('change', function (event) {
        var mainError = document.getElementById("main__error");

    // Each time the user selects something, we check if the form fields are valid.
    if (country.validity.valid) {
        // In case there is an error message visible, when the field is valid, we remove the error message.
        countryError.innerHTML = ''; // Reset the content of the message
        countryError.className = 'error'; // Reset the visual state of the message
    } else {
        // If there is still an error, show that specific error
        showError();
    }
    // If all the form fields are valis, remove the top message error
    if(lastName.validity.valid && firstName.validity.valid && country.validity.valid){
            mainError.style.display = "none";
        }
    });
    
    //Error messages
    function showError() {
    var mainError = document.getElementById("main__error");
    if(firstName.validity.valueMissing) {
        // If the field is empty display the following error message
        firstNameError.textContent = 'Camp obligatoriu';
        mainError.style.display = "block";
    } else if(firstName.validity.tooShort) {
        // If the data is too short display the following error message
        firstNameError.textContent = `Introduceti prenumele complet`;
    }
    
    if(lastName.validity.valueMissing) {
        // If the field is empty display the following error message
        lastNameError.textContent = 'Camp obligatoriu';
        mainError.style.display = "block";
    } else if(lastName.validity.tooShort) {
        // If the data is too short display the following error message
        lastNameError.textContent = `Introduceti numele complet`;
    }

    if(country.validity.valueMissing) {
        // If the field is empty display the following error message
        countryError.textContent = 'Camp obligatoriu';
        mainError.style.display = "block";
    }

            
    // Set the styling appropriately
    firstNameError.className = 'error active';
    lastNameError.className = 'error active';
    countryError.className = 'error active';
    }


    //Submit check
    form.addEventListener('submit', function (event) {
        var form = document.getElementById("myForm");
        var ty = document.getElementById("ty");
    
        // if the form contains valid data, we let it submit
        if(!firstName.validity.valid) {
            // If it isn't, we display an appropriate error message
            showError();
            // Then we prevent the form from being sent by canceling the event
            event.preventDefault();
        }
        
        if(!lastName.validity.valid) {
                // If it isn't, we display an appropriate error message
                showError();
                // Then we prevent the form from being sent by canceling the event
                event.preventDefault();
            } 
                
        if(!country.validity.valid) {
                // If it isn't, we display an appropriate error message
                showError();
                // Then we prevent the form from being sent by canceling the event
                event.preventDefault();
            } 
                
        // When all the fields are valid, we hide the form and show the thank you message, plus we scroll on the top of the page
        if (lastName.validity.valid && firstName.validity.valid && country.validity.valid) {
                form.style.display = "none";
                ty.style.display = "block";
                event.preventDefault();
            }
        });



    //Popup window that is displayed on top of the current page in order to show the form and thank you message:

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
})

