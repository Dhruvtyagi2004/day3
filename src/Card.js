import React from 'react'
import {FaInstagram} from 'react-icons/fa'

 const Card = () => {
  return (
    <div className='cardbox'>
        <FaInstagram size={32}/>
        <h1 className='head'>Instagram</h1>
        <p className='content'>Instagram is a free photo and video sharing app available on iPhone and Android. People can upload photos or videos to our service and share them with their followers or with a select group of friends. They can also view, comment and like posts shared by their friends on Instagram.</p>
        <button className='btn'>Read more!</button>
    </div>
  )
}
export default Card