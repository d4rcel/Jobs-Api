import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Dashboard, Register, Edit, Error, PrivateRoute } from './pages';
// import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />


        <Route path="/register" element={<Register />} />

        <Route path="/edit/:id" element={<Edit />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

