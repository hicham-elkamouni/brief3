function xfunction() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    document.getElementById("afficher-name").innerHTML = "your name is " + name;
    document.getElementById("afficher-email").innerHTML = "your email is " + email;
    document.getElementById("afficher-subject").innerHTML = "your subject is " + subject;
    document.getElementById("afficher-message").innerHTML = "your message is " + message;

    /*     var show1 = document.getElementById("afficher-name");
        var show2 = document.getElementById("afficher-email");
        var show3 = document.getElementById("afficher-password");
        var show4 = document.getElementById("afficher-message"); */

    /* show1.innerHTML = name;
    show2.innerHTML = email;
    show3.innerHTML = password;
    show4.innerHTML = message; */

}








/* console.log(email + " " + password); */