import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';



function App() {

  let [data, setData ] = useState();
  
  useEffect (()=>{
    let resopnse = async ()=>{
      let apiData = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(apiData.data)
    }
    resopnse()
  }, [])


  return (
    <>
    { 
    data && 
    data.length > 0
    ?
    data.map((item,index)=>(
      <div key={index} className='data_wrapper'>
        <div className='main'>
        <h1 className='userID'>{item.userId}</h1>
        <h1>{item.id}</h1>
        <h1>{item.body}</h1>
        </div>
      </div>
    ))
    :
    <h1>loading....</h1>
    }
    </>
  )
}

export default App
