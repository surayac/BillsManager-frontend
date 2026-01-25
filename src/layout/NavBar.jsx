import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    <nav className="w-screen fixed top-0 left-0 bg-[#1e2327] shadow-md z-50">
      <div className="flex items-center justify-between px-6 md:px-10 py-4 h-[30px]">

        <Link to="/" className="flex items-center gap-1">
          <span className="text-1xl md:text-1xl font-heading font-bold tracking-tight">
            <span className="text-[#abaca6]">B</span>
            <span className="text-[#FFFFFF]">M</span>
          </span>
        </Link>

      </div>
    </nav>
  );
}
