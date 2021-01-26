import "./styles.css";
import Table from "./Components/Table/Table";
import Search from "./Components/Searchbar";
import { Provider } from "react-redux";
import store from "./Store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Pagination</h1>
        <Search />
        <Table />
      </div>
    </Provider>
  );
}
