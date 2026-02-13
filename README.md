<div align="center">

  <img src="[https://media.giphy.com/media/l2Je2skI6CVnZ0Sju/giphy.gif](https://media.giphy.com/media/l2Je2skI6CVnZ0Sju/giphy.gif)" width="100px">

  # 🍽️ Restaurant Manager System 🍷
  
  **Hệ Thống Quản Lý Nhà Hàng Thông Minh - Hiện Đại - Tiện Lợi**

  [![GitHub release](https://img.shields.io/github/release/NV-DuyManh/Restaurant_Manager.svg?style=flat-square)](https://github.com/NV-DuyManh/Restaurant_Manager/releases)
  [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=flat-square)](https://github.com/NV-DuyManh/Restaurant_Manager/graphs/commit-activity)
  [![GitHub license](https://img.shields.io/github/license/NV-DuyManh/Restaurant_Manager.svg?style=flat-square)](https://github.com/NV-DuyManh/Restaurant_Manager/blob/master/LICENSE)
  [![GitHub stars](https://img.shields.io/github/stars/NV-DuyManh/Restaurant_Manager.svg?style=social&label=Star)](https://github.com/NV-DuyManh/Restaurant_Manager)
  
  <p>
    <a href="#-giới-thiệu">Giới thiệu</a> •
    <a href="#-tính-năng-nổi-bật">Tính năng</a> •
    <a href="#-hình-ảnh-demo">Hình ảnh</a> •
    <a href="#-cài-đặt">Cài đặt</a> •
    <a href="#-liên-hệ">Liên hệ</a>
  </p>
</div>

---

## 📖 Giới Thiệu

Chào mừng bạn đến với **Restaurant Manager**! 👋 Đây là dự án phần mềm được thiết kế để tối ưu hóa quy trình vận hành của một nhà hàng, từ việc đặt bàn, gọi món cho đến quản lý nhân viên và báo cáo doanh thu.

Mục tiêu của dự án là tạo ra một giao diện thân thiện, dễ sử dụng nhưng vẫn đảm bảo đầy đủ các tính năng mạnh mẽ cho người quản lý.

## 🚀 Tính Năng Nổi Bật

| Chức năng | Mô tả chi tiết |
| :--- | :--- |
| 🏰 **Quản Lý Bàn** | Sơ đồ bàn trực quan, cập nhật trạng thái (Trống, Có khách, Đặt trước) theo thời gian thực. |
| 🍲 **Gọi Món (Order)** | Menu điện tử đa dạng, hỗ trợ tìm kiếm món ăn nhanh chóng, thêm topping, ghi chú. |
| 💳 **Thanh Toán** | Hỗ trợ in hóa đơn, tách/gộp bàn, tính toán thuế và giảm giá tự động. |
| 🧑‍🍳 **Quản Lý Nhân Viên** | Phân quyền chi tiết (Admin, Thu ngân, Phục vụ), chấm công và tính lương. |
| 📊 **Báo Cáo Thống Kê** | Biểu đồ doanh thu theo ngày/tháng/năm, món ăn bán chạy nhất (Best seller). |
| 📦 **Quản Lý Kho** | Theo dõi nguyên liệu tồn kho, cảnh báo khi sắp hết hàng. |

## 🛠️ Công Nghệ Sử Dụng

Dự án được xây dựng dựa trên các công nghệ mạnh mẽ:

<div align="center">

| Core | Database | Tools |
| :---: | :---: | :---: |
| ![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white) <br/> *(Hoặc C#/Python)* | ![MySQL](https://img.shields.io/badge/MySQL-000000?style=for-the-badge&logo=mysql&logoColor=white) <br/> *(Hoặc SQL Server)* | ![IntelliJ IDEA](https://img.shields.io/badge/IntelliJ_IDEA-000000?style=for-the-badge&logo=intellij-idea&logoColor=white) <br/> ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) |

</div>

## 📸 Hình Ảnh Demo

> *Một bức ảnh hơn ngàn lời nói. Dưới đây là một số hình ảnh thực tế của phần mềm.*

### 1. Giao diện Đăng nhập & Trang chủ
<div align="center">
  <img src="LINK_ANH_LOGIN_CUA_BAN" width="45%" style="margin-right: 10px;" alt="Login Screen">
  <img src="LINK_ANH_DASHBOARD_CUA_BAN" width="45%" alt="Dashboard Screen">
</div>

### 2. Quản lý Đặt món & Sơ đồ bàn
<div align="center">
  <img src="LINK_ANH_ORDER_CUA_BAN" width="80%" alt="Order Screen">
</div>

### 3. Báo cáo Doanh thu
<div align="center">
  <img src="LINK_ANH_REPORT_CUA_BAN" width="80%" alt="Report Screen">
</div>

## 💻 Cài Đặt & Hướng Dẫn

Để chạy dự án này trên máy local của bạn, hãy làm theo các bước sau:
**Bước 1: Clone dự án**

```bash
git clone [https://github.com/NV-DuyManh/Restaurant_Manager.git](https://github.com/NV-DuyManh/Restaurant_Manager.git)
Bước 2: Cấu hình Cơ sở dữ liệu

Mở file database/script.sql (hoặc tên file sql của bạn).

Import vào MySQL hoặc SQL Server.

Cập nhật thông tin kết nối trong file cấu hình config.properties (hoặc nơi bạn lưu config DB).

Bước 3: Chạy ứng dụng

Mở dự án bằng IDE (IntelliJ / Visual Studio / NetBeans).

Build và Run! 🎉

🤝 Đóng Góp (Contributing)
Mọi sự đóng góp đều được hoan nghênh! Nếu bạn muốn cải thiện dự án này:

Fork dự án.

Tạo branch mới:

Bash
git checkout -b feature/TinhNangMoi
Commit thay đổi:

Bash
git commit -m 'Thêm tính năng X'
Push lên branch:

Bash
git push origin feature/TinhNangMoi
Tạo Pull Request.

👨‍💻 Tác Giả
Nguyễn Văn Duy Mạnh

🔗 Github: @NV-DuyManh

📧 Email: (Email của bạn)

📘 Facebook: (Link Facebook của bạn)

<div align="center">
<i>Cảm ơn bạn đã ghé thăm dự án! Nếu thấy hữu ích, hãy tặng mình 1 ⭐ nhé!</i> ❤️
</div>
