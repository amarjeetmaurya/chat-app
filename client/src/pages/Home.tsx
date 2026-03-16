import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Home = () => {
  const [user, setUser] = useState();

  const fetchData = async () => {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    console.log(data)
    setUser(data.sucess);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>are lol!!!</h2>
      <p>{user}</p>
    </div>
  );
};

export default Home;
