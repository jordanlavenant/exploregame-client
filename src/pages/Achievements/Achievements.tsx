const AchievementPage = () => {
    return (
        <div>
            <link rel="stylesheet" href="./styles/achievements.css"/>
            <section className="w-full mt-10 px-7 flex flex-wrap gap-5">
                <div className="flex flex-wrap justify-center items-center gap-3">
                    <p className="text-4xl font-bold text-[#555454] text-start w-full">Obtenu</p>
                    <div className="w-full flex flex-wrap justify-center items-center bg-[#F0F0F0] rounded-xl gap-3 p-5">
                        <div className="grid grid-cols-2 w-full px-4 py-4 bg-[#791860] bg-opacity-50 rounded-xl border-4 border-[#791860] text-[#791860]">
                            <div className="flex items-center justify-between w-1/3">
                                <img src="./succes.png" alt="achievement" className="w-11 h-11"/>
                                <p className="font-bold text-2xl">INFO</p>    
                            </div>
                            <div className="grid grid-rows-2 w-full">
                                <div className="flex gap-2 items-center">
                                    <p className="text-xl font-bold">100%</p>
                                    <progress className="w-full rounded-full bg-[#fff] h-4 custom-progress" value="100" max="100"></progress>
                                </div>
                                <p className="text-xl font-bold">Tout a été obtenu</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 w-full px-4 py-4 bg-[#791860] bg-opacity-50 rounded-xl border-4 border-[#791860] text-[#791860]">
                            <div className="flex items-center justify-between w-1/3">
                                <img src="./succes.png" alt="achievement" className="w-11 h-11"/>
                                <p className="font-bold text-2xl">GMP</p>    
                            </div>
                            <div className="grid grid-rows-2 w-full">
                                <div className="flex gap-2 items-center">
                                    <p className="text-xl font-bold">100%</p>
                                    <progress className="w-full rounded-full bg-[#fff] h-4 custom-progress" value="100" max="100"></progress>
                                </div>
                                <p className="text-xl font-bold">Tout a été obtenu</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-3">
                    <p className="text-4xl font-bold text-[#555454] text-start w-full">En cours d'obtention</p>
                    <div className="w-full flex flex-wrap justify-center items-center bg-[#F0F0F0] rounded-xl gap-3 p-5">
                        <div className="grid grid-cols-2 w-full px-4 py-4 bg-[#791860] bg-opacity-50 rounded-xl border-4 border-[#791860] text-[#791860]">
                            <div className="flex items-center justify-between w-1/3">
                                <img src="./succes-vide.png" alt="achievement" className="w-11 h-11"/>
                                <p className="font-bold text-2xl">GEA</p>    
                            </div>
                            <div className="grid grid-rows-2 w-full">
                                <div className="flex gap-2 items-center">
                                    <p className="text-xl font-bold">56%</p>
                                    <progress className="w-full rounded-full bg-[#fff] h-4 custom-progress" value="56" max="100"></progress>
                                </div>
                                <p className="text-xl font-bold">1 étapes restantes</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 w-full px-4 py-4 bg-[#791860] bg-opacity-50 rounded-xl border-4 border-[#791860] text-[#791860]">
                            <div className="flex items-center justify-between w-1/3">
                                <img src="./succes-vide.png" alt="achievement" className="w-11 h-11"/>
                                <p className="font-bold text-2xl">QLIO</p>    
                            </div>
                            <div className="grid grid-rows-2 w-full">
                                <div className="flex gap-2 items-center">
                                    <p className="text-xl font-bold">89%</p>
                                    <progress className="w-full rounded-full bg-[#fff] h-4 custom-progress" value="89" max="100"></progress>
                                </div>
                                <p className="text-xl font-bold">2 étapes restantes</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-3">
                    <p className="text-4xl font-bold text-[#555454] text-start w-full">A Suivre</p>
                    <div className="w-full flex flex-wrap justify-center items-center bg-[#F0F0F0] rounded-xl gap-3 p-5">
                        <div className="grid grid-cols-2 w-full px-4 py-4 bg-[#791860] bg-opacity-50 rounded-xl border-4 border-[#791860] text-[#791860]">
                            <div className="flex items-center justify-between w-1/3">
                                <img src="./succes-vide.png" alt="achievement" className="w-11 h-11"/>
                                <p className="font-bold text-2xl">GEA</p>    
                            </div>
                            <div className="grid grid-rows-2 w-full">
                                <div className="flex gap-2 items-center">
                                    <p className="text-xl font-bold">0%</p>
                                    <progress className="w-full rounded-full bg-[#fff] h-4 custom-progress" value="0" max="100"></progress>
                                </div>
                                <p className="text-xl font-bold">Commencer le scénario</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 w-full px-4 py-4 bg-[#791860] bg-opacity-50 rounded-xl border-4 border-[#791860] text-[#791860]">
                            <div className="flex items-center justify-between w-1/3">
                                <img src="./succes-vide.png" alt="achievement" className="w-11 h-11"/>
                                <p className="font-bold text-2xl">QLIO</p>    
                            </div>
                            <div className="grid grid-rows-2 w-full">
                                <div className="flex gap-2 items-center">
                                    <p className="text-xl font-bold">0%</p>
                                    <progress className="w-full rounded-full bg-[#fff] h-4 custom-progress" value="0" max="100"></progress>
                                </div>
                                <p className="text-xl font-bold">Commencer le scénario</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
  }
  
  export default AchievementPage