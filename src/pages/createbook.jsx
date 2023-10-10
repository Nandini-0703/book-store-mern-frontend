import React , {useState} from 'react'
import axios from 'axios'
import Spinner from '../components/spinner'
import BackButton from '../components/BackButton'
import { useNavigate } from 'react-router-dom'

const Createbook = () => {

  const [title , settitle] = useState('');
  const [author , setauthor] = useState('');
  const [publishyear , setpublishyear] = useState('');
  const [loading , setloading] = useState(false);
  const navigate = useNavigate();


  const handleSaveBook = () => {
  const data = {
    title ,
    author , 
    publishyear ,
  };

  setloading(true);
  axios.post('http://localhost:3000/books' , data)
  .then(
    () => {
      setloading(false);
      navigate('/');
    }
  )
  .catch((error) => {
    setloading(false);
    alert('error occurred . please check the console');
    console.log(error);

  });
  };
  
  return (
    <div className = 'p-4'>
    <BackButton />
    <h1 className = 'text-3xl my-4'>Create book</h1>
    {loading ? (<Spinner/>) : ''}
    <div className = 'flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>

    
    <div className = 'my-4'>
        <label className = 'text-xl mr-4 text-gray-500'>Title</label>
        <input 
        type = 'text'
        value = {title}
        onChange={((e) => settitle(e.target.value))}
        className = 'border-2 border-gray-500 px-4 py-2  w-full' />
      </div>

      <div className = 'my-4'>
        <label className = 'text-xl mr-4 text-gray-500'>Publishyear</label>
        <input 
        type = 'number'
        value = {publishyear}
        onChange={((e) => setpublishyear(e.target.value))}
        className = 'border-2 border-gray-500 px-4 py-2  w-full' />
      </div>

      <div className = 'my-4'>
        <label className = 'text-xl mr-4 text-gray-500'>Author</label>
        <input 
        type = 'text'
        value = {author}
        onChange={((e) => setauthor(e.target.value))}
        className = 'border-2 border-gray-500 px-4 py-2  w-full' />
      </div>
    </div>
    <button className = 'p-2 bg-sky-300 m-8' onClick ={handleSaveBook}> Save </button>


    </div>
  )
}

export default Createbook