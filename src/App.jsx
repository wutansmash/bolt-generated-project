import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import './App.css';
    import Home from './pages/Home';
    import Menu from './pages/Menu';
    import About from './pages/About';
    import Contact from './pages/Contact';

    function App() {
      return (
        &lt;BrowserRouter&gt;
          &lt;Routes&gt;
            &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
            &lt;Route path="/menu" element={&lt;Menu /&gt;} /&gt;
            &lt;Route path="/about" element={&lt;About /&gt;} /&gt;
            &lt;Route path="/contact" element={&lt;Contact /&gt;} /&gt;
          &lt;/Routes&gt;
        &lt;/BrowserRouter&gt;
      );
    }

    export default App;
