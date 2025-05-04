let hashed = '';

function encrypt(data){
    let hash = md5(data);
    return hash;
}


document.getElementById("string").addEventListener("click", ()=> {
    let newpass = prompt("Enter new password", "");
    hashed = encrypt(newpass);
    alert("Password Saved");
    console.log(hashed);
})

document.getElementById("compare").addEventListener("click", ()=> {
    const compstring = prompt("Enter password to Verify", "");
    if (md5(compstring) == hashed) {
        alert("Password is correct");
    }
    else {
        alert("Password is incorrect");
    }
})