import Front from "./components/Front";
import { useGetIpQuery } from "./services/ip";

const App = () => {
  const { data, error, isLoading } = useGetIpQuery();

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return data?.ip ? <Front ip={data.ip} /> : <Front ip="8.8.8.8" />;
};

export default App;
