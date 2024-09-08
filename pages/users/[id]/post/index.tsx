import { useRouter } from 'next/router';

const UserPostsPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Danh sách bài viết của User Id: {id}</h1>
        </div>
    );
};

export default UserPostsPage;
