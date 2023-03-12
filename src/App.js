import Header from './components/sections/Header';
import Main from './components/sections/Main';
import Footer from './components/sections/Footer';
import BackGround from './components/background/BackGround';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Main />
        <BackGround />
      </div>
      <Footer />
    </div>
  );
}

export default App;
