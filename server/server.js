import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const MONGO_URI = 'mongodb://localhost/movies';

function validate(data) {
	let errors = {};
	if (data.title === '') errors.title = "You cannot have an empty title";
	if (data.photo === '') errors.photo = "You cannot have an empty Photo URL";
	const isVal = Object.keys(errors).length === 0;
	return { errors, isVal };

}

mongodb.MongoClient.connect(MONGO_URI, function(error, db) {

	//Define the route
	app.get('/api/movies', (req, res) => {
		db.collection('movies').find({}).toArray((error, movies) => {
			res.json({ movies });
		});
	});

	app.post('/api/movies', (req, res) => {
		const { errors, isVal } = validate(req.body);
		if (isVal){
			const { title, photo } = req.body;
			db.collection('movies').insert({ title, photo }, (error, result) => {
				if (error) {
					res.status(500).json({ errors: { global: "Oops something is right!" }});
				} else {
					res.json({ movie: result.ops[0] });
				} 
			})

		} else {
			res.status(400).json({ errors });
		}

	});
  
	app.use((req, res) => {
		res.status(404).json({
    		errors: {
        		global: "Please try again later"
      		}
    });
})

  app.listen(8080, () => console.log(`Server running at http://localhost:8080`));

});