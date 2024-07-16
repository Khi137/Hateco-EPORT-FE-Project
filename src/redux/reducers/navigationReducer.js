import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    text: "Tổng quan",
    icon: "HomeOutlined",
    url: "/",
  },
  {
    text: "Tác nghiệp",
    icon: "DownSquareOutlined",
    url: "/task",
    subMenu: [
      {
        id: "tacnghiep-01",
        text: "Lệnh giao container hàng",
        url: "/tskImportPickup",
        icon: "RightSquareOutlined",
      },
      {
        id: "tacnghiep-02",
        text: "Lệnh giao container rỗng",
        url: "/tskEmptyPickup",
        icon: "BorderOuterOutlined",
      },
      {
        id: "tacnghiep-03",
        text: "Lệnh hạ container hàng",
        url: "/tskFCL_Pre_Advice",
        icon: "BorderInnerOutlined",
      },
      {
        id: "tacnghiep-04",
        text: "Lệnh hạ container rỗng",
        url: "/tskPre_Advice",
        icon: "BorderBottomOutlined",
      },
      {
        id: "tacnghiep-05",
        text: "Lệnh đóng hàng",
        url: "/tskStuffingOrder",
        icon: "FullscreenExitOutlined",
      },
      {
        id: "tacnghiep-06",
        text: "Lệnh rút hàng",
        url: "/tskUnstuffingOrder",
        icon: "FullscreenOutlined",
      },
      {
        id: "tacnghiep-07",
        text: "Lệnh dịch vụ",
        url: "/tskService",
        icon: "PicCenterOutlined",
      },
      {
        id: "tacnghiep-08",
        text: "Đăng ký tách lô từ Master Bill",
        url: "/đăng-ký-tách-lô",
        icon: "PicLeftOutlined",
      },
      {
        id: "tacnghiep-09",
        text: "Cập nhật thông tin lệnh",
        url: "/tskUpdateOrder",
        icon: "RetweetOutlined",
      },
      {
        id: "tacnghiep-10",
        text: "Lệnh chờ thanh toán",
        url: "/pendingTask",
        icon: "ClockCircleOutlined",
      },
      {
        id: "tacnghiep-11",
        text: "Thanh lý tờ khai HQ",
        url: "/thanh-lý-tờ-khai",
        icon: "CloseSquareOutlined",
      },
      {
        id: "tacnghiep-12",
        text: "Quản lý tờ khai HQ",
        url: "/quản-lý-tờ-khai",
        icon: "FormOutlined",
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
        icon: "SnippetsOutlined",
      },
      {
        id: "hangtau-02",
        text: "Cập nhật EDO",
        url: "/cập-nhật-edo",
        icon: "UpCircleOutlined",
      },
      {
        id: "hangtau-03",
        text: "Lịch sử EDO",
        url: "/lịch-sử-edo",
        icon: "ContainerOutlined",
      },
      {
        id: "hangtau-04",
        text: "Quản lý booking",
        url: "/quản-lý-booking",
        icon: "FormOutlined",
      },
    ],
  },
  {
    text: "Danh mục",
    icon: "FormOutlined",
    url: "/category",
    subMenu: [
      {
        id: "danhmuc-01",
        text: "Danh mục khách hàng",
        url: "/category_customer",
        icon: "TeamOutlined",
      },
      {
        id: "danhmuc-02",
        text: "Danh mục hãng khai thác",
        url: "/category_shipExploitBrand",
        icon: "TagsOutlined",
      },
      {
        id: "danhmuc-03",
        text: "Danh mục kích cỡ",
        url: "/category_sizeContainer",
        icon: "FontSizeOutlined",
      },
      {
        id: "danhmuc-04",
        text: "Danh mục công việc",
        url: "/category_task",
        icon: "ProfileOutlined",
      },
      {
        id: "danhmuc-05",
        text: "Danh mục loại hàng hóa",
        url: "/category_commoditiesType",
        icon: "ProductOutlined",
      },
      {
        id: "danhmuc-06",
        text: "Danh mục hướng",
        url: "/category_directionContainer",
        icon: "BarsOutlined",
      },
      {
        id: "danhmuc-07",
        text: "Danh mục trạng thái container",
        url: "/category_statesContainer",
        icon: "ExclamationOutlined",
      },
      // {
      //   id: "danhmuc-08",
      //   text: "Danh mục lịch trình tàu",
      //   url: "/category_shipExploitBrand",
      //   icon: "ScheduleOutlined",
      // },
      {
        id: "danhmuc-09",
        text: "Danh mục cảng",
        url: "/category_portsList",
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
        icon: "FundOutlined",
      },
      {
        id: "bieucuoc-02",
        text: "Hợp đồng",
        url: "/hợp-đồng",
        icon: "FileTextOutlined",
      },
      {
        id: "bieucuoc-03",
        text: "Cấu hình ngày lễ",
        url: "/cấu-hình-ngày-lễ",
        icon: "CalendarOutlined",
      },
      {
        id: "bieucuoc-04",
        text: "Cấu hình lưu bãi",
        url: "/cấu-hình-lưu-bãi",
        icon: "BookOutlined",
      },
      {
        id: "bieucuoc-05",
        text: "Cấu hình sử dụng điện",
        url: "/cấu-hình-sử-dụng-điện",
        icon: "DeleteRowOutlined",
      },
    ],
  },
  {
    text: "Quản lý lệnh",
    icon: "FormOutlined",
    url: "/command_manager",
    subMenu: [
      {
        id: "qll-01",
        text: "Cập nhật thông tin lệnh",
        url: "/approve_command",
        icon: "ExportOutlined",
      },
      {
        id: "qll-02",
        text: "Duyệt lệnh",
        url: "/update_command_Infomation",
        icon: "CheckSquareOutlined",
      },
    ],
  },
  {
    text: "Quản trị hệ thống",
    icon: "BorderOutlined",
    url: "/system_manager",
    subMenu: [
      {
        id: "qtht-01",
        text: "Quản lý tải khoản",
        url: "/SystemManageUser",
        icon: "WalletOutlined",
      },
      {
        id: "qtht-02",
        text: "Quản lý nhóm tài khoản",
        url: "/SystemManageGroup",
        icon: "TableOutlined",
      },
      {
        id: "qtht-03",
        text: "Quản lý kết nối",
        url: "/quản-lý-kết-nối",
        icon: "SubnodeOutlined",
      },
      {
        id: "qtht-04",
        text: "Quản lý phân quyền",
        url: "/SystemManagerGroupPermission",
        icon: "SwitcherOutlined",
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
        icon: "FileWordOutlined",
      },
      {
        id: "tkbc-02",
        text: "Hóa đơn theo tác nghiệp",
        url: "/hóa-đơn-theo-tác-nghiệp",
        icon: "FilePptOutlined",
      },
      {
        id: "tkbc-03",
        text: "Tổng hợp doanh thu hóa đơn thu ngay",
        url: "/tổng-hợp-doanh-thu-hóa-đơn-thu-ngay",
        icon: "FileMarkdownOutlined",
      },
      {
        id: "tkbc-04",
        text: "Container biến động",
        url: "/container-biến-động",
        icon: "FolderOutlined",
      },
      {
        id: "tkbc-05",
        text: "Thống kê TOS",
        url: "/thống-kê-tos",
        icon: "DotChartOutlined",
      },
      {
        id: "tkbc-06",
        text: "Quản lý hóa đơn tích hợp HTKT",
        url: "/quản-lý-hóa-đơn-tích-hợp-htkt",
        icon: "AuditOutlined",
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
        icon: "BranchesOutlined",
      },
      {
        id: "thanhtoan-02",
        text: "thanh toán bằng thẻ ATM",
        url: "/thanh-toán-thẻ-atm",
        icon: "IdcardOutlined",
      },
      {
        id: "thanhtoan-03",
        text: "Thanh toán hộ bằng internet banking",
        url: "/thanh-toán-hộ-internet-banking",
        icon: "GlobalOutlined",
      },
      {
        id: "thanhtoan-04",
        text: "Tra cứu thanh toán dịch vụ",
        url: "/tra-cứu-thanh-toán-dịch-vụ",
        icon: "SearchOutlined",
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
    url: "/tracking",
    subMenu: [
      {
        id: "tracuu-01",
        text: "Tra cứu thông tin container",
        url: "/tracking_container",
        icon: "RadiusBottomleftOutlined",
      },
      {
        id: "tracuu-02",
        text: "Tra cứu danh sách container",
        url: "/tracking_container_list",
        icon: "FileSearchOutlined",
      },
      {
        id: "tracuu-03",
        text: "Tra cứu thông tin tàu",
        url: "/tra-cứu-thông-tin-tàu",
        icon: "DesktopOutlined",
      },
      {
        id: "tracuu-04",
        text: "Tra cứu vận đơn (BillNo)",
        url: "/tracking_bill",
        icon: "FileSearchOutlined",
      },
      {
        id: "tracuu-05",
        text: "Tra cứu booking",
        url: "/tracking_booking",
        icon: "FileSearchOutlined",
      },
      {
        id: "tracuu-06",
        text: "Tra cứu thông tin số HouseBill",
        url: "/tracking_housebill",
        icon: "LaptopOutlined",
      },
      {
        id: "tracuu-07",
        text: "Tra cứu thông tin thanh toán",
        url: "/tra-cứu-thông-tin-thanh-toán",
        icon: "LaptopOutlined",
      },
      {
        id: "tracuu-08",
        text: "Tra cứu thông tin phiếu thu",
        url: "/tra-cứu-thông-tin-phiếu-thu",
        icon: "CalculatorOutlined",
      },
      {
        id: "tracuu-09",
        text: "Tra cứu thời gian thực hiện",
        url: "/tra-cứu-thời-gian-thực-hiện",
        icon: "CarryOutOutlined",
      },
      {
        id: "tracuu-10",
        text: "Tra cứu Edo",
        url: "/tracking_edo",
        icon: "CarryOutOutlined",
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
