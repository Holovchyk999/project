"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("сколько фильмов вы посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("сколько фильмов вы посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  generes: [],
  private: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const numderOfFilms2 = prompt(
        "один из последних просмотренных фильмов?",
        ""
      ),
      numderOfFilms3 = +prompt("какая оценка фильма?", "");

    if (
      numderOfFilms2 != null &&
      numderOfFilms3 != null &&
      numderOfFilms2 != "" &&
      numderOfFilms3 != "" &&
      numderOfFilms2.length < 50
    ) {
      personalMovieDB.movies[numderOfFilms2] = numderOfFilms3;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("вы посмотрели мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("вы класический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("вы киноман");
  } else {
    console.log("error");
  }
}

detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB.private === false) {
    console.log(personalMovieDB);
  }
}

showMyDB();

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    let favoriteGenres = prompt(`ваш любиммый жанр под номером ${i}`);

    personalMovieDB.generes[i-1] = favoriteGenres;
  }
}

writeYourGenres();

// console.log(personalMovieDB);
