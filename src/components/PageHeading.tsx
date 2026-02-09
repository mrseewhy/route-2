import { useAppContext } from "../context/AppContext"


const PageHeading = ({ heading }: { heading: string }) => {
    const { dark, setdark } = useAppContext();
    return (
        <div
            className={
                dark
                    ? "bg-blue-200 text-blue-950 h-32 w-full text-center grid place-items-center text-3xl font-bold"
                    : "bg-blue-950 text-white h-32 w-full text-center grid place-items-center text-3xl font-bold"
            }
        >
            {heading}
        </div>

    )
}

export default PageHeading