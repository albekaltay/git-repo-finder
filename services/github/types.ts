export interface Repository {
  id: number;
  owner: {
    login: string;
  };
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export interface SearchResponse {
  items: Repository[];
  total_count: number;
}

export interface SortParams {
  q: string;
  page: number;
  per_page: number;
  sort?: 'stars' | 'forks' | 'updated';
  order?: 'desc' | 'asc';
} 