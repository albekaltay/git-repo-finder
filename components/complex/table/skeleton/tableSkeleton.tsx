"use client";

import styles from "./tableSkeleton.module.css";

export const TableSkeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.filterSkeleton}>
        <div className={styles.searchSkeleton} />
        <div className={styles.filterButtonsSkeleton}>
          <div className={styles.languageSelectorSkeleton}>
            <div className={styles.radioSkeleton} />
            <div className={styles.radioSkeleton} />
            <div className={styles.radioSkeleton} />
          </div>
          <div className={styles.resetButtonSkeleton} />
        </div>
      </div>

      <div className={styles.tableSkeleton}>
        <div className={styles.tableHeader}>
          {Array(7).fill(0).map((_, index) => (
            <div key={index} className={styles.headerCell} />
          ))}
        </div>

        <div className={styles.tableBody}>
          {Array(10).fill(0).map((_, rowIndex) => (
            <div key={rowIndex} className={styles.tableRow}>
              {Array(7).fill(0).map((_, cellIndex) => (
                <div 
                  key={cellIndex} 
                  className={`${styles.tableCell} ${
                    cellIndex === 3 ? styles.descriptionCell : ''
                  }`} 
                />
              ))}
            </div>
          ))}
        </div>

        <div className={styles.tableFooter}>
          <div className={styles.rowsPerPageSkeleton} />
          <div className={styles.paginationSkeleton}>
            <div className={styles.pageInfoSkeleton} />
            <div className={styles.pageButtonsSkeleton}>
              <div className={styles.pageButtonSkeleton} />
              <div className={styles.pageButtonSkeleton} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 