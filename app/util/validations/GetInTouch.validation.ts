const emailPattern = /^\w+([\\.-\\+]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

export const getInTouchValidation = {
    name: {
        required: "Name should not be empty!",
    },
    email: {
        required: "Email should not be empty!",
        pattern: {
            value: emailPattern,
            message: 'Email is Invalid'
        },
    },
    subject:{
        required: "Subject should not be empty!",
    },
    message: {
        required: "Message should not be empty!",
        maxLength: {
            value: 400,
            message: "Message must have less than 400 Characters"
        }
    }
  
}