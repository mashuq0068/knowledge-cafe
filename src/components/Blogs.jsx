import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
    const [blogs , setBlogs] = useState([])
    const [bookMarks , setBookMarks] =useState([])
    useEffect(()=>{
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    const handleBookMarks = (bookMark)=>{
        const newBookMarks = [...bookMarks , bookMark ]
        setBookMarks(newBookMarks)

    }
    const [markRead, setMarkRead] = useState(false)
    const handleMarkRead = () => {
        const markRead = true;
        setMarkRead(markRead)
    }

   console.log(blogs)
    return (
       <>
       <div className="flex flex-row-reverse justify-between ">
        <div>
        <div>
       spend Times in Read {markRead ? 177 + bookMarks.map(blog => parseFloat(blog.reading_time) ): 177} min
            </div>
           <div className="bg-[#1111110D] h-max p-3">
            {bookMarks.map(blog => <li className="px-3 bg-white py-3 drop-shadow-xl rounded-md list-none m-3" key={blog.id}>{blog.title}</li>)}
           </div>
        </div>
        <div>
            {blogs.map(blog => <Blog key={blog.id} handleMarkRead = {handleMarkRead} handleBookMarks={handleBookMarks}  blog={blog}></Blog> )}
        </div>
       </div>
        </>
    );
};

export default Blogs;