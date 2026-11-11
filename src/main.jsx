import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from '../store/store.js';

import HomePage from '../pages/homepage.jsx';
import Travels from '../pages/travels.jsx'; 
import TravelPage from '../pages/travelpage.jsx';

import ScrollToTop from '../pages/autoScrollToTop.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
       <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/travels" element={<Travels />} />
            <Route path="/travelpage" element={<TravelPage />} />
          </Routes>
        </BrowserRouter>
    </Provider>
  </StrictMode>
);
