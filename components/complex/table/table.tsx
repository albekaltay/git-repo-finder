import Image from "next/image";
import styles from "./table.module.css";
import { TableProps } from "./type";
import arrowUp from "@/public/icons/chevron-up.svg";
import { Pagination } from "./pagination";

export const Table = ({
  columns,
  data,
  currentPage,
  totalPages,
  rowsPerPage,
  onPageChange,
  onSort,
  onRowsPerPageChange,
  sortConfig,
}: TableProps) => {
  const handleSort = (sortField: string) => {
    onSort?.(sortField as 'stars' | 'forks' | 'updated');
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className={`${styles.tableHeader} ${
                  column.align === "right" ? styles.tableHeaderRight : ""
                } ${column.sortable ? styles.sortable : ""}`}
                onClick={() => column.sortable && column.sortField && handleSort(column.sortField)}
              >
                {column.sortable ? (
                  <div className={styles.headerContent}>
                  <span className={`${styles.sortIcon} ${
                    sortConfig.field === column.sortField 
                      ? sortConfig.order === 'asc' ? styles.asc : styles.desc
                      : ''
                  }`}
                    data-active={sortConfig.field === column.sortField}
                  >
                    <Image src={arrowUp} alt="arrow up" className={styles.sortIconImage} />
                  </span>
                  <span>{column.header}</span>
                  </div>
                ) : (
                  column.header
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? data.map((row, rowIndex) => (
            <tr key={rowIndex} className={styles.tableRow}>
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`${styles.tableCell} ${
                    column.align === "right" ? styles.tableCellRight : ""
                  }`}
                >
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          )) : (
            <tr>
              <td colSpan={columns.length} className={styles.tableCell}>
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </div>
  );
};
