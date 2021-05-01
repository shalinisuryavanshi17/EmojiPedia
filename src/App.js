import Emojis from "./components/EmojiDictionary";
import emojis from "./emojis";
function displayEmojis(emojis)
{
 return(
   <Emojis key={emojis.id} id={emojis.id} title={emojis.title} emoji={emojis.emoji} meaning={emojis.meaning}/>
 )
}
export default function App() {

  return (
    <div className="App">
       <div><h1 className="heading">Welcome To , My EmojiPedia 😊</h1></div>
      <div className="container" >{emojis.map(displayEmojis)}</div>
     
      
       </div>
  );
}
