/* eslint-disable no-unused-vars */
import styles from "./style.scss";
import logo from "@/assets/img/logo.png";

export default function Header(props) {
  return (
    <div className="header-box flex ai-c">
      <div className="content-box flex jc-sb">
        <img src={logo} alt="logo" />
        <ul className="flex ai-c jc-sb">
          <li className="active">网站首页</li>
          <li>公司介绍</li>
          <li>主营产品</li>
          <li>战略合作</li>
          <li>团队介绍</li>
        </ul>
      </div>
    </div>
  );
}
