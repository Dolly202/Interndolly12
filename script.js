function Submit(){
    let a = document.getElementById("i1");
    let b = document.getElementById("i2");
    if(a.value == "Dolly")
        {
            if(b.value == "1234")
            {
                window.location.href = 'Home.html';
            }
            else{
                alert("Invalid Password");
            }
        }
        else{
            alert("Invalid Username");
        }
}