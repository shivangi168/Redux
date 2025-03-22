import { BrowserRouter as Router, Routes ,Route } from 'react-router'
import { useState } from 'react'
import './App.css'
// import FormPage from './pages/FormPage'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import UserProfile from './components/userProfile'
import NoPageFound from './components/NoPageFound'

function App() {
  const [count, setCount] = useState(0)
  const user = "Shovangoi";

  return (
    <>
     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path='/user/:id' element={<UserProfile/>}></Route>
        <Route path="/user" element={<UserProfile />} />
        <Route path="*" element={<NoPageFound/>}></Route>
      </Routes>
     </Router>
     {/* return <Parent user={user} />; */}
     
  
     {/* <FormPage/> */}
    </>
  )
}

export default App
// function Parent({ user }) {
//   return <Child user={user} />;
// }

// function Child({ user }) {
//   return <GrandChild user={user} />;
// }

// function GrandChild({ user }) {
//   return <h2>Welcome, {user}!</h2>;
// }
