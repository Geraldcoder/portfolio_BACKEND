require('dotenv').config()
const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const projectsRouter = require('./routes/projects')

app.use(express.json())
app.get('/', (req, res) => {
	res.send(
		'<h3>Hello there</h3><p>See my projects <a href="api/v1/projects">here</a></p>'
	)
})

app.use('/api/v1/projects', projectsRouter)

const port = 3000 || process.env.PORT

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		app.listen(port)
		console.log(`server is listening on port ${port}`)
	} catch (error) {
		console.log(error)
	}
}
start()

// alternatively, mongoDB's new docs

// async function start() {
// 	try {
// 		await connectDB.connect()
// 		await connectDB.db('admin').command({ ping: 1 })
// 		app.listen(port)
// 		console.log(`server is listening on port ${port}`)
// 	} finally {
// 		// Ensures that the connectDB will close when you finish/error
// 		await connectDB.close()
// 	}
// }
// start().catch(console.dir)
