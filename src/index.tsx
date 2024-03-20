import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import ErrorBoundary from './components/common/ErrorBoundaries';
import ToastWrapper from './provider/toastWrapper';
import { AuthProvider } from 'components/Auth/AuthContext';

// to prevent re fetching if change focus, we dont need to do that i think
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <ErrorBoundary fallback={<div>Something Went Wrong</div>}>
      <ToastWrapper>
        <React.StrictMode>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <App />
            </AuthProvider>
          </QueryClientProvider>
        </React.StrictMode>
      </ToastWrapper>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);


reportWebVitals();
