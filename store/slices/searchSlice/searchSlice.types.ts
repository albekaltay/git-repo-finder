export interface SearchState {
    language: string;
    searchInput: string;
    debouncedSearch: string;
    currentPage: number;
    sortConfig: {

      field: "stars" | "forks" | "updated" | null;
      order: "asc" | "desc";
    };
    rowsPerPage: number;
  }