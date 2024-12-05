
import Navbar from './assets/Navbar'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './assets/Register'
import Login from './assets/Login'
import Home from './assets/Home'
import React, { createContext ,useState , useEffect } from 'react'
import axios from 'axios';
import CreatePost from './assets/CreatePost'
import Post from './assets/Post'
import EditPost from './assets/EditPost'

export const userContext = createContext()

function App() {
  const [user, setUser] = useState({})

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3001/')
    .then(user => {
      setUser(user.data)
    })
    .catch(err => console.log(err))
  }, []);
  

  return( 
    <userContext.Provider value={user}>
  <BrowserRouter>
  <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
      
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/create" element={<CreatePost/>}></Route>
      <Route path="/post/:id" element={<Post/>}></Route>
      <Route path="/editpost/:id" element={<EditPost/>}></Route>
      
  
    </Routes>
    </BrowserRouter>
    </userContext.Provider>
    )
 
}
export default App
