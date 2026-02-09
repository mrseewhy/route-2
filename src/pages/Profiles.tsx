import { Link } from 'react-router-dom'
import PageHeading from '../components/PageHeading'


const Profiles = () => {
    const profileId = [1, 2, 3, 4, 5]
    return (
        <div>
            <PageHeading heading='All Profiles' />
            <div className='  grid place-items-center my-8 gap-6'>
                {profileId.map((id, index) => (
                    <p key={id.toString() + index} className='text-blue-800 font-bold text-xl cursor-pointer'>
                        <Link to={`/profiles/${id}`}>Profile {id}</Link>
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Profiles