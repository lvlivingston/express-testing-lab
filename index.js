// Dependencies
const express = require('express');
const cors = require('cors');

// Instantiate Express app
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.set('port', process.env.PORT || 3000);

// Redirect
app.get('/', (req, res) => {
	res.redirect('/gifs');
});

// Controllers
const gifs = require('./controllers/gifs');
app.use('/gifs', gifs);

const PORT = process.env.PORT || 3000;

server = app.listen(PORT, () => {
console.log(
		'Hello world! ⭐️ Express GAphy API listening on port ' + app.get('port')
	);
});

module.exports = {app, server};
