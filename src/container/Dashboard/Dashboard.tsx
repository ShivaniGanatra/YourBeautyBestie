import MakeupCard from "../../components/MakeupCard/MakeupCard"
import "./Dashboard.scss"

type DashboardProps = {
 makeupData: any[];
};


const Dashboard = ({ makeupData }: DashboardProps) => {
  return (

    <section className="Dashboard">
      {makeupData.map((makeupItem) => (
        <MakeupCard 
        key={makeupItem.id} 
        name={makeupItem.name} 
        description={makeupItem.description} 
        price={makeupItem.price} 
        image_link={makeupItem.image_link}
        brand={makeupItem.brand}
        />
      ))}

    </section>
  )
}

export default Dashboard
