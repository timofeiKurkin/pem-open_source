import project from './_projectsInfo/projectsInfo.json'

export default function handler (req, res) {
	if(req.method === "GET") {
		res.status(200).json(project)
	}
}