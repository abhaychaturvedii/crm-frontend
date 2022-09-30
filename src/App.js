import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Entry } from "./page/entry/entry.page";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dasboard } from "./page/dasboard/Dasboard.page";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}

      <DefaultLayout>
        <Dasboard/>
      </DefaultLayout>
    </div>
  );
}

export default App;
