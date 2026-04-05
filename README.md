<div align="center">

  <img src="https://media.giphy.com/media/l2Je2skI6CVnZ0Sju/giphy.gif" width="100px">

  # 🍽️ Restaurant Manager System
  
  **Hệ thống quản lý nhà hàng đơn giản – trực quan – dễ triển khai**

  [![GitHub release](https://img.shields.io/github/release/NV-DuyManh/Restaurant_Manager.svg?style=flat-square)](https://github.com/NV-DuyManh/Restaurant_Manager/releases)
  [![Maintenance](https://img.shields.io/badge/Maintained-yes-green.svg?style=flat-square)](https://github.com/NV-DuyManh/Restaurant_Manager/graphs/commit-activity)
  [![License](https://img.shields.io/github/license/NV-DuyManh/Restaurant_Manager.svg?style=flat-square)](https://github.com/NV-DuyManh/Restaurant_Manager/blob/master/LICENSE)

  <p>
    <a href="#-giới-thiệu">Giới thiệu</a> •
    <a href="#-tính-năng">Tính năng</a> •
    <a href="#-công-nghệ">Công nghệ</a> •
    <a href="#-cài-đặt">Cài đặt</a> •
    <a href="#-api">API</a> •
    <a href="#-đóng-góp">Đóng góp</a>
  </p>

</div>

---

## 📖 Giới thiệu

**Restaurant Manager System** là một ứng dụng web giúp quản lý hoạt động cơ bản của nhà hàng, bao gồm:

- Quản lý món ăn  
- Quản lý giỏ hàng (cart)  
- Xử lý order  
- Hiển thị danh sách sản phẩm  

Dự án được xây dựng theo hướng:

> ⚡ Frontend + Fake REST API (JSON Server)

Phù hợp cho:
- Học tập
- Demo project
- Nền tảng phát triển fullstack

---

## 🚀 Tính năng

- 🛒 Thêm / xóa sản phẩm vào giỏ hàng  
- 🍔 Hiển thị danh sách món ăn từ database  
- 🔄 Tự động cập nhật giao diện  
- 📦 Fake API bằng json-server  
- 💡 UI đơn giản, dễ dùng  

---

## 🛠️ Công nghệ

| Thành phần | Công nghệ |
|----------|--------|
| Frontend | HTML, CSS, JavaScript |
| Backend (fake) | JSON Server |
| Tools | Git, Live Server |

---

## 📁 Cấu trúc thư mục
Restaurant_Manager/
│── db.json
│── index.html
│── assets/
│── css/
│── js/
│── views/
│ └── Home.html


---

## ⚙️ Cài đặt

### 1️⃣ Clone project

```bash
git clone https://github.com/NV-DuyManh/Restaurant_Manager.git 
cd Restaurant_Manager
```

### 2️⃣ Cài json-server

```bash
npm install -g json-server
```

### 3️⃣ Chạy database

```bash
npx json-server db.json
```

             ➡️ Server chạy tại:   http://localhost:3000


### 4️⃣ Chạy frontend

Mở file:

```
views/Home.html
```

Click chuột phải → **Open with Live Server**
