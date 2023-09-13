import "./index.scss";
import logo from "../../assets/fire-dev_SVG.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} width='150'/>
      <div className="header__container">
        <p>Organização</p>
        <div className="header__container__option">
        <p>tarefas</p>
      </div>
      </div>
    </div>
  );
};

export default Header;