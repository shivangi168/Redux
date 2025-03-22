    import { Link, Navigate } from "react-router-dom";
    import { useNavigate  } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const user = { id: 101, name: "Shivangi", age: 25 };

  const handleNavigations = () => {
    navigate("/user", { state: user });
  };

  const handleNavigation = () =>{
    navigate("/About");
  }
  const handleNavigationQuery = () =>{
    navigate(`/user?name=kll&surname=shukla`);
  }
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/user/1">Go to User 1</Link>
      <br />
      <Link to="/user/2">Go to User 2</Link>
      <button onClick={handleNavigation}>Naviagte to about</button>
      <button onClick={handleNavigations}>Naviagte to object</button>
      <button onClick={handleNavigationQuery}>Naviagte to object</button>


    </div>
  );
}


  export default Home;
  