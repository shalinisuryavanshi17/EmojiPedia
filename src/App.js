import emojis from "./emojis";
function displayEmojis(emojis)
{
 return(
   <div className="box"><dl className="dict">
   <dt><h1 id="title">{emojis.title}</h1></dt>
   <dd><h1 className="emoji">{emojis.emoji}</h1><p className="meaning">{emojis.meaning}</p></dd>
   </dl></div>

 )
}
export default function App() {

  return (
    <div className="App">
      <h1>Welcome To , My EmojiPedia 😊</h1>
      {emojis.map(displayEmojis)}
       </div>
  );
}
