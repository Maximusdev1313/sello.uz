import { useState, useEffect } from "react";
import GetApi from "../api/getApi";
import Container from '../components/container'
const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const api = new GetApi();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await api.getApis();
      setData(result);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container title='Mahsulotlar' products={data}/>
    </div>
  );
};

export default Home