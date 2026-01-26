import AsideShade from "../../components/AsideShade/AsideShade"
import "./Aside.scss"

type AsideProps = {
  makeupData?: any[];
};  

const Aside = ({ makeupData }: AsideProps) => {
  const shadeCounts = makeupData?.[19];

  return (
    <section className="Aside">
      <div>{shadeCounts?.product_colors?.map((color: any) => 
        <AsideShade color={color}/>)}
      </div>
    </section>
  )
}

export default Aside
