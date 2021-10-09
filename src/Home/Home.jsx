import Featured from "../components/featured/Featured";
import Navbar from "../components/Navbar/Navbar";
import "./home.scss";
import List from "../components/list/List";

function Home() {
  return (
    <div className={"home"}>
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}

export default Home;
