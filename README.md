Đây là dự án [Next.js](https://nextjs.org/) được khởi động bằng [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Bắt đầu

Đầu tiên, hãy chạy máy chủ phát triển:

```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
# hoặc
bun dev
```

Mở [http://localhost:3000](http://localhost:3000) bằng trình duyệt của bạn để xem kết quả.

Bạn có thể bắt đầu chỉnh sửa trang bằng cách sửa đổi `pages/index.tsx`. Trang sẽ tự động cập nhật khi bạn chỉnh sửa tệp.

Có thể truy cập [API route](https://nextjs.org/docs/api-routes/introduction) trên [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Điểm cuối này có thể được chỉnh sửa trong `pages/api/hello.ts`.

Thư mục `pages/api` được ánh xạ tới `/api/*`. Các tệp trong thư mục này được coi là [API route](https://nextjs.org/docs/api-routes/introduction) thay vì các trang React.

Dự án này sử dụng [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) để tự động tối ưu hóa và tải Inter, một Google Font tùy chỉnh.

## Tìm hiểu thêm

Để tìm hiểu thêm về Next.js, hãy xem các tài nguyên sau:

- [Tài liệu Next.js](https://nextjs.org/docs) - tìm hiểu về các tính năng và API của Next.js.
- [Tìm hiểu Next.js](https://nextjs.org/learn) - hướng dẫn tương tác về Next.js.

Bạn có thể xem [kho lưu trữ Next.js GitHub](https://github.com/vercel/next.js/) - chúng tôi hoan nghênh phản hồi và đóng góp của bạn!

## Triển khai trên Vercel

Cách dễ nhất để triển khai ứng dụng Next.js của bạn là sử dụng [Nền tảng Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) từ những người tạo ra Next.js.

Hãy xem [tài liệu triển khai Next.js](https://nextjs.org/docs/deployment) của chúng tôi để biết thêm chi tiết.