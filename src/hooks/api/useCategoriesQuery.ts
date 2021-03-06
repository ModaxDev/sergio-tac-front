import { useQuery } from 'react-query';

import fetchCategory from '@/api/Category';

export const useCategoriesQuery = (id?: number | undefined) =>
  useQuery(['categories'], () => fetchCategory({ id }));
