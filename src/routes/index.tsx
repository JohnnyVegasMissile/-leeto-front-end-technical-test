import { BrowserRouter, Routes, Route } from "react-router";
import GiftCardList from "../pages/GiftCardList";
import GiftCardDetails from "../pages/GiftCardDetails";
import { Navigate } from "react-router";

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/gift-cards" element={<GiftCardList />} />
      <Route path="/gift-cards/:id" element={<GiftCardDetails />} />
      <Route path="*" element={<Navigate to="/gift-cards" />} />
    </Routes>
  </BrowserRouter>
);

export default Routing;
