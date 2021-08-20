import * as yup from 'yup';

const loginSchema = yup.object().shape({
    username: yup.string().trim()
        .min(4,'The username must be at least 4 characters long')
        .required('Username is a required field'),
    password: yup.string()
        .required('You must type in a password')
        .min(6,'Your password must be at least 6 characters long'),
})

export default loginSchema