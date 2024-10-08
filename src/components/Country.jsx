function Country(props) {
  return (
    <div className="country">
      <div className="header">
        <h2>{props.country.name}</h2>
        <div className="basket" onClick={props.onDelete}>
          🗑️
        </div>
      </div>
      <div className="medals">Gold medals: {props.country.gold}</div>
    </div>
  );
}

export default Country;
