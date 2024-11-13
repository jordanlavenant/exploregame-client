const ProfilModifPage = () => {
    return (
        <div className="min-h-screen">
            <div className="w-full text-center text-4xl mt-10 text-[#791860] font-bold">Modifie ton username</div>
            <section className="w-full mt-10 px-7 grid grid-rows-3 gap-5">
                <p className="text-3xl font-bold text-[#791860] text-center">Username</p>
                <input className="px-4 py-3 rounded-xl border-[#791860] border-4 text-[#791860] text-center font-bold text-2xl placeholder:text-[#791860]" placeholder="@username"></input>
                <button className="px-4 py-3 bg-[#791860] bg-opacity-50 rounded-xl border-[#791860] border-4 text-[#791860] text-center font-bold text-2xl">Modifier</button>
            </section>
        </div>
    )
  }
  
  export default ProfilModifPage