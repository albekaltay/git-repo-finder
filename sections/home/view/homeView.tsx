"use client";

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { 
  setLanguage, 
  setSearchInput, 
  setDebouncedSearch, 
  setCurrentPage, 
  setSortConfig,
  setRowsPerPage
} from '@/store/slices/searchSlice/searchSlice';
import { Table } from "@/components/complex";
import { Input } from "@/components/ui";
import styles from "./homeView.module.css";
import { LanguageSelector } from "../homeComponents/languageSelector";
import { useSearchRepositoriesQuery } from "@/services/github/githubApi";
import { useCallback } from "react";
import { debounce } from "lodash";
import resetIcon from "@/public/icons/restore.svg";
import Image from "next/image";
import { TableSkeleton } from "@/components/complex";

export const HomeView = () => {
  const dispatch = useDispatch();
  const { 
    language, 
    searchInput, 
    debouncedSearch, 
    currentPage, 
    sortConfig,
    rowsPerPage
  } = useSelector((state: RootState) => state.search);


  const { data, isLoading, isFetching, error } = useSearchRepositoriesQuery({
    q: `${debouncedSearch}${language ? ` language:${language}` : ""}`,
    page: currentPage,
    per_page: rowsPerPage,
    sort: sortConfig.field || undefined,
    order: sortConfig.order,
  });

  const columns = [
    { header: "Repository ID", accessor: "id" },
    { header: "Username", accessor: "username" },
    { header: "Repository Name", accessor: "repoName" },
    { header: "Description", accessor: "description" },
    { 
      header: "Stars", 
      accessor: "stars", 
      align: "right" as const,
      sortable: true,
      sortField: 'stars' as const
    },
    { 
      header: "Forks", 
      accessor: "forks", 
      align: "right" as const,
      sortable: true,
      sortField: 'forks' as const
    },
    { 
      header: "Last Update", 
      accessor: "lastUpdate", 
      align: "right" as const,
      sortable: true,
      sortField: 'updated' as const
    },
  ];

  const formattedData =
    data?.items.map((repo) => ({
      id: repo.id,
      username: repo.owner.login,
      repoName: repo.name,
      description: repo.description,
      stars: repo.stargazers_count.toLocaleString(),
      forks: repo.forks_count.toLocaleString(),
      lastUpdate: new Date(repo.updated_at).toLocaleDateString(),
    })) || [];

  const totalPages = Math.ceil((data?.total_count || 0) / rowsPerPage);

  const debouncedSetSearch = useCallback(
    debounce((value: string) => {
      dispatch(setDebouncedSearch(value));
      dispatch(setCurrentPage(1));
    }, 800),
    []
  );

  const handleSearch = (value: string) => {
    dispatch(setSearchInput(value));
    debouncedSetSearch(value);
    dispatch(setCurrentPage(1));
  };

  const handleSort = (field: 'stars' | 'forks' | 'updated') => {
    const newOrder = 
      sortConfig.field === field && sortConfig.order === 'desc' 
        ? 'asc' 
        : 'desc';
    
    dispatch(setSortConfig({ 
      field, 
      order: newOrder 
    }));
    dispatch(setCurrentPage(1));
  };

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const handleLanguageChange = (language: string) => {
    dispatch(setLanguage(language));
    dispatch(setCurrentPage(1));
  };

  const handleRowsPerPageChange = (newRowsPerPage: number) => {
    console.log("newRowsPerPage", newRowsPerPage);
    dispatch(setRowsPerPage(newRowsPerPage));
    dispatch(setCurrentPage(1));
  };


  const handleReset = () => {
    dispatch(setSearchInput(''));
    dispatch(setDebouncedSearch(''));
    dispatch(setLanguage('javascript'));
    dispatch(setCurrentPage(1));
    dispatch(setSortConfig({ field: null, order: 'desc' }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <Input
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
          value={searchInput}
        />
        <div className={styles.filterButtons}> 
          <LanguageSelector onLanguageChange={handleLanguageChange} value={language} />
          <button 
            onClick={handleReset}
            className={styles.resetButton}
          >
            <Image src={resetIcon} alt="Reset" width={24} height={24} className={styles.resetIcon} />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {(isLoading || isFetching) ? (
        <TableSkeleton />
      ) : error ? (
        <div className={styles.errorMessage}>Error loading repositories</div>
      ) : (
        <Table
          columns={columns}
          data={formattedData}
          currentPage={currentPage}
          totalPages={totalPages}
          rowsPerPage={rowsPerPage}
          onPageChange={handlePageChange}
          sortConfig={sortConfig}
          onSort={handleSort}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      )}
    </div>
  );
};
