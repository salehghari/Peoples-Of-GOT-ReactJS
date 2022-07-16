export default function Cards(props) {
  return (
    <div className="Cards">
      {
        props.data[props.index].map((house, index) => (
          <div className="cards--people" key={index}>
            {house.people.map((person, i) => (
              <div className="cards--person" key={i}>
                <div className="cards--main-content">
                  <img src={person.image} alt={`${person.name}`} />
                  <h2>{person.name}</h2>
                </div>
                <p>{person.description}</p>
              </div>
            ))}
          </div>
        ))
      }
    </div>
  );
}