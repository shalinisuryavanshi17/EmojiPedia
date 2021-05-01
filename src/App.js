import Emojis from "./components/EmojiDictionary";
import emojis from "./emojis";
function displayEmojis(emojis)
{
 return(
<dl className="dict">
<h1>{emojis.title}</h1>
<dd><h1>{emojis.emoji}</h1><p>{emojis.meaning}</p></dd>
</dl>
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
