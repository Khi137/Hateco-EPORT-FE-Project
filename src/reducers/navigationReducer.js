import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    text: "Tổng quan",
    icon: "FaHome",
    url: "/",
  },
  {
    text: "Tác nghiệp",
    icon: "LuArrowDownSquare",
    url: "/tác-nghiệp",
    subMenu: [
      {
        text: "Lệnh giao container hàng",
        url: "/lệnh-giao-container-hàng",
      },
      {
        text: "Lệnh giao container rỗng",
        url: "/lệnh-giao-container-rỗng",
      },
      {
        text: "Lệnh hạ container hàng",
        url: "/lệnh-hạ-container-hàng",
      },
      {
        text: "Lệnh hạ container rỗng",
        url: "/lệnh-hạ-container-rỗng",
      },
      {
        text: "Lệnh đóng hàng",
        url: "/lệnh-đóng-hàng",
      },
      {
        text: "Lệnh rút hàng",
        url: "/lệnh-rút-hàng",
      },
      {
        text: "Lệnh dịch vụ",
        url: "/lệnh-dịch-vụ",
      },
      {
        text: "Đăng ký tách lô từ Master Bill",
        url: "/đăng-ký-tách-lô",
      },
      {
        text: "Cập nhật thông tin lệnh",
        url: "/cập-nhật-thông-tin-lệnh",
      },
      {
        text: "Lệnh chờ thanh toán",
        url: "/lệnh-chờ-thanh-toán",
      },
      {
        text: "Thanh lý tờ khai HQ",
        url: "/thanh-lý-tờ-khai",
      },
      {
        text: "Quản lý tờ khai HQ",
        url: "/quản-lý-tờ-khai",
      },
    ],
  },
  {
    text: "Hãng tàu",
    icon: "FaShip",
    url: "/hãng-tàu",
    subMenu: [
      {
        text: "Quản lý EDO",
        url: "/quản-lý-edo",
      },
      {
        text: "Cập nhật EDO",
        url: "/cập-nhật-edo",
      },
      {
        text: "Lịch sử EDO",
        url: "/lịch-sử-edo",
      },
      {
        text: "Quản lý booking",
        url: "/quản-lý-booking",
      },
    ],
  },
  {
    text: "Danh mục",
    icon: "TbCategory",
    url: "/danh-mục",
    subMenu: [
      {
        text: "Danh mục khách hàng",
        url: "/danh-mục-khách-hàng",
      },
      {
        text: "Danh mục hãng khai thác",
        url: "/danh-mục-hãng-khai-thác",
      },
      {
        text: "Danh mục kích cỡ",
        url: "/danh-mục-kích-cỡ",
      },
      {
        text: "Danh mục công việc",
        url: "/danh-mục-công-việc",
      },
      {
        text: "Danh mục loại hàng hóa",
        url: "/danh-mục-loại-hàng-hóa",
      },
      {
        text: "Danh mục hướng",
        url: "/danh-mục-hướng",
      },
      {
        text: "Danh mục trạng thái container",
        url: "/danh-mục-trạng-thái-container",
      },
      {
        text: "Danh mục lịch trình tàu",
        url: "/danh-mục-lịch-trình-tàu",
      },
      {
        text: "Danh mục cảng",
        url: "/danh-mục-cảng",
      },
    ],
  },
  {
    text: "Biểu cước",
    icon: "TbReceiptTax",
    url: "/biểu-cước",
    subMenu: [
      {
        text: "Biểu cước",
        url: "/biểu-cước",
      },
      {
        text: "Hợp đồng",
        url: "/hợp-đồng",
      },
      {
        text: "Cấu hình ngày lễ",
        url: "/cấu-hình-ngày-lễ",
      },
      {
        text: "Cấu hình lưu bãi",
        url: "/cấu-hình-lưu-bãi",
      },
      {
        text: "Cấu hình sử dụng điện",
        url: "/cấu-hình-sử-dụng-điện",
      },
    ],
  },
  {
    text: "Quản lý lệnh",
    icon: "TbCategory",
    url: "/quản-lý-lệnh",
    subMenu: [
      {
        text: "Cập nhật thông tin lệnh",
        url: "/cập-nhật-thông-tin-lệnh",
      },
      {
        text: "Duyệt lệnh",
        url: "/duyệt-lệnh",
      },
    ],
  },
  {
    text: "Quản trị hệ thống",
    icon: "MdOutlineSettingsSystemDaydream",
    url: "/quản-trị-hệ-thống",
    subMenu: [
      {
        text: "Lịch sử người dùng",
        url: "/lịch-sử-người-dùng",
      },
      {
        text: "Lịch sử gửi API-TOS",
        url: "/lịch-sử-gửi-api-tos",
      },
      {
        text: "Quản lý kết nối",
        url: "/quản-lý-kết-nối",
      },
      {
        text: "Quản lý phiên bản yêu cầu",
        url: "/quản-lý-phiên-bản-yêu-cầu",
      },
    ],
  },
  {
    text: "Thống kê - báo cáo",
    icon: "FaChartBar",
    url: "/thống-kê-báo-cáo",
    subMenu: [
      {
        text: "Hóa đơn thu ngay",
        url: "/hóa-đơn-thu-ngay",
      },
      {
        text: "Hóa đơn theo tác nghiệp",
        url: "/hóa-đơn-theo-tác-nghiệp",
      },
      {
        text: "Tổng hợp doanh thu hóa đơn thu ngay",
        url: "/tổng-hợp-doanh-thu-hóa-đơn-thu-ngay",
      },
      {
        text: "Container biến động",
        url: "/container-biến-động",
      },
      {
        text: "Thống kê TOS",
        url: "/thống-kê-tos",
      },
      {
        text: "Quản lý hóa đơn tích hợp HTKT",
        url: "/quản-lý-hóa-đơn-tích-hợp-htkt",
      },
    ],
  },
  {
    text: "Thanh toán",
    icon: "MdPayment",
    url: "/thanh-toán",
    subMenu: [
      {
        text: "Kết nối thanh toán với cổng thanh toán VNPAY",
        url: "/kết-nối-thanh-toán-vnpay",
      },
      {
        text: "thanh toán bằng thẻ ATM",
        url: "/thanh-toán-thẻ-atm",
      },
      {
        text: "Thanh toán hộ bằng internet banking",
        url: "/thanh-toán-hộ-internet-banking",
      },
      {
        text: "Tra cứu thanh toán dịch vụ",
        url: "/tra-cứu-thanh-toán-dịch-vụ",
      },
      {
        text: "Quản lý đối soát ngân hàng",
        url: "/quản-lý-đối-soát-ngân-hàng",
      },
      {
        text: "Báo cáo chi tiết đối soát",
        url: "/báo-cáo-chi-tiết-đối-soát",
      },
      {
        text: "Báo cáo chi phí giao dịch",
        url: "/báo-cáo-chi-phí-giao-dịch",
      },
    ],
  },
  {
    text: "Tra cứu",
    icon: "MdOutlineLocationSearching",
    url: "/tra-cứu",
    subMenu: [
      {
        text: "Tra cứu thông tin container",
        url: "/tra-cứu-thông-tin-container",
      },
      {
        text: "Tra cứu danh sách container",
        url: "/tra-cứu-danh-sách-container",
      },
      {
        text: "Tra cứu thông tin tàu",
        url: "/tra-cứu-thông-tin-tàu",
      },
      {
        text: "Tra cứu vận đơn (BillNo)",
        url: "/tra-cứu-vận-đơn",
      },
      {
        text: "Tra cứu booking",
        url: "/tra-cứu-booking",
      },
      {
        text: "Tra cứu thông tin số HouseBill",
        url: "/tra-cứu-thông-tin-số-housebill",
      },
      {
        text: "Tra cứu thông tin thanh toán",
        url: "/tra-cứu-thông-tin-thanh-toán",
      },
      {
        text: "Tra cứu thông tin phiếu thu",
        url: "/tra-cứu-thông-tin-phiếu-thu",
      },
      {
        text: "Tra cứu thời gian thực hiện",
        url: "/tra-cứu-thời-gian-thực-hiện",
      },
    ],
  },
];

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {},
});

export default navigationSlice.reducer;
