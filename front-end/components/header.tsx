import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="p-3 mb-3 border-bottom bg-dark bg-gradient">
      <a className="fs-2 d-flex justify-content-center mb-2 mb-lg-0 text-white-50 text-decoration-none">
        {' '}
        Omnis Cura Zorggroep
      </a>
      <nav className="nav justify-content-center">
        <Link href="/" className="nav-link px-4 fs-5 text-white">
          Home
        </Link>
        <Link href="/employees" className="nav-link px-4 fs-5 text-white">
          Employee
        </Link>
        <Link href="/schedule" className="nav-link px-4 fs-5 text-white">
          Schedule
        </Link>
        <Link href="/login" className="nav-link px-4 fs-5 text-white">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
