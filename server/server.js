import express from 'express';
import mongodb from 'mongodb';

const app = express();
const MONGO_URI = 'mongodb://localhost/movies';

mongodb.MongoClient.connect(MONGO_URI, function(err, db) {

	app.get('/api/movies', (req, res) => {
		db.collection('movies').find({}).toArray((error, movies) => {
			res.json({ movies });
		});
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