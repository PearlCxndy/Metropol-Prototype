export interface PaginationParams {
  page?: string | number;
  limit?: string | number;
}

export const getPagination = ({ page = 1, limit = 10 }: PaginationParams) => {
  const pageNum = Math.max(parseInt(page as string, 10), 1); // never below 1
  const limitNum = Math.max(parseInt(limit as string, 10), 1);

  return {
    skip: (pageNum - 1) * limitNum,
    take: limitNum,
    pageNum,
    limitNum,
  };
};

export const buildPaginationResponse = (
  pageNum: number,
  limitNum: number,
  total: number
) => ({
  page: pageNum,
  limit: limitNum,
  total,
  totalPages: Math.ceil(total / limitNum),
});
