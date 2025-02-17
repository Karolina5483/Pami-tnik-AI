// script.js

// Zmiana aktywnej zakładki
document.querySelectorAll(".tab-btn").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active-tab"));
        document.getElementById(button.getAttribute("data-tab")).classList.add("active-tab");
    });
});

// Dodawanie notatki
function addNote() {
    const noteInput = document.getElementById("noteInput");
    const notesList = document.getElementById("notesList");
    const note = document.createElement("li");
    note.textContent = noteInput.value;
    notesList.appendChild(note);
    noteInput.value = "";  // Czyszczenie pola po dodaniu notatki
}

// Generowanie afirmacji
function generateAffirmation() {
    const affirmations = [
        "Jesteś silna i zdolna!",
        "Każdy dzień to nowa szansa!",
        "Twoje myśli mają moc!",
        "Masz w sobie ogromny potencjał!",
        "Zasługujesz na miłość i szczęście!",
        "Jesteś wystarczająca taka, jaka jesteś!",
        "Zmieniasz świat na lepsze!",
        "Każdy krok do przodu to sukces!",
        "Wszystko, czego potrzebujesz, masz w sobie!",
        "Twój uśmiech rozświetla świat!"
    ];
    const affirmationText = affirmations[Math.floor(Math.random() * affirmations.length)];
    document.getElementById("affirmation").textContent = affirmationText;
}

// Dodawanie zdjęcia do albumu
function addImage() {
    const imageUpload = document.getElementById("imageUpload");
    const gallery = document.getElementById("gallery");
    const file = imageUpload.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}


