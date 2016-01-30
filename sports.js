var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sports_db'
});

var showSports = function() {
  connection.query('SELECT * FROM sports', function(err, rows) {
      console.log("Sports we have ", rows);
  });
}

var addSport = function() {
  connection.query('INSERT INTO sports (sport_name, intensity) VALUES (?,?)', ['extreme ping pong', 10], function(err, result) {
    //the question marks are there to prevent possibly malicious SQL injections//
    if (err) throw err;

    console.log("insert finished~!")
  });
};

showSports();

console.log("Adding a sport now");
addSport();
showSports();

connection.end();