import Party from "../Party/Party";
import Export from "../Export/Export.jsx";
import Search from "../Search/Search";
import Table from "../Table/Table.jsx";
import "./Content.css";

const Content = ({ toggle }) => (
  <div className="content-container">
    <div className="metal-toggle-container">
      <div className="metal-toggle">
        <div className="metal">Gold</div>
        <div className="metal">Silver</div>
        <div className="metal active-metal ">Both</div>
      </div>
    </div>
    <div className="party-export-container">
      <Party toggle={toggle} />
      <Export />
    </div>
    <Search />
    <Table />
  </div>
);

export default Content;
