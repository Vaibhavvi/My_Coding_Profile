import React from 'react'
import Card from './components/Card'
import './App.css'
import Leetcode1 from './assets/Leetcode1.jpeg'
import Ninjas2 from './assets/Ninjas2.jpeg'
import Github from './assets/Github.jpeg'
import Dube1 from './assets/Dube1.jpg'

const App = () => {
  return (
    <>
      <h1>Coding Profile</h1>
      <hr />
      <div className='main'>
        <Card title='My Portfolio' img={Dube1} to='https://vaibhav-portfolio-liard.vercel.app/' imgStyle={{ height: '250px', width: '250px', borderRadius: '50%', }} />
        <Card title='Coding Ninjas Profile' img={Ninjas2} to='https://www.naukri.com/code360/profile/378503d7-97cb-4a57-a978-8e062869d107' imgStyle={{ height: '250px', width: '250px', borderRadius: '50%', }} />
        <Card title='Leetcode Profile' img={Leetcode1} to='https://leetcode.com/u/vaibhav_dubey_111/' imgStyle={{ height: '250px', width: '250px', borderRadius: '50%', }} />
        <Card title='Github profile' img={Github} to='https://github.com/Vaibhavvi' imgStyle={{ height: '250px', width: '250px', borderRadius: '50%', }} />
      </div>
      <div className="mt-3">
        &copy; {new Date().getFullYear()} Vaibhav Dubey ❤️. All Rights Reserved.
      </div>
    </>
  )
}

export default App
