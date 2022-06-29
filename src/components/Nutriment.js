function Nutriment({type, name}) {
    return (
        <div className="nutri">
          <img src={`../assets/${type}-icon.svg`} className="nutri-img" alt="nutri-img"/>
          <div className="nutri-content">
            <p>1500KCal</p>
            <p>{name}</p>
          </div>
        </div>
    )
}

export default Nutriment