import React, { useState } from 'react'
import './Listitem.scss'
import { PlayArrow , Add,ThumbUpAltOutlined,ThumbDownAltOutlined} from '@material-ui/icons'
const Listitem = ({index}) => {
  const [isHovered,setIsHovered] = useState(false);
  const trailer =  "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div className='lists'
      style={{left: isHovered && index*255-50 + index * 2.5}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" alt="" />
      {isHovered && (
        <>
        <video src={trailer} autoPlay={true} loop/>
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className='icon'/>
            <Add className='icon'/>
            <ThumbUpAltOutlined className='icon'/>
            <ThumbDownAltOutlined className='icon'/>
          </div>
          <div className="about">
            <span>1 hour 14 mins</span>
            <span className='limit'>18+</span>
            <span>2013</span>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut  laboriosam ipsam molestias animi vel dolores cumque facere odit.  
          </div>
          <div className="genre">Action</div>
        </div>
        </>
      )}
    </div>
  )
}

export default Listitem
