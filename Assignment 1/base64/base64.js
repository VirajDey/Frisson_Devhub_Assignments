function encode(str){
    return(btoa(str));
}

function decode(str){
    return(atob(str));
}

let encoded = "";

document.getElementById("string").addEventListener("click", ()=> {
    let newpass = prompt("Enter new password", "");
    encoded = encode(newpass);
    alert("Password Saved");
    console.log(encoded);
})

document.getElementById("compare").addEventListener("click", ()=> {
    const compstring = prompt("Enter password to Verify", "");
    if (compstring == decode(encoded)) {
        alert("Password is correct");
    }
    else {
        alert("Password is incorrect");
    }
})



