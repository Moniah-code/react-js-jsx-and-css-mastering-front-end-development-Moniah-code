import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
    <h1 className="text-3xl sm:text-4xl font-extrabold mb-6">
      Welcome to <span className="text-blue-600">MyReactApp</span>
    </h1>
    <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
      Your all-in-one productivity dashboard. Manage your tasks, explore posts,
      and stay organized — all in one place.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link to="/tasks">
        <Button variant="primary" size="lg">
          Manage Tasks
        </Button>
      </Link>
      <Link to="/posts">
        <Button variant="secondary" size="lg">
          View Posts
        </Button>
      </Link>
    </div>
  </div>
);

export default Home;
