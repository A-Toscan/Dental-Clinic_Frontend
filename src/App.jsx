import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/";
import "./App.scss";
import AppRouter from "./AppRouter";

function App() {
   return (
      <>
         <BrowserRouter>
            <Header />
            <AppRouter />
            {/* Footer */}
         </BrowserRouter>
      </>
   );
}

export default App;
