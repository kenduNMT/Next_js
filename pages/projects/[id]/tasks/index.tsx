import { useRouter } from 'next/router';

const ProjectTasksPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Danh sách nhiệm vụ của dự án có Id: {id}</h1>
        </div>
    );
};

export default ProjectTasksPage;
