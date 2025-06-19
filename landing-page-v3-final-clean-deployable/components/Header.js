export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">Brand</div>
      <nav className="hidden md:flex space-x-4">
        <a href="#" className="hover:text-blue-500">Home</a>
        <a href="#" className="hover:text-blue-500">Products</a>
        <a href="#" className="hover:text-blue-500">FAQ</a>
      </nav>
    </header>
  );
}
