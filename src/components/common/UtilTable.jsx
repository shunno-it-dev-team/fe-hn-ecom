import PropTypes from "prop-types";
import { cn } from "../../helpers/dynamicClassName";

const UtilTable = ({ columns, data, border }) => {
  return (
    <div
      className={cn("overflow-x-auto rounded-md min-h-96    ", {
        border: border,
      })}
    >
      <table className="table w-full">
        {/* Table Head */}
        <thead>
          <tr className="font-bold">
            {columns.map((col, index) => (
              <th key={index} style={{ width: col.width }}>
                {col.Header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex} style={{ width: col.width }}>
                  {col.Cell ? col.Cell(row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

        {/* Optional Table Foot */}
        <tfoot>
          <tr>
            {columns.map((col, index) => (
              <th key={index} style={{ width: col.width }}>
                {col.Header}
              </th>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

UtilTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  border: PropTypes.bool,
};

export default UtilTable;
