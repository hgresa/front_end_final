class Validation
{
    validateEmail(email) {
        let pattern = /.*@.*\....*/gm
        let passed = pattern.test(email)
        let errorElementId = 'email-error'

        if (!passed) {
            this.displayErrorMessage(errorElementId)
        } else {
            this.removeErrorMessage(errorElementId )
        }
    }

    validatePassword(password) {
        let alphaPattern = /^[a-z]+$/gm
        let alphaNumPattern = /^(\d+[a-z]|[a-z]+\d)/gm
        let upperAlphaNumPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/gm
        let specialCharsPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$!%&;*^])/gm
        let passwordMessage = ''

        if (specialCharsPattern.test(password)) {
            passwordMessage = 'ძალიან ძლიერი'
        } else if (upperAlphaNumPattern.test(password)) {
            passwordMessage = 'ძლიერი'
        } else if (alphaNumPattern.test(password)) {
            passwordMessage = 'საშუალო'
        } else if (alphaPattern.test(password)) {
            passwordMessage = 'სუსტი'
        }

        this.displayPasswordMessage(passwordMessage)
    }

    passwordsMatch () {
        let password = document.getElementById('password').value
        let confirmPassword = document.getElementById('confirm-password').value
        let errorElementId = 'confirm-password-error'

        if (password !== confirmPassword) {
            this.displayErrorMessage(errorElementId)
        } else {
            this.removeErrorMessage(errorElementId)
        }
    }

    displayErrorMessage(errorElementId) {
        let errorElement = document.getElementById(errorElementId)
        errorElement.style.display = 'block'
    }

    removeErrorMessage(errorElementId) {
         let errorElement = document.getElementById(errorElementId)
        errorElement.style.display = 'none'
    }

    displayPasswordMessage(message) {
        let strengthElement = document.getElementById('password-strength')
        strengthElement.innerText = message
    }
}

let validator = new Validation()