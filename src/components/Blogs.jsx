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
    const [markRead, setMarkRead] = useState(0)
    const handleMarkRead = (time ,title) => {
        const newMarkRead = markRead + time;
        setMarkRead(newMarkRead)
     const newBookMarks =  bookMarks.filter(bookMark => bookMark.title != title);
     setBookMarks(newBookMarks)
        
       
    }
    console.log(bookMarks)
 
    

    return (
       <>
       <div className="flex flex-row-reverse justify-between ">
        <div className="space-y-5">
        <div style={{border : "1px solid #6047EC"}} className="bg-[#6047EC1A] p-4 rounded-md">
       <p className="text-[#6047EC] font-bold ">Total read time {markRead  + 177} min</p>
            </div>
           <div className="bg-[#1111110D] h-max p-3 rounded-md">
            <div className="p-3">Total BookMarked Item : {bookMarks.length}</div>
            {bookMarks.map((blog ,i) => <li className="px-3 bg-white py-3 drop-shadow-xl rounded-md list-none m-3" key={i}>{blog.title}</li>)}
           </div>
        </div>
        <div>
            {blogs.map((blog ,i)  => <Blog key={i} handleMarkRead = {handleMarkRead} handleBookMarks={handleBookMarks}  blog={blog}></Blog> )}
        </div>
       </div>
        </>
    );
};

export default Blogs;