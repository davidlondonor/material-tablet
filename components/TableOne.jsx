import React, { useState } from "react";
import MaterialTable from "material-table";
import Head from "next/head";

const TableOne = () => {
  const [tableData, setTableData] = useState([
    {
      name: "David",
      email: "correo@correo.com",
      phone: 3434343,
      age: 30,
      gender: "M",
      city: "Medellín",
      fee: 3498,
    },
    {
      name: "Pablo",
      email: "correo@correo.com",
      phone: 3434343,
      age: 30,
      gender: "M",
      city: "Medellín",
      fee: 20398,
    },
    {
      name: "Judith",
      email: "correo@correo.com",
      phone: 3434343,
      age: null,
      gender: "F",
      city: "Medellín",
      fee: 203498,
    },
    {
      name: "Natalia",
      email: "correo@correo.com",
      phone: 3434343,
      age: 30,
      gender: "F",
      city: "Medellín",
      fee: 203498,
    },
    {
      name: "Judith",
      email: "correo@correo.com",
      phone: 3434343,
      age: null,
      gender: "F",
      city: "Medellín",
      fee: 203498,
    },
    {
      name: "Natalia",
      email: "correo@correo.com",
      phone: 3434343,
      age: 30,
      gender: "F",
      city: "Medellín",
      fee: 203498,
    },
    {
      name: "Judith",
      email: "correo@correo.com",
      phone: 3434343,
      age: null,
      gender: "F",
      city: "Medellín",
      fee: 203498,
    },
    {
      name: "Natalia",
      email: "correo@correo.com",
      phone: 3434343,
      age: 30,
      gender: "F",
      city: "Medellín",
      fee: 203498,
    },
  ]);
  const columns = [
    { title: "Name", field: "name", sorting: false, filtering: false },
    { title: "Email", field: "email", filterPlaceholder: "Filtrar el correo" },
    {
      title: "Phone Number",
      field: "phone",
      align: "right",
      filterPlaceholder: "Filtrar numero",
    },
    {
      title: "Age",
      field: "age",
      emptyValue: () => <em>null</em>,
      defaultSort: "asc",
      filterPlaceholder: "Filtrar edad",
    },
    {
      title: "Gender",
      field: "gender",
      lookup: { M: "male", F: "Female" },
      filterPlaceholder: "Filtrar mail",
      exports: false,
    },
    { title: "City", field: "city", filterPlaceholder: "Filtrar Ciudad" },
    {
      title: "School Fee",
      field: "fee",
      type: "currency",
      currencySetting: { currencyCode: "COP", minimumFractionDigits: 1 },
      filterPlaceholder: "Filtrar escuela",
    },
  ];

  {
    /* sorting es para evitar flechita en titulos */
    /* search es para evitar buscar */
    // searchFieldAlignment: left/light alinear campo search
    // searchAutoFocus: true o False
  }
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <h1>Tabla de ejemplo</h1>
      <MaterialTable
        title="Título de la Tabla"
        columns={columns}
        data={tableData}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {}),
        }}
        options={{
          sorting: true,
          filtering: true,
          paging: true,
          pageSizeOptions: [5, 20, 35, 55, 80],
          pageSize: 5,
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          paginationPosition: "both",
          exportButton: true,
          exportAllData: true,
          addRowPosition: "first",
          actionsCellStyle: -1,
        }}
      />
    </>
  );
};

export default TableOne;
