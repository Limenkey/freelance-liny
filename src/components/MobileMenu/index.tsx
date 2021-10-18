import { Drawer } from "antd";
import { useState } from "react";
import Filters from "../Filters";

import './mobilemenu.scss'


const MobileMenu = () => {
    const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const onClick = () => {
      !visible ? showDrawer() : onClose()
  }
  return (
    <>
      <button type="button" onClick={()=> onClick()}>
        <div className={`menu-btn_dash`}></div>
      </button>
      <Drawer title="Genres" placement="right" onClose={onClose} visible={visible} className="menu-drawer">
        <Filters/>
        <div className="socials-container-menu">
          <a href="https://wa.me/79508078587" target="_blank" rel="noreferrer">
              <img src="/images/icons/whatsapp.svg" alt="WhatsApp"/>
          </a>
          <a href="https://t.me/timofeeva_ph" target="_blank" rel="noreferrer">
              <img src="/images/icons/telegram.svg" alt="Telegram" />
          </a>
          <a href="https://instagram.com/timofeeva_ph?igshid=tmv6go3vlw2d" target="_blank" rel="noreferrer">
              <img src="/images/icons/instagram.svg" alt="Instagram"/>
          </a>
        </div>  
      </Drawer>
    </>
  );
}




export default MobileMenu