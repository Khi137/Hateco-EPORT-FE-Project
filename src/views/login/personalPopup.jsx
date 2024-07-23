import React from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, GlobalOutlined } from '@ant-design/icons';

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
      <div className="logged-user-menu color-style-bright">
        <div className="logged-user-avatar-info">
          <div className="avatar-w">
            <Avatar icon={<UserOutlined />} />
          </div>
          <div className="logged-user-info-w">
            <div className="logged-user-name">{user.UserName}</div>
            <div className="logged-user-role">{user.Role}</div>
          </div>
        </div>
        <ul>
          <li><Link to="/"><i>Trang chủ</i></Link></li>
          <li><Link to="/personal/personalInfo"><i>Thông tin người dùng</i></Link></li>
          <li>
            <Dropdown 
              overlay={this.renderLangMenu()} 
              trigger={['click']}
              placement="bottomLeft"
              getPopupContainer={(triggerNode) => triggerNode.parentNode}
            >
              <a className="ant-dropdown-link m-lang-selector" onClick={e => e.preventDefault()}>
                <GlobalOutlined style={{ marginRight: '8px' }} />
                {currentLang.text} <img src={currentLang.imgSrc} alt={currentLang.text} style={{ width: '20px', marginLeft: '8px' }} />
              </a>
            </Dropdown>
          </li>
          <li>
            <Link to="/login">
              <i className="os-icon os-icon-signs-11"></i>
              <span>Đăng xuất</span>
            </Link>
          </li>
        </ul>
      </div>
    );

    return (
      <Dropdown overlay={menu} trigger={['hover']}>
        <div className="user-info-dropdown">
          <Avatar icon={<UserOutlined />} />
          <span className="username">{user.UserName}</span>
        </div>
      </Dropdown>
    );
  }
}

export default PersonalPopup;
