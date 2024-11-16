const Header = () => {
  return (
    <header className="w-full flex justify-end items-center px-5 py-5">
        <section className="flex flex-wrap justify-between items-center w-3/5">
            <img className="w-36" src="/IUTO.png" alt="logo iut" />
            <button>
                <img className="w-10" src="/Menu-Burger.png" alt="logo" />
            </button> 
        </section>
    </header>
  );
}

export default Header;