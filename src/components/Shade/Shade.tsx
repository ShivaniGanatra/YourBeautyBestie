import "./Shade.scss"

interface ShadeProps{
  color:string 
  colour_name:string
}

const Shade:React.FC<ShadeProps> = ({color, colour_name }) => {
  return (
    <div className="shade">
        <div className="shade_colour" style={{backgroundColor: color}}></div>
        <div className="shade_name">{colour_name}</div>
    </div>
    
  )
}

export default Shade