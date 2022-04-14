import { GlobalStyles } from "./constans/GlobalStyles";
import { Wrapper } from "./App.styles";
import { CommentsList } from "./components/CommentsList/CommentsList";

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <h1>Blog</h1>
      <CommentsList />
    </Wrapper>
  );
}

export default App;
