const baseURL = "http://localhost:3000/api/blogs";

// endpoint: http://localhost:3000/api/posts
export default async function getBlog(id){
    const res = await fetch(`${baseURL}`)
    const blogs = await res.json()

    if(id){
        return blogs.find(value => value.id == id)
    }

    return blogs;
}