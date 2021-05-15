/* eslint-disable no-unused-vars */
import { DataGrid } from "@material-ui/data-grid";
import * as React from "react";

import PopUpList from "../PopUpList/PopUpList";

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "name", headerName: "Nome", width: 150 },
  { field: "email", headerName: "Email", width: 180 },
  {
    field: "QtdQuizzes",
    headerName: "N° de Quizzes",
    type: "number",
    width: 150,
  },
  {
    field: "QtdResponses",
    headerName: "N° de Respondidos",
    type: "number",
    width: 180,
  },
];

export default function Table({ users }) {
  const [usersTable, setUsersTable] = React.useState([]);
  const [userData, setUserData] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handlePopUp = (data) => {
    setUserData(data);
    handleOpen();
  };

  return (
    <div style={{ height: 600, width: "100%" }}>
      <PopUpList mustOpen={open} handleOpen={handleOpen} userData={userData} />
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={9}
        checkboxSelection
        onRowClick={(e) => {
          handlePopUp(e.row);
        }}
      />
    </div>
  );
}
