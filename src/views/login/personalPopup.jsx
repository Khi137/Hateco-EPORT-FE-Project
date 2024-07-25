import React from 'react';
import { Avatar, Dropdown, Menu, Typography, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, GlobalOutlined, HomeOutlined, InfoCircleOutlined, LogoutOutlined } from '@ant-design/icons';

const { Text } = Typography;

const menuStyle = {
  backgroundColor: '#0065a1',
  padding: '20px',
  borderRadius: '0 0 8px 8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  minWidth: '250px',
};

const menuItemStyle = {
  backgroundColor: 'transparent',
  color: 'white',
  fontSize: '16px',
  padding: '10px 0',
};

class PersonalPopup extends React.Component {
  constructor(props) {
    super(props);
    const savedLang = JSON.parse(localStorage.getItem('lang'));
    const currentLang = savedLang ? {
      key: savedLang.iso2Code.toLowerCase(),
      text: savedLang.iso2Code,
      imgSrc: `https://gmd.cehcloud.net/assets/images/${savedLang.img}`
    } : {
      key: "vn",
      text: "VN",
      imgSrc: "https://gmd.cehcloud.net/assets/images/vietnam.png"
    };

    this.state = {
      user: {
        UserName: "dev ceh",
        Role: "developer"
      },
      currentLang: currentLang
    };
  }

  langData = {
    "vn": { "iso2Code": "VN", "img": "vietnam.png" },
    "en": { "iso2Code": "EN", "img": "uk.png" },
  };

  changeLang = (lng) => {
    if (lng + '' === "undefined") {
      lng = "vn";
    }
    const newLang = {
      key: lng,
      text: this.langData[lng].iso2Code,
      imgSrc: `https://gmd.cehcloud.net/assets/images/${this.langData[lng].img}`
    };
    this.setState({ currentLang: newLang });
    localStorage.setItem('lang', JSON.stringify(this.langData[lng]));
  }

  componentDidMount() {
    window.changeLang = this.changeLang;
  }

  componentWillUnmount() {
    delete window.changeLang;
  }

  renderLangMenu = () => (
    <Menu onClick={({ key }) => this.changeLang(key)}>
      {Object.keys(this.langData).map((lang) => (
        <Menu.Item key={lang}>
          <img
            src={`https://gmd.cehcloud.net/assets/images/${this.langData[lang].img}`}
            alt={lang}
            style={{ marginRight: '8px', width: '20px' }}
          />
          {this.langData[lang].iso2Code}
        </Menu.Item>
      ))}
    </Menu>
  );

  render() {
    const { user, currentLang } = this.state;

    const menu = (
      <Menu style={menuStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
          <Avatar size={64} icon={<UserOutlined />} style={{ marginBottom: '10px' }} />
          <Text strong style={{ color: 'white', fontSize: '18px' }}>{user.UserName}</Text>
          <Text style={{ color: 'white', opacity: 0.8, fontSize: '14px' }}>{user.Role}</Text>
        </div>
        <Menu.Item key="home" icon={<HomeOutlined />} style={menuItemStyle}>
          <Link to="/" style={{ color: 'white' }}>Trang chủ</Link>
        </Menu.Item>
        <Menu.Item key="profile" icon={<InfoCircleOutlined />} style={menuItemStyle}>
          <Link to="/personal/personalInfo" style={{ color: 'white' }}>Thông tin người dùng</Link>
        </Menu.Item>
        <Menu.Item key="language" icon={<GlobalOutlined />} style={menuItemStyle}>
          <Dropdown
            overlay={this.renderLangMenu()}
            trigger={['click']}
            getPopupContainer={(triggerNode) => triggerNode.parentNode}
          >
            <Space style={{ color: 'white', cursor: 'pointer' }} onClick={(e) => e.stopPropagation()}>

              <img src={currentLang.imgSrc} alt={currentLang.text} style={{ width: '20px', marginRight: '8px' }} />
              {currentLang.text}
            </Space>
          </Dropdown>
        </Menu.Item>
        <Menu.Item key="logout" icon={<LogoutOutlined />} style={menuItemStyle}>
          <Link to="/login" style={{ color: 'white' }}>Đăng xuất</Link>
        </Menu.Item>
      </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['hover']} placement="bottomRight" 
        overlayStyle={{ top: '0' }}>
          <Button type="text" style={{ height: 'auto', padding: '5px 10px' }}>
            <Space>
              <Avatar icon={<UserOutlined />} />
              <span style={{ color: '#333' }}>{user.UserName}</span>
            </Space>
          </Button>
        </Dropdown>
    );
  }
}

export default PersonalPopup;