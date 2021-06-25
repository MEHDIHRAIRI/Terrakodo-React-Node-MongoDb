import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import axios from "axios";
const DataTable = () => {
    
  const [selectedDate, handleDateChange] = useState(new Date());
  const [data, setData] = useState();
  const [addFlag, setAddFlag] = useState(false);
  const columns = [
    {
      title: "Title",
      field: "title",
    },
    {
      title: "Description",
      field: "description",
    },
    {
      title: "Priority",
      field: "priority",
    },
    {
      title: "date of completion",
      field: "date_completion",

    },
    {
        title: "State",
        field: "state",
        type: "combobox"
    }
  ];
  useEffect(() => {
      fetchData()
  }, [addFlag]);
  async function fetchData(){
    await axios
    .get("http://localhost:5000/Tasks")
    .then(function (response) {
      setData(response.data);
      if (data) {
        setAddFlag(false);
      }
      console.log(response.data);
    });
  }
  const deleteProduct = async (id) => {
    const uri = "http://localhost:5000/Task/Delete";
    await axios
      .get(`${uri}/${id}`)
      .then((response) => console.log(response));
    setAddFlag(true);
  };
  const addProduct = async (product) => {
    const a =await axios
      .post("http://localhost:5000/Task/Add",  product)
      .then((response) => console.log(response));
    setAddFlag(true);
    console.log("a:  ", product);
  };
  const updateProduct = async (updated) => {
    const uri = "http://localhost:5000/Task/Update";
    await axios.patch(`${uri}/${updated.id}`, updated);
    console.log("updated._id: ",updated.id);
    setAddFlag(true);
  };
  return (
    <div
      style={{
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingTop: "50px",
      }}
    >
      <br />
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Product List</h1>
      <br />
      <div>
        <MaterialTable
          title="Products List"
          data={data}
          columns={columns}
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  addProduct(newRow);
                  resolve();
                }, 2000);
              }),
            onRowDelete: (selectedRow) =>
              new Promise((resolve, reject) => {
                deleteProduct(selectedRow.id);
                resolve();
              }),
            onRowUpdate: (updatedRow, oldRow) =>
              new Promise((resolve, reject) => {
                updateProduct(updatedRow);
                resolve();
              }),
          }}
          options={{
            actionsColumnIndex: -1,
            exportButton: true,
          }}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default DataTable;
