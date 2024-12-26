import data from '../data'

export default function handler(req,res) {
    const { blogId } = req.query;
    const { Blogs } = data;

    if(blogId) {
        const blog = Blogs.find(value => value.id == blogId)
        return res.status(200).json(blog);
    }

    return res.status(404).json({error: "Blog not found."})
}