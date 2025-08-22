import './assets/styles/main.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { ErrorBoundary } from 'react-error-boundary';

import Router from './routes/router';

import { MantineProvider } from '@mantine/core';

import { getApiError } from './common/utils';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';

window.addEventListener('vite:preloadError', () => {
  window.location.reload();
});

// app.tsx yoki index.tsx ning eng boshida qo‘ying
const originalConsoleError = console.error;

console.error = function (...args) {
  // Avval odatdagidek console-ga yozadi
  originalConsoleError.apply(console, args);

  // Keyin alert chiqaradi
  alert(args.map(a => (typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a))).join('\n'));
};

const showApiError = (error: any) => {
  const data = getApiError(error);

  if (data.validations.length > 0) {
    data.validations.forEach((item: string) => {
      console.error(item);
    });
    return;
  }

  data.message && console.error(data.message);
};

const onQueryError = (error: any, query: any) => {
  if (query.options.meta?.customErrorHandling) return;

  showApiError(error);
};

const onMutationError = (error: any, _variables: any, _context: any, mutation: any) => {
  if (mutation.options.meta?.customErrorHandling) return;

  if (['ECONNABORTED', 'ERR_NETWORK'].includes(error?.code)) {
    if (!navigator.onLine) {
      console.error('Internetga ulanmagansiz!');
      return;
    }

    console.error("Serverga bog'lanib bo'lmayapti!");
    return;
  }

  showApiError(error);
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  },

  mutationCache: new MutationCache({
    onError: onMutationError
  }),
  queryCache: new QueryCache({
    onError: onQueryError
  })
});

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <ModalsProvider>
          <Notifications />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ModalsProvider>
      </MantineProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);
