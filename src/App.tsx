import './App.css';
import { CommentBox } from './components/Comment-Box/CommentBox';
import { CommentThread } from './components/Comment-Thread/CommentThread';

function App() {
  return (
    <div className="App">
      <CommentBox />
      <CommentThread />
    </div>
  );
}

export default App;
