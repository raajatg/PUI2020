document.body.onload = alert("Hello World");

document.getElementById("red").onclick = hideProfs();

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