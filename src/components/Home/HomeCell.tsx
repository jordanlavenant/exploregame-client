interface HomeCellProps {
    title: string;
}

const HomeCell = ({ title }:HomeCellProps) => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-3 px-5 my-5">
            <p className="text-3xl font-bold text-[#555454] text-start w-full">{title}</p>
            <div className="w-full flex flex-wrap justify-start items-center bg-[#791860] bg-opacity-25 rounded-xl gap-3 p-5">
                <p className="text-2xl font-bold text-[#000]">Welcome to the Home Page</p>
                <p className="text-xl font-normal text-[#000]">This is the Home Page of the app. You can add more content here.</p>
            </div>
        </div>
    )
}

export default HomeCell;