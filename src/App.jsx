import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { navItems } from "./nav-items";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="flex min-h-screen">
          <nav className="w-64 bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">SHERA Academy</h1>
            <ul>
              {navItems.map(({ title, to, icon }) => (
                <li key={to} className="mb-2">
                  <Link to={to} className="flex items-center text-gray-700 hover:text-gray-900">
                    {icon}
                    <span className="ml-2">{title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <main className="flex-1 p-8">
            <Routes>
              {navItems.map(({ to, page }) => (
                <Route key={to} path={to} element={page} />
              ))}
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
