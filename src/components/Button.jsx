import React from 'react'
import { Link } from 'react-router-dom'


const Button = ({content, link, BtnStyle, image}) => {
  return (
    <div className={`bg-[#FFF0CE] h-12 w-32 m-2 px-5 rounded-[50px] capitalize flex items-center justify-center font-semibold cursor-pointer ${BtnStyle}`}>
        <Link to={link}>{content}</Link>
        <img src={image} alt="" />
    </div>
  )
}

export default Button
