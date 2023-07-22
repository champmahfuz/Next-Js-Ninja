import { useRouter } from 'next/router';
// import error from '../img/error.png'
const Error = () => {
    const router = useRouter();

    setTimeout(() => {
        router.push('/');
    }, 5000)
    return (
        <div>
            {/* <img src={error} alt="" width="100%" /> */}
            <h1>Not Found</h1>
        </div>
    );
};

export default Error;