import MenuBurger from './MenuBurger.tsx'

const Header = () => {
  return (
    <header className="relative w-full flex items-center px-5 py-5">
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img className="w-36" src="/IUTO.png" alt="logo iut" />
      </div>
      <div className="ml-auto">
        <MenuBurger />
      </div>
    </header>
  )
}

export default Header;
