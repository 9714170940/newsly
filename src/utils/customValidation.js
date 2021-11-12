
const genericField = /^[^!-@[-`{-~£]+$/
const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/

const required = {
    fullName: 'Name required*',
    email: 'Email required*',
    phone: 'Phone required*',
    password: 'password required*',
    cPassword: 'Confirm password required*',
}
const invalidFields = {
    fullName: 'Invalid Name',
    password: 'Please choose a password with at least 8',
    cPassword: 'Please choose a password with at least 8',
    email: 'Invalid email address',
    phone: 'Invalid mobile number',
}


export const customValidation = (name,value) => {
    switch (name) {
        case 'fullName':
            if(!value || value.trim()===' '){
                return required[name]
            }else if(!genericField.test(value)){
                return invalidFields[name]
            }else{
                return ''
            }
        case 'email':
            if(!value || value.trim()===' '){
                return required[name]
            }else if(!value.match(validEmail)){
                return invalidFields[name]
            }else{
                return ''
            }
        case 'password' :
        case 'cPassword' :
            if(!value || value.trim()===' '){
                return required[name]
            }else if(value.length < 8){
                return invalidFields[name]
            }else {
                return ''
            }
        case 'phone':
            if(!value || value.trim()===' '){
                return required[name]
            }else if(!value.match(mobileRegex)){
                return invalidFields[name]
            }else{
                return ''
            }
        default: return ''
    }
}