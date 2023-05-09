import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import CommentsFeed from "./components/CommentsFeed";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CommentsFeed />
    </QueryClientProvider>
  );
}

export default App;
