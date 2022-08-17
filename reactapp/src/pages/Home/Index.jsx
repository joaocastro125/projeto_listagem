// @ts-nocheck
import './style.css'
import { Card } from '../../componets/card'
import { useState } from 'react'
import { useEffect } from 'react'
export function Home() {
  const[studentName , setstudentName]=useState('')
  const [students,setStudents]=useState([])
  const [user,setUser]=useState({name:'',avatar:''})
  

  function handleAddStudent(){
    const newStudent={
      name:studentName,
      time:new Date().toLocaleTimeString("pt-br",{
         hour:'2-digit',
         minute:'2-digit',
         second:'2-digit'

      })
     
    }
    setStudents(prevState=>[...prevState,newStudent])
  }
  useEffect(()=>{
   fetch('https://api.github.com/users/joaocastro125')
   .then(response=>response.json())
   .then(data=>{
      setUser({
        name:data.name,
        avatar:data.avatar_url
      })
   })
  },[])

  return (
    <div className="container">
    <header>
       <h1>Lista de presença</h1>
        <div>
      <strong>João Castro</strong>
      <img src="http://github.com/joaocastro125.png" alt="" />
      </div>
    </header>
   
   
      <input 
      onChange={e=>setstudentName(e.target.value)}
      type="text" 
      placeholder="digite seu nome:"

       />
      <button type="button" onClick={handleAddStudent}>adcionar</button>
      {
        students.map((student)=><Card 
          key={student.time}
          name={student.name}
          time={student.time} 
          /> )
        
      }
      
     
    </div>
  )
}


