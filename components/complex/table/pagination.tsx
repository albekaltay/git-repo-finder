import Image from "next/image";
import arrowLeft from "@/public/icons/arrow-left.svg";
import arrowRight from "@/public/icons/arrow-right.svg";
import styles from "./pagination.module.css";
import { Select } from "@/components/ui";


interface PaginationProps {
  currentPage: number;
  totalPages: number;
  rowsPerPage: number;
  onPageChange?: (page: number) => void;
  onRowsPerPageChange?: (value: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}: PaginationProps) => {
  return (
    <div className={styles.tableFooter}>
      <div className={styles.rowsPerPage}>
        <Select
          value={rowsPerPage}
          onChange={(value: number) => onRowsPerPageChange?.(value)}
          options={[10, 20, 30]}
          label="Rows per page:"
          className={styles.rowsPerPageSelect}
        />
      </div>
      <div className={styles.tableFooterPagination}>
        <span>
          Page {currentPage} of {totalPages.toLocaleString()}
        </span>
        <div className={styles.tableFooterPaginationButtonGroup}>
          <button
            className={styles.tableFooterButton}
            onClick={() => onPageChange?.(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <Image
              src={arrowLeft}
              alt="arrow left"
              className={styles.paginationIcon}
            />
          </button>
          <button
            className={styles.tableFooterButton}
            onClick={() => onPageChange?.(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <Image
              src={arrowRight}
              alt="arrow right"
              className={styles.paginationIcon}
            />
          </button>
        </div>
      </div>
    </div>
  );
}; 