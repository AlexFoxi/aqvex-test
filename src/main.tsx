import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { ProductPage } from '@/pages/ProductPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Header />
      <ProductPage />
      <Footer />
    </QueryClientProvider>
  </StrictMode>,
);
