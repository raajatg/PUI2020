document.body.onload = alert("Hello World")

function hideProfs() {
    var x = document.getElementsByClassName("instructor-name");
    for(let counter=0; counter < x.length; counter++){
        if (x[counter].style.display === "none") {
            x[counter].style.display = "block";
        } else {
            x[counter].style.display = "none";
        }
    }
}