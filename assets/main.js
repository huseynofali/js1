function Films(name, year, image){
    this.name = name;
    this.year = year;
    this.image = image;
}
let FURY = new Films("FURY","2014","https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Fury_2014_poster.jpg/220px-Fury_2014_poster.jpg");
let Kolpaçino = new Films("Kolpaçino","2009","https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Kolpa%C3%A7ino_Theatrical_Poster.jpg/220px-Kolpa%C3%A7ino_Theatrical_Poster.jpg");

let films = [FURY,Kolpaçino];
let box = document.getElementById("box");
getFilms();
function getFilms(){
    box.innerHTML = "";
    for (const film of films) {
        box.innerHTML +=
        `<div class="col-md-4 w-25 card me-3 bg">
            <img class="w-100" src="${film.image}">
            <div>
                <h1 class="text-white">${film.name} </h1>
                <p class="text-white">${film.year}</p>
            </div>
        </div>`
    }
}

function CreateFilm(){
    films.push(new Films(inputName.value,inputYear.value,ImageUrl.value))
    getFilms()
}