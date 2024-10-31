import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { InventoryList } from './pages/InventoryList';
import { ProductDetails } from './pages/ProductDetails';
import { OrderFulfillment } from './pages/OrderFulfillment';
import { Reports } from './pages/Reports';
import { Alerts } from './pages/Alerts';
import { ProductEntry } from './pages/ProductEntry';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<InventoryList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/orders" element={<OrderFulfillment />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/product-entry" element={<ProductEntry />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;