const LocalStrategy = require("passport-local").Strategy;
const { pool } = require("../databaza/konektimi");
const bcrypt = require("bcrypt");

function initialize(passport) {
  console.log("Initialized");

  const authenticateUser = (idS, password, done) => {
    pool.query(
      `SELECT * FROM students WHERE idS = $1`,
      [idS],
      (err, results) => {
        if (err) {
          throw err;
        }
        console.log(results.rows);

        if (results.rows.length > 0) {
          const user = results.rows[0];

          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
              console.log(err);
            }
            if (isMatch) {
              return done(null, user);
            } else {
              //password eshte gabim
              return done(null, false, { message: "Password eshte i pasakte!" });
            }
          });
        } else {
          // Nuk ka user
          return done(null, false, {
            message: "Nuk ka student me kete id"
          });
        }
      }
    );
  };

  passport.use(
    new LocalStrategy(
      { usernameField: "idS", passwordField: "password" },
      authenticateUser
    )
  );
 
  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) => {
    pool.query(`SELECT * FROM students WHERE id = $1`, [id], (err, results) => {
      if (err) {
        return done(err);
      }
      console.log(`ID is ${results.rows[0].id}`);
      return done(null, results.rows[0]);
    });
  });
}

module.exports = initialize;