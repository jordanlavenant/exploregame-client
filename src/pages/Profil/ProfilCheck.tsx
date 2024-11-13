const ProfilCheckPage = () => {
    return (
        <div>
            <div className="w-full text-center text-5xl mt-10 text-[#791860] font-bold">Mes informations</div>
            <section className="w-full mt-10 px-7 grid grid-rows-2">
                <p className="text-2xl font-bold text-[#791860] text-start">Ma filière</p>
                <button className="px-4 py-3 bg-[#791860] bg-opacity-50 rounded-xl border-[#791860] border-4 text-[#791860] text-center font-bold text-2xl">Informatique</button>
            </section>
            <section className="w-full mt-10 px-7 grid grid-rows-2">
                <p className="text-2xl font-bold text-[#791860] text-start">Username</p>
                <button className="px-4 py-3 bg-[#791860] bg-opacity-50 rounded-xl border-[#791860] border-4 text-[#791860] text-center font-bold text-2xl">@Username</button>
            </section>
            <section className="w-full mt-10 px-7 grid grid-rows-2">
                <p className="text-2xl font-bold text-[#791860] text-start">Mail</p>
                <button className="px-4 py-3 bg-[#791860] bg-opacity-50 rounded-xl border-[#791860] border-4 text-[#791860] text-center font-bold text-2xl">user@gmail.com</button>
            </section>
            <section className="w-full mt-10 px-7 grid grid-rows-2">
                <p className="text-2xl font-bold text-[#791860] text-start">Mot de passe</p>
                <button className="px-4 py-3 bg-[#791860] bg-opacity-50 rounded-xl border-[#791860] border-4 text-[#791860] text-center font-bold text-2xl">*********</button>
            </section>
        </div>
    )
  }
  
  export default ProfilCheckPage