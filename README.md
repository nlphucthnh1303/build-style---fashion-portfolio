# Build Style — Fashion Portfolio

**Mô tả ngắn:**
Trang portfolio thời trang tối màu, tập trung vào bố cục lớn, hình ảnh nổi bật và accent màu lime.

**Tính năng chính**

- Giao diện tối (dark) với accent màu lime
- Sections: Hero, Services, Pricing, Best Sellers, Testimonials, Footer
- Responsive navigation (desktop + mobile)

**Công nghệ & phụ thuộc (phiên bản)**

- React: ^19.2.0
- React DOM: ^19.2.0
- Vite (build/dev): ^6.2.0
- TypeScript: ~5.8.2
- lucide-react (icons): ^0.554.0
- @vitejs/plugin-react: ^5.0.0
- @types/node: ^22.14.0
- Các component sử dụng lớp utility (Tailwind-style) trong markup — Tailwind không được liệt kê trong `package.json` mặc định.

Thông tin phiên bản được lấy từ `package.json`. Nếu bạn muốn, mình có thể thêm hướng dẫn cài & cấu hình Tailwind hoặc bổ sung CI/deploy.

**Cài đặt & chạy (local)**

1. Cài dependencies:

   ```bash
   npm install
   ```

2. Chạy môi trường phát triển:

   ```bash
   npm run dev
   ```

3. Build production:

   ```bash
   npm run build
   npm run preview
   ```

**Biến môi trường**

- `GEMINI_API_KEY` được tham chiếu trong [vite.config.ts](vite.config.ts). Nếu không dùng, không cần thiết phải thiết lập để phát triển giao diện.

**Cấu trúc chính**

- `App.tsx`: entry component, ghép các section.
- `index.tsx`: mount React app.
- `vite.config.ts`: cấu hình Vite (port 3000 và alias `@`).
- `tsconfig.json`, `types.ts`: cấu hình TypeScript và kiểu dữ liệu.
- `components/`:
  - `Header.tsx` — navigation, logo, mobile menu.
  - `Hero.tsx` — phần đầu với headline và hình ảnh lớn.
  - `Services.tsx` — danh sách dịch vụ và phần giới thiệu.
  - `Pricing.tsx` — bảng giá / gói dịch vụ.
  - `BestSellers.tsx` — các sản phẩm/portfolio nổi bật.
  - `Testimonials.tsx` — feedback khách hàng.
  - `Footer.tsx` — CTA, links và form email.
  - `Button.tsx` — component nút tái sử dụng.

**Ghi chú nhanh**

- Mọi ảnh hiện đang sử dụng URL Unsplash tĩnh trong mã nguồn.
- Nếu muốn triển khai lên GitHub Pages / Vercel, build bằng `npm run build` và deploy thư mục `dist`.

Muốn mình tạo thêm tiếng Anh cho README, hoặc thêm hướng dẫn deploy cụ thể (Vercel/GitHub Pages)?
