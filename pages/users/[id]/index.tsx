import { useRouter } from 'next/router';

const UserDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>User id: {id}</h1>
        </div>
    );
};

export default UserDetailPage;
