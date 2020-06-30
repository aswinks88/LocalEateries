export default function ValidateForm(values, useFile){
    let errors = {}
    if(!values.email){
        errors.email = 'Email address is required'
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = 'Email address is invalid'
    }

    if(!values.name){
        errors.name = 'Name of the restaurant is required'
    }
     if(!values.street){
        errors.street = 'Street address is required'
    } 
    if(!values.suburb){
        errors.suburb = 'Name of the suburb is required'
    }
     if(!values.zip){
        errors.zip = 'Zip/ Postal code is required'
    } 
     if(!values.city){
        errors.city = 'City is required'
    } 
    if(!values.phonenumber){
        errors.phonenumber = 'Phone number is required'
    } 
     if(!values.delivery){
        errors.delivery = 'delivery services are required'
    } 
    if(!values.charges){
        errors.charges = 'charges are required'
    }
     if(!values.contactless){
        errors.contactless = 'contactless pickup and delivery is required'
    } 
    if(!values.website){
        errors.website = 'website is required'
    }
    //  if(!values.openinghours){
    //     errors.openinghours = 'opening hours are required'
    // } 
    if(!useFile.addfiles){
        errors.addfiles = 'At least one image is required to upload'
    }
    if(!values.restaurantDesc){
        errors.restaurantDesc = 'Restaurant description cannot be empty'
    }
    // if(useFile.addfiles.length > 5){
    //     errors.addfiles = 'You cannot upload more than 5 images'
    // }

console.log(errors)

    return errors
}

