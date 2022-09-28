import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Entry } from "./page/entry/entry.page";
import { DefaultLayout } from "./layout/DefaultLayout";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}

      <DefaultLayout>
       //Dashboard
      </DefaultLayout>
    </div>
  );
}

export default App;
