import PageHeading from "../components/PageHeading"
import { Link, Outlet } from "react-router-dom"


const Forms = () => {
    return (
        <div>
            <PageHeading heading='All Forms' />
            <div className="w-2/3 h-[60vh] bg-blue-200 mx-auto my-8 rounded-lg p-8">
                <p className="text-center font-bold form-blue-800 ">List of forms</p>
                <div className="w-full h-full flex items-center justify-center gap-4 p-4">
                    <div className="bg-blue-950 w-full h-full rounded-lg flex flex-col items-center justify-center p-8">
                        <p className=" text-white font-bold text-xl text-center">This side stays the same</p>
                        <div className="flex flex-col gap-2 mt-8 font-bold text-blue-100">
                            <Link to={'/forms/form1'}> Form 1 </Link>
                            <Link to={'/forms/form2'}> Form 2 </Link>
                            <Link to={'/forms/form3'}> Form 3 </Link>
                            <Link to={'/forms/form4'}> Form 4 </Link>
                        </div>
                        <Link className="text-blue-100 font-bold mt-4" to={'/forms'}> return to forms</Link>


                    </div>
                    <div className="bg-white w-full h-full rounded-lg ">
                        <div className="flex items-center justify-center w-full h-full">
                            <Outlet />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Forms