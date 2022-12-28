function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "coba" && password == "test") {
        alert("You are a valid user");
        window.open('homepage.html');
    } else {
        alert("You are not a valid user");
    }
}