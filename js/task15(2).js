"use strict";

let numberOfFilms = +prompt("сколько фильмов вы посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  generes: [],
  private: false,
};

for (let i = 0; i < 2; i++) {
  const numderOfFilms2 = prompt("один из последних просмотренных фильмов?", ""),
    numderOfFilms3 = prompt("какая оценка фильма?", "");

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

if (personalMovieDB.count < 10) {
  console.log("вы посмотрели мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("вы класический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("вы киноман");
} else {
  console.log("error");
}

console.log(personalMovieDB);
