import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/products.api';

export const useCards = () => {
  return useQuery({
    queryKey: ['products-all'],
    queryFn: () => fetchProducts(),
    staleTime: 1000 * 60 * 5,
  });
};
