import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "./components";
function App() {
  return (
    <div className="dark:text-gray-100 dark:bg-gray-900 min-h-screen flex flex-col">
      <nav className="py-4">
        <NavBar />
      </nav>
      <main className="flex-grow mx-auto">
        <Outlet />
      </main>
      <footer className="py-4">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
