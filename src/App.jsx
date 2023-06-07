import { Route, Routes } from 'react-router-dom';

import Layout from './routes/layout/layout.route';
import Home from './routes/home/home.route';
import Featured from './routes/featured/featured.route';
import Pricing from './routes/pricing/pricing.route';
import Recourses from './routes/recourses/recourses.route';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Recourses />} />
      </Route>
    </Routes>
  );
}

export default App;
