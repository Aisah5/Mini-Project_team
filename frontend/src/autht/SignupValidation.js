function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/

    if(values.username === "") {
        error.username = "Name tidak boleh kosong"
    }    else {        
        error.username = ""    
    }
    
    if(values.phone === "") {
        error.phone = "Nomor Handphone tidak boleh kosong"
    }    else {        
        error.phone = ""    
    }

    if(values.storename === "") {
        error.storename = "Nama Toko tidak boleh kosong"
    }    else {        
        error.storename = ""    
    }


    if(values.email === "") {
        error.email = "Email tidak boleh kosong"
    }
    else if(!email_pattern.test(values.email)) {        
        error.email = "Email tidak cocok"    
    }    else {        
        error.email = ""    
    }

    if(values.password === "") {        
        error.password = "Password tidak boleh kosong"    
    }     else if(!password_pattern.test(values.password)) {        
        error.password = "Password tidak cocok"    
    }     else {        
        error.password = ""    
}    
    return error;
}
export default Validation;
