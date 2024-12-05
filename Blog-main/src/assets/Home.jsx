import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Home() {
    const[posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/getposts')
        .then(posts => {
          setPosts(posts.data)
        })
        .catch(err => console.log(err))
    }, [])       

  return (
    <div className='post_container'>
      {
          posts.map(post => (
            <Link to={`/post/${post._id}`}className='post' key={post._id}>
            
            <img src={`http://localhost:3001/Images/${post.file}`} alt=""/>

              <div className = 'post_text'>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
            
            </div>
            </Link>
          ))
        }
        </div>
  );
}
  


export default Home;