import Inclusion from "./Inclusion"

const Details = ({ship}) => {
  return (
    <div>
      {ship.map(({id,port,about,things})=>(
        <div className="detailsCardContainer">
        <h2>Day {id} : {port}</h2>
        <p><strong>About this Port : </strong>{about}</p>
        <p><strong>Some Things to See & Do : </strong></p>
        {things.map((thing) => (
          <Inclusion key={thing.id} point={thing.point}
          />
        ))}
        </div>
      ))}
    </div>
  )
}

export default Details