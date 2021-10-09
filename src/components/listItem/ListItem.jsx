import {
  PlayArrow,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import "./listitem.scss";

function ListItem({ index }) {
  const trailer = "https://vimeo.com/266273411";
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="listitem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-92-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABc9OniU9HtoFnCc1UBhajEhTt6jf-nbpZDbt7xs6tytqBCNZHb04G0uDonqxEsZTzbQNbLf-xCKSLqXcmBR2wn91R95V.jpg?r=ff8"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow />
              <ThumbUpAltOutlined />
              <ThumbDownOutlined />
            </div>
            <div className="itemInfoTop">
              <span>2HOUR 23Min</span>
              <span className="limit">12+</span>
              <span>2018</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              nulla saepe eius repudiandae earum numquam eum consectetur
              corrupti et.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;
