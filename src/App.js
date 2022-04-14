import { GlobalStyles } from "./constans/GlobalStyles";
import { Wrapper } from "./App.styles";
import { CommentsList } from "./components/CommentsList/CommentsList";

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <CommentsList />
    </Wrapper>
  );
}

export default App;
