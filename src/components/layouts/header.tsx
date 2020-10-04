import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { useDispatch } from "react-redux";
import { checkAuthStatus, signOut } from "../../store/user/action";

const { Header } = Layout;

enum Key {
  Home = "home",
  News = "news",
  Login = "login",
  None = " ",
}

const HeaderApp: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedKey, setSelectedKey] = useState<Key>(Key.None);
  const location = useLocation();
  //getting a key when updating, for the menu
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setSelectedKey(Key.Home);
        break;
      case "/news":
        setSelectedKey(Key.News);
        break;
      case "/login":
        setSelectedKey(Key.Login);
        break;
      default:
        break;
    }
  }, [location.pathname]);
  const handleClick = useCallback((e) => {
    setSelectedKey(e.key);
  }, []);
  const logoutClickHandler = () => {
    dispatch(signOut());
  };
  return (
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        onClick={handleClick}
        selectedKeys={[selectedKey]}
      >
        <Menu.Item key={Key.Home}>
          <Link to={"/"}>Главная</Link>
        </Menu.Item>
        <Menu.Item key={Key.News}>
          <Link to={"news"}>Новости</Link>
        </Menu.Item>
        <Menu.Item key={Key.Login}>
          {!checkAuthStatus() ? (
            <Link to={"login"}>Вход</Link>
          ) : (
            <Link to={"/"} onClick={logoutClickHandler}>
              Выйти
            </Link>
          )}
        </Menu.Item>
      </Menu>
    </Header>
  );
};
export default HeaderApp;
