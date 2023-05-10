import { QueryClient, QueryClientProvider } from "react-query";
import CommentsFeed from "./components/CommentsFeed";
import CreateComment from "./components/CreateComment";
import TextAnimation from "./components/TextAnimation";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TextAnimation />
      <div className="w-full mx-auto p-16 mt-8 md:mt-12 sm:mt-16">
        <CreateComment />
        <CommentsFeed />
      </div>
    </QueryClientProvider>
  );
}

export default App;
