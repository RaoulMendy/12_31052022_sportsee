
import Dashboard from "../Dashboard";
import { useParams } from "react-router-dom";

function Home() {

  const {id} = useParams();
  return (
    <div className="App">

      <Dashboard id={id} />
    </div>
  );
}

export default Home;
