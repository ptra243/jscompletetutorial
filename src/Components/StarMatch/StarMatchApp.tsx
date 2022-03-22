import { FunctionComponent, useState } from "react";
import StarMatchGame from "./StarMatchGame";

interface StarMatchAppProps {
    
}
 
const StarMatchApp: FunctionComponent<StarMatchAppProps> = () => {
    const [gameId, setgameId] = useState(1);
    return ( <><StarMatchGame key={gameId} startNewGame={()=>setgameId(gameId+1)}></StarMatchGame></> );
}
 
export default StarMatchApp;
