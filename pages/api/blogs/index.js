import data from '../data'

// export default async(req, res) => {
//   res.status(200).json(blogs);
// }

export default function handler(req, res) {
  const {Blogs} = data;
  if(Blogs)
    return res.status(200).json(Blogs)
  return res.status(404).json({error: "Data not found."})
}