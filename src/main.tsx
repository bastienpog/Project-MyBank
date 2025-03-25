import { MainLayout } from "@/layouts/main-layout";
import { Index } from "@/pages/index";
import { PageExpense } from "@/pages/PageExpense";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Index />} />
          <Route path="/expense" element={<PageExpense />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
