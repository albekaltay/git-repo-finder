interface TableData {
  id: number;
  username: string;
  repoName: string;
  description: string;
  stars: string;
  forks: string;
  lastUpdate: string;
  [key: string]: string | number;
}

export interface TableProps {
  columns: Array<{
    header: string;
    accessor: keyof TableData;
    align?: "right";
    sortable?: boolean;
    sortField?: "stars" | "forks" | "updated";
  }>;
  data: TableData[];
  currentPage: number;
  totalPages: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onSort?: (field: "stars" | "forks" | "updated") => void;
  onRowsPerPageChange?: (rowsPerPage: number) => void;
  sortConfig: {
    field: "stars" | "forks" | "updated" | null;
    order: "asc" | "desc";
  };
}
