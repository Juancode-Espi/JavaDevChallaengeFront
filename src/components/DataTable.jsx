import React from 'react';

const DataTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Salario</th>
          <th>Edad</th>
          <th>Salario Anual</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.salary}</td>
            <td>{item.age}</td>
            <td>{item.anualSalary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;