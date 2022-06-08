import react, {useState} from "react";
import video from "../data/video.js";
import CommentList from "./CommentList.js";

function App() {
  // console.log("Here's your data:", video);
  const [isHide, setIsHide] = useState(true) 

  function handleHideClick(event){
    setIsHide(!isHide)

  }

  const hideComments = isHide ? "Hide Comments" : "Show Comments"

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <p>{video.views} | {video.createdAt}</p>
      <button name="upvotes">{video.upvotes}👍</button>
      <button name="upvotes">{video.downvotes}👎</button>
      <div>
        <button onClick={handleHideClick}>{isHide ? "Hide Comments" : "Show Comments"}</button>
      </div>
      <hr></hr>
      <div className={hideComments}>
      <CommentList />
      </div>
    </div>
  );
}

export default App;
