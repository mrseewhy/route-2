import PageHeading from '../components/PageHeading'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const { id } = useParams()
    return (
        <div><PageHeading heading={`Profile ${id}`} /></div>
    )
}

export default Profile