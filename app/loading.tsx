import BounceLoader from 'react-spinners/BounceLoader'

const loading = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <BounceLoader color="#bfa094" />
        </div>
    )
}

export default loading