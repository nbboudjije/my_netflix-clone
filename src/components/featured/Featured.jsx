import { PlayArrow } from "@material-ui/icons";
import "./featured.scss";

function Featured() {
  return (
    <div className={"featured"}>
      <img
        src="https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="info">
        <img src="" alt="" />
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deserunt
          est laborum nihil cumque fugit hic delectus reprehenderit id ad
          consequatur, sunt corrupti. Dignissimos dolorem odio praesentium
          necessitatibus sapiente fugiat.
        </span>
        <div className="button">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <span>More!</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
