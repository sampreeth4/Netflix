import React from 'react'
import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,} from "@material-ui/icons";
import {useState,useRef} from "react";
import "./List.scss";
import Listitem from '../listItem/Listitem';
// import Watch from '../../pages/watch/Watch';
const List = () => {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const listRef = useRef();
    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
          setSlideNumber(slideNumber - 1);
          listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 5) {
          setSlideNumber(slideNumber + 1);
          listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    console.log(listRef.current)
    }
  return (
    <div className='list'>
        <span className="listTitle">Continue To Watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined 
                className='slideArrow left'
                onClick = {() => handleClick("left")}
                style={{display: !isMoved && "none"}}
            />
            <div className="items" ref={listRef}>
                <Listitem index={0}/>
                <Listitem index={1}/>
                <Listitem index={2}/>
                <Listitem index={3}/>
                <Listitem index={4}/>
                <Listitem index={5}/>
                <Listitem index={6}/>
                <Listitem index={7}/>
                <Listitem index={8}/>
                <Listitem index={9}/>
            </div>
            <ArrowForwardIosOutlined 
                className='slideArrow right'
                onClick = {() => handleClick("right")}
            />
        </div>

    </div>
  )
}

export default List
