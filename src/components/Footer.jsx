function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <p>
          © {new Date().getFullYear()} MyReactApp. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-blue-600">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600">Terms of Service</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
