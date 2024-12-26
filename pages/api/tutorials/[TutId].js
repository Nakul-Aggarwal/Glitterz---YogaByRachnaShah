import data from '../data'

export default function handler(req,res) {
    const { TutId } = req.query;
    const { Tutorials } = data;

    if(TutId) {
        const tutorial = Tutorials.find(value => value.id == TutId)
        return res.status(200).json(tutorial);
    }

    return res.status(404).json({error: "Tutorial not found."})
}