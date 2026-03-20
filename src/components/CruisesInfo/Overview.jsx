const Overview = ({title,date,ship,price}) => {
  return (
    <div className="overview">
      <h2 className="title">{title}</h2>
      <p>{date}</p>
      <p>Ship:{ship}</p>
      <p>Starting from <span>${price}USD</span></p>
      <p>Price includes Taxes, Fees & Port Expenses.</p>
    </div>
  )
}

export default Overview