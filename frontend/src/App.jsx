import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import ExibeDetalhes from './pages/exibe/ExibeDetalhes';

const App = () => {
  return (
    <BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="busca" element={<ExibeDetalhes />} />
			</Routes>
		</BrowserRouter>
  );
};

export default App;
