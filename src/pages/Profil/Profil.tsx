const ProfilPage = () => {
    return (
        <div>
            <div className="w-full text-center text-5xl mt-10 text-[#791860] font-bold">@Username</div>
            <section className="w-full mt-10 px-7 grid grid-rows-2">
                <div className="w-full flex flex-start items-center gap-5">
                    <p className="text-2xl font-bold text-[#791860]">Accomplissements</p>
                    <button className="px-4 py-2 flex items-center justify-center"><img src="./arrow-right.png" alt="flèche vers la droite"></img></button>
                </div>
                <div className="w-full flex flex-start items-center">
                    <img src="./succes.png" alt="succès" className="w-[70px] h-[70px]"></img>
                    <img src="./succes.png" alt="succès" className="w-[70px] h-[70px]"></img>
                    <img src="./succes.png" alt="succès" className="w-[70px] h-[70px]"></img>
                    <img src="./succes.png" alt="succès" className="w-[70px] h-[70px]"></img>
                    <img src="./succes-vide.png" alt="succès" className="w-[70px] h-[70px]"></img>
                    <img src="./succes-vide.png" alt="succès" className="w-[70px] h-[70px]"></img>
                </div>
            </section>
            <section className="w-full mt-10 px-7 grid grid-cols-2 gap-3">
                <div className="w-full grid grid-rows-2 items-center">
                    <p className="text-xl font-bold text-[#791860] text-center">Partage ton profil</p>
                    <button className="px-4 py-4 flex items-center justify-center bg-[#791860] bg-opacity-50 rounded-xl border-[#791860] border-4"><img src="./share.png" alt="flèche vers la droite" className="h-[30px]"></img></button>
                </div>
                <div className="w-full grid grid-rows-2 items-center">
                    <p className="text-xl font-bold text-[#791860] text-center">Aimer par</p>
                    <button className="px-4 py-4 flex items-center justify-center gap-2 bg-[#791860] bg-opacity-50 rounded-xl border-[#791860] border-4"><p className="text-[#791860] text-center font-bold text-xl">16</p><img src="./Like.png" alt="flèche vers la droite" className="h-[30px]"></img></button>
                </div>
            </section>
            <section className="w-full mt-10 px-7 grid grid-rows-2">
                <p className="text-2xl font-bold text-[#791860] text-start">Ma filière</p>
                <button className="px-4 py-3 bg-[#791860] bg-opacity-50 rounded-xl border-[#791860] border-4 text-[#791860] text-center font-bold text-2xl">Informatique</button>
            </section>
            <section className="w-full mt-10 px-7 grid grid-rows-2">
                <p className="text-2xl font-bold text-[#791860] text-start">Mes informations</p>
                <button className="px-4 py-3 bg-[#791860] bg-opacity-50 rounded-xl border-[#791860] border-4 text-[#791860] text-center font-bold text-2xl">Modifier informations</button>
            </section>
        </div>
    )
  }
  
  export default ProfilPage