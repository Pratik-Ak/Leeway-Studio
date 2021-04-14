function myFunction() {
    document.getElementById("preloader").style.display = "block";

    setTimeout(showPage, 5000);
}

function showPage() {
    alert("page is load")
    document.getElementById("preloader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}