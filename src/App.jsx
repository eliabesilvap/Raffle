import { BrowserRouter } from 'react-router-dom';
import Router from './Router';  
import Nav from "./assets/Components/Nav";  
import Footer from './assets/Components/Footer';


const App = () => {
  return (
    <BrowserRouter>
      {/* Envolve tudo dentro de uma div flexível */}
      <div className="flex flex-col min-h-screen"> 
        <Nav />
        <main className="flex-1"> {/* Isso faz o conteúdo empurrar o Footer para baixo */}
          <Router />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;