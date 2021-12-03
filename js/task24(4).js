"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  generes: [],
  private: false,

  start: function () {
    personalMovieDB.count = +prompt("сколько фильмов вы посмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("сколько фильмов вы посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
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
  },

  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("вы посмотрели мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("вы класический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("вы киноман");
    } else {
      console.log("error");
    }
  },
  showMyDB: function () {
    if (personalMovieDB.private === false) {
      console.log(personalMovieDB);
    }
    },
  
  toggleVisibleMyDB: function () {

    console.log(privetValue);

    if (personalMovieDB.private) {
      personalMovieDB.private = false;
    } else;
    {
      personalMovieDB.private = true;
    }
    },
  
  writeYourGenres: function () {
    for (let i = 1; i < 4; i++) {
      let genre = prompt(`ваш любиммый жанр под номером ${i}`);


      if (genre === null || ganre === "") {
          console.log("не ввели коректно даные")
          i--
      } else {
      personalMovieDB.generes[i - 1] = genre;

      }
      }
      personalMovieDB.generes.forEach((item, i) => {
          console.log(`любимый жанр${i + 1} это ${item}`)
      })
  },
};

