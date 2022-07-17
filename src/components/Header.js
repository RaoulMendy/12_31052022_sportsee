function Header({userInfos}) {

 if (userInfos) {
  return (

    <div className="dashboard__header">
      <h1>
        Bonjour <span className="user">{userInfos.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  ) }
  else {
    return (
      <div>Loading</div>
    )
  }
}

export default Header
