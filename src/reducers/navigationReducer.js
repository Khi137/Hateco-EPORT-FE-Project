import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    text: "Tổng quan",
    icon: "FaHome",
    url: "/",
  },
  {
    text: "Tác nghiệp",
    icon: "DownSquareOutlined",
    url: "/tác-nghiệp",
    subMenu: [
      {
        id: "tacnghiep-01",
        text: "Lệnh giao container hàng",
        url: "/lệnh-giao-container-hàng",
        icon: "DownSquareOutlined",
      },
      {
        id: "tacnghiep-02",
        text: "Lệnh giao container rỗng",
        url: "/lệnh-giao-container-rỗng",
        icon: "DownSquareOutlined",
      },
      {
        id: "tacnghiep-03",
        text: "Lệnh hạ container hàng",
        url: "/lệnh-hạ-container-hàng",
        icon: "DownSquareOutlined",
      },
      {
        id: "tacnghiep-04",
        text: "Lệnh hạ container rỗng",
        url: "/lệnh-hạ-container-rỗng",
        icon: "DownSquareOutlined",
      },
      {
        id: "tacnghiep-05",
        text: "Lệnh đóng hàng",
        url: "/lệnh-đóng-hàng",
        icon: "DownSquareOutlined",
      },
      {
        id: "tacnghiep-06",
        text: "Lệnh rút hàng",
        url: "/lệnh-rút-hàng",
        icon: "DownSquareOutlined",
      },
      {
        id: "tacnghiep-07",
        text: "Lệnh dịch vụ",
        url: "/lệnh-dịch-vụ",
        icon: "DownSquareOutlined",
      },
      {
        id: "tacnghiep-08",
        text: "Đăng ký tách lô từ Master Bill",
        url: "/đăng-ký-tách-lô",
        icon: "DownSquareOutlined",
      },
      {
        id: "tacnghiep-09",
        text: "Cập nhật thông tin lệnh",
        url: "/cập-nhật-thông-tin-lệnh",
        icon: "DownSquareOutlined",
      },
      {
        id: "tacnghiep-10",
        text: "Lệnh chờ thanh toán",
        url: "/lệnh-chờ-thanh-toán",
        icon: "DownSquareOutlined",
      },
      {
        id: "tacnghiep-11",
        text: "Thanh lý tờ khai HQ",
        url: "/thanh-lý-tờ-khai",
        icon: "DownSquareOutlined",
      },
      {
        id: "tacnghiep-12",
        text: "Quản lý tờ khai HQ",
        url: "/quản-lý-tờ-khai",
        icon: "DownSquareOutlined",
      },
    ],
  },
  {
    text: "Hãng tàu",
    icon: "FlagOutlined",
    url: "/hãng-tàu",
    subMenu: [
      {
        id: "hangtau-01",
        text: "Quản lý EDO",
        url: "/quản-lý-edo",
        icon: "FlagOutlined",
      },
      {
        id: "hangtau-02",
        text: "Cập nhật EDO",
        url: "/cập-nhật-edo",
        icon: "FlagOutlined",
      },
      {
        id: "hangtau-03",
        text: "Lịch sử EDO",
        url: "/lịch-sử-edo",
        icon: "FlagOutlined",
      },
      {
        id: "hangtau-04",
        text: "Quản lý booking",
        url: "/quản-lý-booking",
        icon: "FlagOutlined",
      },
    ],
  },
  {
    text: "Danh mục",
    icon: "FormOutlined",
    url: "/danh-mục",
    subMenu: [
      {
        id: "danhmuc-01",
        text: "Danh mục khách hàng",
        url: "/danh-mục-khách-hàng",
        icon: "FormOutlined",
      },
      {
        id: "danhmuc-02",
        text: "Danh mục hãng khai thác",
        url: "/danh-mục-hãng-khai-thác",
        icon: "FormOutlined",
      },
      {
        id: "danhmuc-03",
        text: "Danh mục kích cỡ",
        url: "/danh-mục-kích-cỡ",
        icon: "FormOutlined",
      },
      {
        id: "danhmuc-04",
        text: "Danh mục công việc",
        url: "/danh-mục-công-việc",
        icon: "FormOutlined",
      },
      {
        id: "danhmuc-05",
        text: "Danh mục loại hàng hóa",
        url: "/danh-mục-loại-hàng-hóa",
        icon: "FormOutlined",
      },
      {
        id: "danhmuc-06",
        text: "Danh mục hướng",
        url: "/danh-mục-hướng",
        icon: "FormOutlined",
      },
      {
        id: "danhmuc-07",
        text: "Danh mục trạng thái container",
        url: "/danh-mục-trạng-thái-container",
        icon: "FormOutlined",
      },
      {
        id: "danhmuc-08",
        text: "Danh mục lịch trình tàu",
        url: "/danh-mục-lịch-trình-tàu",
        icon: "FormOutlined",
      },
      {
        id: "danhmuc-09",
        text: "Danh mục cảng",
        url: "/danh-mục-cảng",
        icon: "FormOutlined",
      },
    ],
  },
  {
    text: "Biểu cước",
    icon: "SnippetsOutlined",
    url: "/biểu-cước",
    subMenu: [
      {
        id: "bieucuoc-01",
        text: "Biểu cước",
        url: "/biểu-cước",
        icon: "SnippetsOutlined",
      },
      {
        id: "bieucuoc-02",
        text: "Hợp đồng",
        url: "/hợp-đồng",
        icon: "SnippetsOutlined",
      },
      {
        id: "bieucuoc-03",
        text: "Cấu hình ngày lễ",
        url: "/cấu-hình-ngày-lễ",
        icon: "SnippetsOutlined",
      },
      {
        id: "bieucuoc-04",
        text: "Cấu hình lưu bãi",
        url: "/cấu-hình-lưu-bãi",
        icon: "SnippetsOutlined",
      },
      {
        id: "bieucuoc-05",
        text: "Cấu hình sử dụng điện",
        url: "/cấu-hình-sử-dụng-điện",
        icon: "SnippetsOutlined",
      },
    ],
  },
  {
    text: "Quản lý lệnh",
    icon: "FormOutlined",
    url: "/quản-lý-lệnh",
    subMenu: [
      {
        id: "qll-01",
        text: "Cập nhật thông tin lệnh",
        url: "/cập-nhật-thông-tin-lệnh",
        icon: "FormOutlined",
      },
      {
        id: "qll-02",
        text: "Duyệt lệnh",
        url: "/duyệt-lệnh",
        icon: "FormOutlined",
      },
    ],
  },
  {
    text: "Quản trị hệ thống",
    icon: "BorderOutlined",
    url: "/quản-trị-hệ-thống",
    subMenu: [
      {
        id: "qtht-01",
        text: "Lịch sử người dùng",
        url: "/lịch-sử-người-dùng",
        icon: "BorderOutlined",
      },
      {
        id: "qtht-02",
        text: "Lịch sử gửi API-TOS",
        url: "/lịch-sử-gửi-api-tos",
        icon: "BorderOutlined",
      },
      {
        id: "qtht-03",
        text: "Quản lý kết nối",
        url: "/quản-lý-kết-nối",
        icon: "BorderOutlined",
      },
      {
        id: "qtht-04",
        text: "Quản lý phiên bản yêu cầu",
        url: "/quản-lý-phiên-bản-yêu-cầu",
        icon: "BorderOutlined",
      },
    ],
  },
  {
    text: "Thống kê - báo cáo",
    icon: "BarChartOutlined",
    url: "/thống-kê-báo-cáo",
    subMenu: [
      {
        id: "tkbc-01",
        text: "Hóa đơn thu ngay",
        url: "/hóa-đơn-thu-ngay",
        icon: "BarChartOutlined",
      },
      {
        id: "tkbc-02",
        text: "Hóa đơn theo tác nghiệp",
        url: "/hóa-đơn-theo-tác-nghiệp",
        icon: "BarChartOutlined",
      },
      {
        id: "tkbc-03",
        text: "Tổng hợp doanh thu hóa đơn thu ngay",
        url: "/tổng-hợp-doanh-thu-hóa-đơn-thu-ngay",
        icon: "BarChartOutlined",
      },
      {
        id: "tkbc-04",
        text: "Container biến động",
        url: "/container-biến-động",
        icon: "BarChartOutlined",
      },
      {
        id: "tkbc-05",
        text: "Thống kê TOS",
        url: "/thống-kê-tos",
        icon: "BarChartOutlined",
      },
      {
        id: "tkbc-06",
        text: "Quản lý hóa đơn tích hợp HTKT",
        url: "/quản-lý-hóa-đơn-tích-hợp-htkt",
        icon: "BarChartOutlined",
      },
    ],
  },
  {
    text: "Thanh toán",
    icon: "PayCircleOutlined",
    url: "/thanh-toán",
    subMenu: [
      {
        id: "thanhtoan-01",
        text: "Kết nối thanh toán với cổng thanh toán VNPAY",
        url: "/kết-nối-thanh-toán-vnpay",
        icon: "PayCircleOutlined",
      },
      {
        id: "thanhtoan-02",
        text: "thanh toán bằng thẻ ATM",
        url: "/thanh-toán-thẻ-atm",
        icon: "PayCircleOutlined",
      },
      {
        id: "thanhtoan-03",
        text: "Thanh toán hộ bằng internet banking",
        url: "/thanh-toán-hộ-internet-banking",
        icon: "PayCircleOutlined",
      },
      {
        id: "thanhtoan-04",
        text: "Tra cứu thanh toán dịch vụ",
        url: "/tra-cứu-thanh-toán-dịch-vụ",
        icon: "PayCircleOutlined",
      },
      {
        id: "thanhtoan-05",
        text: "Quản lý đối soát ngân hàng",
        url: "/quản-lý-đối-soát-ngân-hàng",
        icon: "PayCircleOutlined",
      },
      {
        id: "thanhtoan-06",
        text: "Báo cáo chi tiết đối soát",
        url: "/báo-cáo-chi-tiết-đối-soát",
        icon: "PayCircleOutlined",
      },
      {
        id: "thanhtoan-07",
        text: "Báo cáo chi phí giao dịch",
        url: "/báo-cáo-chi-phí-giao-dịch",
        icon: "PayCircleOutlined",
      },
    ],
  },
  {
    text: "Tra cứu",
    icon: "FileSearchOutlined",
    url: "/tra-cứu",
    subMenu: [
      {
        id: "tracuu-01",
        text: "Tra cứu thông tin container",
        url: "/tra-cứu-thông-tin-container",
        icon: "FileSearchOutlined",
      },
      {
        id: "tracuu-02",
        text: "Tra cứu danh sách container",
        url: "/tra-cứu-danh-sách-container",
        icon: "FileSearchOutlined",
      },
      {
        id: "tracuu-03",
        text: "Tra cứu thông tin tàu",
        url: "/tra-cứu-thông-tin-tàu",
        icon: "FileSearchOutlined",
      },
      {
        id: "tracuu-04",
        text: "Tra cứu vận đơn (BillNo)",
        url: "/tra-cứu-vận-đơn",
        icon: "FileSearchOutlined",
      },
      {
        id: "tracuu-05",
        text: "Tra cứu booking",
        url: "/tra-cứu-booking",
        icon: "FileSearchOutlined",
      },
      {
        id: "tracuu-06",
        text: "Tra cứu thông tin số HouseBill",
        url: "/tra-cứu-thông-tin-số-housebill",
        icon: "FileSearchOutlined",
      },
      {
        id: "tracuu-07",
        text: "Tra cứu thông tin thanh toán",
        url: "/tra-cứu-thông-tin-thanh-toán",
        icon: "FileSearchOutlined",
      },
      {
        id: "tracuu-08",
        text: "Tra cứu thông tin phiếu thu",
        url: "/tra-cứu-thông-tin-phiếu-thu",
        icon: "FileSearchOutlined",
      },
      {
        id: "tracuu-09",
        text: "Tra cứu thời gian thực hiện",
        url: "/tra-cứu-thời-gian-thực-hiện",
        icon: "FileSearchOutlined",
      },
    ],
  },
];

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    toggleSubMenu: (state, action) => {
      const { text } = action.payload;
      state.forEach((menu) => {
        menu.isOpen = menu.text === text;
      });
    },
  },
});

export const { toggleSubMenu } = navigationSlice.actions;

export default navigationSlice.reducer;
