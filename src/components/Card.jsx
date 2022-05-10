import React, {useState, useEffect} from 'react'
import '../componentsCSS/Card.css'
import code from '../images/code.svg'
import fork from '../images/fork.svg'
import repository from '../images/repository.svg'

function Card(props) {
  return (
    <div className='card'>
        <div className='cardHeading'>
        {props.name}
        <a target='_blank' href={props.link}><img src={repository}/></a>
        </div>
        <div className='cardInfo'>{props.description}</div>
        <div className='cardBottom'>
          <div className='cardBottomInfo'>
          <img className='cardBottomImg' src={code}></img>
          {props.language}
          </div>
          <div className='cardBottomInfo'> 
          <img className='cardBottomImg' src={fork}></img>
          {props.fork}
          </div>
        </div>
    </div>
  )
}

export default Card