import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

import './App.css';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container__page">
      <Header />
      <TodoForm />
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
