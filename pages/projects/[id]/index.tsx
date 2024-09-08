import { useRouter } from 'next/router';

const ProjectDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Trang chi tiết dự án có id: {id}</h1>
        </div>
    );
};

export default ProjectDetailPage;
