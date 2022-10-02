import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Entry } from "./page/entry/entry.page";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dasboard } from "./page/dasboard/Dasboard.page";
import { AddTicket } from "./page/new-ticket/Addticket.page";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}

      <DefaultLayout>
        {/* <Dasboard/> */}
        <AddTicket/>
      </DefaultLayout>
    </div>
  );
}

export default App;
