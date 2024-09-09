import { useRouter } from 'next/router';

const Blog = () => {
    const router = useRouter();
    const { slug } = router.query; // Lấy các phần của đường dẫn

    // Chuyển đổi slug thành chuỗi đường dẫn
    const path = Array.isArray(slug) ? `/${slug.join('/')}` : '';

    return (
        <div>
            <h1>Blog Page</h1>
            {path ? (
                <p>Bạn đang xem blog với đường dẫn: {path}</p>
            ) : (
                <p>Đây là trang blog chính.</p>
            )}
        </div>
    );
};

export default Blog;
