import Nav from "./assets/components/Nav";
import Footer from "./assets/Components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Nav/>

      <main className="flex-grow">
        <div className="h-[500px]"></div> {/* Espaço vazio temporário */}
      </main>

      <Footer />
    </div>
  );
};

export default App;