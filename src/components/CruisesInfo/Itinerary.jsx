const Itinerary = ({ship}) => {
  return (
    <div className="itinerary">
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Port / Location</th>
            <th>Timing</th>
          </tr>
        </thead>
        <tbody>
          {ship.map(({ id, port, timing }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{port}</td>
              <td>{timing}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Itinerary