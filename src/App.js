import { Outlet} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import appstore from "./utils/store";

function App() {
  return (
    <div className="App">
      <Provider store={appstore}>
        <Header/>
        <Outlet/>
      </Provider>
    </div>
  );
}

export default App;
