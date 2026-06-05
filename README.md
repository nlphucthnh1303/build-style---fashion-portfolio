# Build Style — Fashion Portfolio

![Build.Style Banner](public/favicon.ico)

<<<<<<< HEAD
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-^6.2.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-~5.8.2-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![lucide-react](https://img.shields.io/badge/lucide--react-0.554.0-111827?style=flat-square)](https://lucide.dev/)

**Build.Style** là một trang portfolio thời trang hiện đại, thiết kế tối (dark) với accent màu lime, tập trung vào hình ảnh lớn, bố cục không gian rộng và trải nghiệm tương tác mượt.
=======
**Tính năng chính**
>>>>>>> 045558a8f07051b533f075313e44a7c2b2b884c0

---

## 🚀 Tính năng nổi bật

- 🎨 Giao diện tối (Dark theme) với accent màu lime
- 🧭 Sections chính: `Hero`, `Services`, `Pricing`, `Best Sellers`, `Testimonials`, `Footer`
- 📱 Responsive: navigation và layout hỗ trợ mobile & desktop
- ✨ Hiệu ứng tương tác nhẹ (hover, reveal) sử dụng các lớp CSS
- ⚡ Dễ tùy biến: component-based structure để mở rộng nhanh

---

## 🛠 Tech Stack (Công nghệ & phiên bản)

| Công nghệ                | Phiên bản / Ghi chú |
| :----------------------- | :------------------ |
| **React**                | ^19.2.0             |
| **React DOM**            | ^19.2.0             |
| **Vite**                 | ^6.2.0              |
| **TypeScript**           | ~5.8.2              |
| **lucide-react**         | ^0.554.0 (icons)    |
| **@vitejs/plugin-react** | ^5.0.0              |
| **@types/node**          | ^22.14.0            |

Phiên bản lấy từ `package.json`. Ghi chú: giao diện sử dụng các lớp utility (Tailwind-style) trong markup; Tailwind không có trong `package.json` mặc định — nếu cần dùng Tailwind, mình có thể thêm hướng dẫn cấu hình.

---

## 📂 Cấu trúc dự án

```text
build-style---fashion-portfolio/
├── App.tsx
├── index.tsx
├── index.html
├── vite.config.ts
├── package.json
├── tsconfig.json
├── types.ts
├── metadata.json
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Pricing.tsx
│   ├── BestSellers.tsx
│   ├── Testimonials.tsx
│   ├── Footer.tsx
│   └── Button.tsx
└── README.md
```

---

## 🛠 Hướng dẫn cài đặt (Getting Started)

### Điều kiện tiên quyết

- Node.js (khuyến nghị 16.x trở lên)
- npm (hoặc yarn)

### Cài đặt & chạy

1. Clone repository:

```bash
git clone <your-repo-url>
cd build-style---fashion-portfolio
```

2. Cài dependencies:

```bash
npm install
# hoặc
yarn install
```

3. Chạy dev server (mặc định port 3000):

```bash
npm run dev
```

4. Build production & preview:

```bash
npm run build
npm run preview
```

---

## 💻 Usage

- Mở trình duyệt tại `http://localhost:3000` để xem giao diện.
- `vite.config.ts` đang định nghĩa `process.env.GEMINI_API_KEY` nếu bạn muốn tích hợp API; không bắt buộc cho giao diện.

---

## 🤝 Contributing

Bạn có thể đóng góp bằng cách fork và gửi Pull Request:

1. Fork repo
2. Tạo branch tính năng: `git checkout -b feature/my-change`
3. Commit & push
4. Mở Pull Request

---

## 📄 License

Project không định nghĩa license trong `package.json`. Nếu bạn muốn, mình có thể thêm `LICENSE` (gợi ý: MIT). Hiện tại hãy thêm file license trước khi public cho mục thương mại.

---

Nếu bạn muốn, mình sẽ:

- thêm phiên bản README tiếng Anh, hoặc
- thêm hướng dẫn deploy lên Vercel/GitHub Pages, hoặc
- cấu hình Tailwind + hướng dẫn sử dụng.

Bạn muốn mình làm bước nào tiếp theo?
