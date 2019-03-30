const validator = require('validator');
const isEmpty = require( ' ./is-empty');

module.exports = function validateRegisterInput(data)
{
    let errors = {};

    data.name = !isEmpty(date.name) ? data.name: '';
    data.email = !isEmpty(date.email) ? data.email: '';
    data.password = !isEmpty(date.password) ? data.password: '';
    data.password2 = !isEmpty(date.password2) ? data.password2: '';

    if(!validator.isLength(data.name, {min:2, max:30})){
        errors.name = 'Name must be between 2 and 30 characters';
    }

    if (validator.isEmpty(data.name)){
        errors.name = ' Name field is required';
    }

    if (validator.isEmpty(data.email)){
        errors.name = ' Email field is required';
    }

    if (!validator.isEmail(data.email)){
        errors.name = 'Email is invalid';
    }
    
    if (validator.isEmpty(data.password)){
        errors.password = 'Password field is required';
    }

    if(!validator.isLength(data.password, {min:6, max:30})){
        errors.password = 'Password must be between 2 and 30 characters';
    }

    if (validator.isEmpty(data.password2)){
        errors.password2 = 'Confirm Password field is required';
    }

    if(!validator.equals(data.password, data.password2)) {
        errors.password2 = 'Password must match';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}




