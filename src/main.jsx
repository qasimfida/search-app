import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Search from './screens/search.jsx';
import { ModalProvider } from './components/modal';

// Create a client
const queryClient = new QueryClient()

function initSearchLib(rootElement = document.getElementById('searchLib')) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <ModalProvider>
            <Search />
          </ModalProvider>
      </QueryClientProvider>
    </React.StrictMode>,
  )
}

// if in development mode, render immediately
if (import.meta.env.DEV) {
  initSearchLib()
}

window.initSearchLib = initSearchLib;

