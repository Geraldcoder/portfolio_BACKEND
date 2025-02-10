const mongoose = require('mongoose')

const connectDB = (url) => {
	return mongoose.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
}

module.exports = connectDB

// const { MongoClient, ServerApiVersion } = require('mongodb')
// const connectDB = new MongoClient(process.env.MONGO_URI, {
// 	serverApi: {
// 		version: ServerApiVersion.v1,
// 		strict: true,
// 		deprecationErrors: true,
// 	},
// })

// module.exports = connectDB
