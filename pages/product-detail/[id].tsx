
import { useRouter } from 'next/router';

export default function ProductDetail() {
    const router = useRouter();
    const { id } = router.query; // Lấy giá trị ID từ URL

    return (
        <div>
            <h1>Product id: {id}</h1>
        </div>
    );
}
