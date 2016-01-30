var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bears_db' //this is where the name of your database goes//
});

connection.connect();
// here we are selecting items from our actual happy_bears table from our bears_db database//
connection.query('SELECT name, favorite_food, personality FROM happy_bears;', function(err, rows, fields) {
  if (err) throw err;

  for (var i = 0; i < rows.length; i++){
          console.log(rows[i].name); //+ " is " + rows[i].age + " years old.");
  }

});

connection.end();