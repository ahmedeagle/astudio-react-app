import React from "react";

const Table = ({ data, columns }) => {
  return (
    <div className="overflow-x-auto border rounded-lg shadow-md bg-white p-4">
      <table className="w-full text-left border-collapse">
        <thead className="bg-yellow-400 text-black">
          <tr>
            {columns.map((col) => (
              <th key={col.accessor} className="p-3 border-b font-semibold">{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index} className="hover:bg-blue-100 transition cursor-pointer">
                {columns.map((col) => (
                  <td key={col.accessor} className="p-3 border-b text-sm">{item[col.accessor]}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="p-4 text-center text-grey">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
