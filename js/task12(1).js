'use strict'

let numberOfFilms = prompt("сколько фильмов вы посмотрели?", "")
let numderOfFilms2 = prompt("один из последних просмотренных фильмов?", "")
let numderOfFilms3 = prompt("какая оценка фильма?", "");


 const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    generes : [],
    private : false
};

personalMovieDB.movies[numderOfFilms2] = numderOfFilms3;

console.log(personalMovieDB);