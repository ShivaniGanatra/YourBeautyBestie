import "./Shade.scss"
import "./../../functions/geGetColourDepth"

interface ShadeProps{
  color:string 
  colour_name:string
  brightness:number
}

const Shade:React.FC<ShadeProps> = ({color, colour_name, brightness }) => {

  return (
    <div className="shade">
        <div className="shade_colour" style={{backgroundColor: color}}></div>
        <div className="shade_name">{colour_name}</div>
        {/* <div className="shade_name">{brightness}</div>*/}
    </div>
    
  )
}

export default Shade