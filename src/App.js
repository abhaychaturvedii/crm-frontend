import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Entry } from "./page/entry/entry.page";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dasboard } from "./page/dasboard/Dasboard.page";
import { AddTicket } from "./page/new-ticket/Addticket.page";
import {TicketLists} from './page/ticket-list/TicketLists.page'
import { Ticket } from "./page/ticket/Ticket.page";


function App() {
  return (
    <div className="App">
      {/* <Entry /> */}

      <DefaultLayout>
        {/* <Dasboard/> */}
        {/* <AddTicket/> */}
        {/* <TicketLists /> */}
        <Ticket />
        
      </DefaultLayout>
    </div>
  );
}

export default App;
