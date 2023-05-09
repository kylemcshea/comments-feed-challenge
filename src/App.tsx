import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import CommentsFeed from "./components/CommentsFeed";
import CreateComment from "./components/CreateComment";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CreateComment />
      <CommentsFeed />
    </QueryClientProvider>
  );
}

export default App;
