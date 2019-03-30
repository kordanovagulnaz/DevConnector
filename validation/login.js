const validator = require('validator');
const isEmpty = require( ' ./is-empty');

module.exports = function validateLoginInput(data){
    let errors = {};

    data.email = !isEmpty(date.email) ? data.email: '';
    data.password = !isEmpty(date.password) ? data.password: '';

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

    return {
        errors,
        isValid: isEmpty(errors)
    }
}




