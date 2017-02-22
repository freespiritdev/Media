import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const MONGO_URI = 'mongodb://localhost/media';

function validate(data) {
	let errors = {};
	if (data.title === '') errors.title = "You cannot have an empty title";
	if (data.photo === '') errors.photo = "You cannot have an empty Photo URL";
	const isVal = Object.keys(errors).length === 0;
	return { errors, isVal };

}

mongodb.MongoClient.connect(MONGO_URI, function(error, db) {

	//Define the routes
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

	app.get('/api/movies/:_id', (req, res) => {
		db.collection('movies').findOne( { _id: new mongodb.ObjectId(req.params._id) }, (err, movie) => {
			res.json({ movie })
		})
	});

	app.put('/api/movies/:_id', (req, res) => {
		const { errors, isVal } = validate(req.body);

		if (isVal) {
			const { title, photo } = req.body;
			db.collection('movies').findOneAndUpdate(
				{ _id: new mongodb.ObjectId(req.params._id) },
				{ $set: { title, photo }},
				{ returnOriginal: false },
				(err, result) => {
					if (err) { res.status(500).json({ errors: { global: error }}); 

					return; 
				}
					res.json({ movie: result.value });
				}
			);
		} else {
			res.status(400).json({ errors });
		}
	});

	app.delete('/api/movies/:_id', (req, res) => {
		db.collection('movies').deleteOne({ _id: new mongodb.ObjectId(req.params._id) }, (error, r) => {
			if (error) { res.status(500).json({ errors: { global: err }}); return; }

			res.json({});
		})
	});

// TV SHows
	app.get('/api/shows', (req, res) => {
			db.collection('shows').find({}).toArray((error, shows) => {
			res.json({ shows });
		});	
	});

	app.post('/api/shows', (req, res) => {
		const { errors, isVal } = validate(req.body);
		if (isVal){
			const { title, photo } = req.body;
			db.collection('shows').insert({ title, photo }, (error, result) => {
				if (error) {
					res.status(500).json({ errors: { global: "Oops something is right!" }});
				} else {
					res.json({ show: result.ops[0] });
				} 
			})
		} else {
			res.status(400).json({ errors });
		}
	});

	app.get('/api/shows/:_id', (req, res) => {
		db.collection('shows').findOne( { _id: new mongodb.ObjectId(req.params._id) }, (err, shows) => {
			res.json({ shows })
		})
	});

	app.put('/api/shows/:_id', (req, res) => {
		const { errors, isVal } = validate(req.body);

		if (isVal) {
			const { title, photo } = req.body;
			db.collection('shows').findOneAndUpdate(
				{ _id: new mongodb.ObjectId(req.params._id) },
				{ $set: { title, photo }},
				{ returnOriginal: false },
				(err, result) => {
					if (err) { res.status(500).json({ errors: { global: error }}); 

					return; 
				}
					res.json({ show: result.value });
				}
			);
		} else {
			res.status(400).json({ errors });
		}
	});

	app.delete('/api/shows/:_id', (req, res) => {
		db.collection('shows').deleteOne({ _id: new mongodb.ObjectId(req.params._id) }, (error, r) => {
			if (error) { res.status(500).json({ errors: { global: err }}); return; }

			res.json({});
		})
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