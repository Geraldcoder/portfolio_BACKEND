const Projects = require('../models/projects')

const getAllProjects = async (req, res) => {
	const newProject = await Projects.find({})
	res.status(200).json({ newProject, total: newProject.length })
}

const createProject = async (req, res) => {
	const newProject = await Projects.create(req.body)
	res.status(200).json({ newProject })
}

module.exports = { getAllProjects, createProject }
