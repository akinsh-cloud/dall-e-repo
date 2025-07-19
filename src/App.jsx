import React from 'react'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import logo from './assets/logo.svg'
import CreatePost from './pages/CreatePost'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
        <header className=' flex justify-between items-center w-full  border-b border-b-gray-200 px-3 py-4'>
           <Link to="/">
              <img src={logo} alt='logo' className='object-contain w-28'/>
           </Link>
           <Link to="/create-post" className='bg-indigo-500 px-2 py-1 text-white rounded-md'>
           Create
           </Link>
        </header>

        <main className='mt-3 px-2 w-full min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create-post' element={<CreatePost/>}></Route>
         

        </Routes>
        </main>
    
    
    </BrowserRouter>
  )
}

export default App