import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";
import App from "./App";
function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App2() {
  const location = useLocation(); // حالا دیگر خطا نمی‌دهد

  useEffect(() => {
    console.log("URL changed:", location.pathname);
  }, [location]);
}

export default AppWrapper;
