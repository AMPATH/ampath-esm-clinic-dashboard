import React from "react";
import styles from "./pagination.component.css";
import Pagination from "carbon-components-react/es/components/Pagination";

interface PatientChartPaginationProps {
  items: Array<unknown>;
  pageNumber: number;
  pageSize?: number;
  onPageNumberChange?: any;
  currentPage: Array<unknown>;
}

/**
 * @param items The items to be paged.
 * @param pageNumber The number of the page to be returned as the first result element. Not zero-based!
 *                   The first page has the number 1.
 * @param pageSize The number of items per page, default pageSize 30
 * @param onPageNumberChange The function called when page Number is changed
 * @param currentPage The currentPage items to be displayed
 */

const PatientChartPagination: React.FC<PatientChartPaginationProps> = ({
  items,
  pageSize = 300,
  onPageNumberChange,
  pageNumber
}) => {

  const generatePageSizes = () => {
    const numberOfPages = Math.ceil(items?.length / pageSize);
    return [...Array(numberOfPages).keys()].map((x) => {
      return (x + 1) * pageSize;
    });
  };
  return (
    <>
      {items.length > 0 && (
        <div className={styles.paginationContainer}>
          <Pagination
            className={styles.pagination}
            page={pageNumber}
            pageSize={pageSize}
            pageSizes={generatePageSizes()}
            totalItems={items.length}
            onChange={onPageNumberChange}
            ite
          />
        </div>
      )}
    </>
  );
};

export default PatientChartPagination;
