import PropTypes from 'prop-types'; 

const Blog = ( { blog, handleBookMarks , handleMarkRead } ) => {
    

    const { cover, author, author_img, reading_time, title, hashtags } = blog
    return (
        <div className="m-12 text-left">
            <img src={cover} alt="" />
            <p>{author}</p>
            <img className="w-[50px]" src={author_img} alt="" />
            <p>{reading_time} min read</p>
            <img onClick={() => { handleBookMarks(blog) }} className="cursor-pointer" src="./Frame.png" alt="" />
            <p>{title}</p>
            <p>#{hashtags[0]} #{hashtags[1]}</p>
            <p onClick={()=>{handleMarkRead(reading_time ,title)}} className="text-blue-700 underline cursor-pointer">Mark as read</p>
            <br /><br />


            <hr />
        </div>

    );
};
Blog.propTypes = {
    blog: PropTypes.shape({
        cover: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        author_img: PropTypes.string.isRequired,
        reading_time: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    handleBookMarks: PropTypes.func.isRequired,
    handleMarkRead: PropTypes.func.isRequired,
};
export default Blog;
