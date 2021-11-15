let a = +prompt("Entrez un nombre");
let afficherA = document.getElementById("compte-a-rebour");

if (a === parseInt(a)) {
    while (a >= 0) {
        afficherA.innerHTML += a + "\n";
        a--;
    }
}

else {
    alert("Terminé")
}