import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Posts = () => {
    const [query, setQuery] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams(); // Hook để lấy tham số URL

    // Lấy giá trị từ URL
    useEffect(() => {
        const searchQuery = searchParams.get('search');
        if (searchQuery) {
            setQuery(searchQuery); // Cập nhật state với giá trị từ URL
        }
    }, [searchParams]);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Truyền dữ liệu lên URL
        if (query.trim()) {
            router.push(`/posts?search=${query}`);
        }
    };

    return (
        <div>
            <h1>Search Posts</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Nhập từ khóa tìm kiếm..."
                />
                <button type="submit">Tìm kiếm</button>
            </form>
            {query && <p>Kết quả tìm kiếm cho: <strong>{query}</strong></p>}
        </div>
    );
};

export default Posts;
