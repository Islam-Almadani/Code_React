import logo from './logo.svg';
import './App.css';
import Main from './component/Main';
import Header from './component/Header';
import Footer from './component/Footer';
import Time from './component/Time';
import Cat from './component/Cat';

function App() {
  return(
    <div>
      <Cat
      name = "islam"
      age = "12"
      />
    </div>
  )
}

export default App;
