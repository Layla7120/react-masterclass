import { BrowserRouter, Route, Routes } from "react-router-dom";
import { themeProps } from "./App";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

const Router = ({ theme }: themeProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Coins />} />
        <Route path="/:coinId/*" element={<Coin theme={theme} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
