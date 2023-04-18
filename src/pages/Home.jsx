import { Suspense } from "react";
import HomeList from "../components/HomeList/HomeList";

const Home = () => {
  return (
    <Suspense fallbackElement={<div>loading ...</div>}>
      <HomeList />
    </Suspense>
  );
};
export default Home;
