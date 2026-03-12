import logo from '@/assets/logo.svg';

const Header = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto px-4">
        <a href="/" className="inline-block transition-opacity hover:opacity-80">
          <img
            src={logo}
            alt="Main Logo"
            width={187}
            height={50}
            loading="eager"
            fetchPriority="high"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
