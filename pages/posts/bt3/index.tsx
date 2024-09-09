import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Products = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams(); // Hook để lấy các tham số URL

    // Lấy giá trị từ URL
    useEffect(() => {
        const nameQuery = searchParams.get('name');
        const categoryQuery = searchParams.get('category');

        if (nameQuery) {
            setName(nameQuery); // Cập nhật state với giá trị từ URL
        }
        if (categoryQuery) {
            setCategory(categoryQuery); // Cập nhật state với giá trị từ URL
        }
    }, [searchParams]);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Tạo URL với nhiều tham số
        const query = new URLSearchParams({
            name: name.trim(),
            category: category.trim(),
        }).toString();

        // Truyền dữ liệu lên URL
        if (name || category) {
            router.push(`/posts/bt3?${query}`);
        }
    };

    return (
        <div>
            <h1>Tìm kiếm sản phẩm</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tên sản phẩm"
                />
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Loại sản phẩm"
                />
                <button type="submit">Tìm kiếm</button>
            </form>

            {/* Hiển thị kết quả tìm kiếm từ URL */}
            {name && <p>Tên sản phẩm: <strong>{name}</strong></p>}
            {category && <p>Loại sản phẩm: <strong>{category}</strong></p>}
        </div>
    );
};

export default Products;
