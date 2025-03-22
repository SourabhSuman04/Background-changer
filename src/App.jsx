import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("grey")

  return (
  
    <div className='w-full h-screen duration-300' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-2 px-2'>
<div className='flex fixed gap-2 shadow-xl flex-wrap bg-white px-3 py-2 rounded-3xl justify-center'> 
   <button onClick={()=> setColor('gold')} className='outline-none px-4 py-1 rounded-full text-white ' style={{backgroundColor:'gold'}}>red</button>
   <button onClick={()=> setColor('purple')} className='outline-none px-4 py-1 rounded-full text-white ' style={{backgroundColor:'purple'}}>purple</button>
   <button onClick={()=> setColor('crimson')} className='outline-none px-4 py-1 rounded-full text-white ' style={{backgroundColor:'crimson'}}>crimson</button>
   <button onClick={()=> setColor('green')} className='outline-none px-4 py-1 rounded-full text-white ' style={{backgroundColor:'green'}}>green</button>
   <button onClick={()=> setColor('olive')} className='outline-none px-4 py-1 rounded-full text-white ' style={{backgroundColor:'olive'}}>olive</button>
   <button onClick={()=> setColor('cyan')} className='outline-none px-4 py-1 rounded-full text-white ' style={{backgroundColor:'cyan'}}>cyan</button>
   <button onClick={()=> setColor('blue')} className='outline-none px-4 py-1 rounded-full text-white ' style={{backgroundColor:'blue'}}>blue</button>
   <button onClick={()=> setColor('hotpink')} className='outline-none px-4 py-1 rounded-full text-white ' style={{backgroundColor:'hotpink'}}>hotpink</button>
   <button onClick={()=> setColor('lime')} className='outline-none px-4 py-1 rounded-full text-white ' style={{backgroundColor:'lime'}}>lime</button>
  
   </div> </div>
    </div>
    
  )
}

export default App
