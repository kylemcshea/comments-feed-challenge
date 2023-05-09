import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import CommentsFeed from "./components/CommentsFeed";
import CreateComment from "./components/CreateComment";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full mx-auto p-16">
        <CreateComment />
        <CommentsFeed />
      </div>
    </QueryClientProvider>
  );
}

export default App;
