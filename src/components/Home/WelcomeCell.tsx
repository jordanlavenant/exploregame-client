const WelcomeCell = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-3 px-5 my-5">
      <p className="text-3xl font-bold text-[#555454] text-start w-full">Explore game</p>
      <div 
        className="w-full flex flex-wrap justify-start items-center bg-opacity-25 rounded-xl gap-3 p-5"
        style={{ backgroundColor: "#bb8baf" }}
      >
        <p className="text-2xl font-bold text-[#000]">Bienvenue</p>
        <p className="text-xl font-normal text-[#000]">Découvrez tout ce que vous avez besoin de savoir sur l'IUT d'Orléans en jouant ou avec les différentes pages d'informations de l'application</p>
      </div>
    </div>
  )
}

export default WelcomeCell;