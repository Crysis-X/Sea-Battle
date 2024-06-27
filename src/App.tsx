import useSettings from "./store/useSettings";
import "./App.css";

const App = () => {
  const page = useSettings((state) => state.currentPage);
  return <>{page}</>;
};

export default App;
