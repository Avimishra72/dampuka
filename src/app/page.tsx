export default function Home() {
  return (
    /* Header */
    <header className="flex items-center justify-between bg-white text-black">
      <div className="container mx-auto flex items-center justify-between h-[80px] px-4">
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-bold">DAMPUKA</h1>
          <nav>
            <ul className="flex gap-4">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Buy Now
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
