import { BrowserRouter, Route, Routes } from "react-router-dom";
import { themeProps } from "./App";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

const Router = ({ theme }: themeProps) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/:coinId/*" element={<Coin theme={theme} />} />
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
