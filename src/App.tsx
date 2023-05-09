import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className="text-3xl text-red-500 font-bold underline text-center">
        Hello world!
      </h1>
    </QueryClientProvider>
  );
}

export default App;
