export default function ValidateLogin(useUser){
    let errors = {}
    
    if(!useUser.name){
        errors.name = 'Name field cannot be empty'
    }
    if(!useUser.email){
        errors.email = 'Email field cannot be empty'
    }
    if(!useUser.password){
        errors.password = 'Password field cannot be empty'
    }
    return errors
}