import data from '../data'

// export default async(req, res) => {
//   res.status(200).json(blogs);
// }

export default function handler(req, res) {
  const {Tutorials} = data;
  if(Tutorials)
    return res.status(200).json(Tutorials)
  return res.status(404).json({error: "Data not found."})
}