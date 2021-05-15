import { DataGrid } from "@material-ui/data-grid";
import * as React from "react";

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "name", headerName: "Nome", width: 150 },
  { field: "email", headerName: "Email", width: 180 },
  {
    field: "quizzes",
    headerName: "N° de Quizzes",
    type: "number",
    width: 150,
  },
  {
    field: "responses",
    headerName: "N° de Respondidos",
    type: "number",
    width: 180,
  },
];

/* const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
]; */

export default function Table({ users }) {
  const [usersTable, setUsersTable] = React.useState([]);

  React.useEffect(() => {
    if (users) {
      const testeTable = users.map((user, index) => {
        return { id: user._id, name: user.name, email: user.email };
      });
      setUsersTable(testeTable);
    }
  }, [users]);

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={usersTable}
        columns={columns}
        pageSize={9}
        checkboxSelection
      />
    </div>
  );
}
