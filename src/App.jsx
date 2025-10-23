// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <main className="flex-grow">
//         <Home />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import Card from "./components/Card";

// function App() {
//   return (
//     <div className="p-6 space-y-4">
//       <Card title="Example Card">
//         <p>This is a sample card using Tailwind CSS.</p>
//       </Card>

//       <Card title="Another Card" className="bg-blue-50 dark:bg-blue-900">
//         <p>Cards can be reused and styled independently.</p>
//       </Card>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import About from "./pages/About";
import Footer from "./components/Footer";
import Posts from './pages/Posts';
import Layout from "./components/Layout";
import TaskManager from './components/TaskManager';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/tasks" element={<Layout><TaskManager /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/posts" element={<Layout><Posts /></Layout>} />
    </Routes>
  );
};

export default App;

