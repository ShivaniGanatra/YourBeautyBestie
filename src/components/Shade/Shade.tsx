import "./Shade.scss"
import "./../../functions/geGetColourDepth"
import { getBrightness } from "./../../functions/geGetColourDepth"

interface ShadeProps{
  color:string 
  colour_name:string
}

const Shade:React.FC<ShadeProps> = ({color, colour_name }) => {

    const shadeBrightness = getBrightness(color).toString().slice(0,3);            

  return (
    <div className="shade">
        <div className="shade_colour" style={{backgroundColor: color}}></div>
        <div className="shade_name">{colour_name}</div>
        <div className="shade_name">{shadeBrightness}</div>
    </div>
    
  )
}

export default Shade