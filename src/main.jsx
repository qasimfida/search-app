import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Search from "./screens/search.jsx";
import { ModalProvider } from "./components/modal";
import { useModal } from "./contexts/Modal";
import App from "./App";

// Create a client
const queryClient = new QueryClient();
const Button = () => {
  const { openModal } = useModal();
  return (
    <button id="searchLibBtn" onClick={() => openModal(true)}>
      HEllo
    </button>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <>
          <App/>
        </>
      </ModalProvider>
    </QueryClientProvider>
  </div>
);
