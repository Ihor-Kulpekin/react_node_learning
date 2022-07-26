import Header from "./components/header/header.component";
import MainPage from "./page/main-page/main-page";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainPage/>
      </Provider>
    </div>
  );
}

export default App;
