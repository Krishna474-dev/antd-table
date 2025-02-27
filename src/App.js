import "./App.css";
import { BasicTable } from "./Components/BasicTable";
import { FilteringTable } from "./Components/FilteringTable";
import { PaginationTable } from "./Components/PaginationTable";
import { SortingTable } from "./Components/SortingTable";

function App() {
  return (
    <div className='App'>
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      <PaginationTable />
    </div>
  );
}

export default App;
