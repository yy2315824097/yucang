/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import styles from "./style.scss";
import companyImg from "@/assets/img/company.jpg";
import iconDevelop from "@/assets/img/icon-develop.png";
import iconEnterprise from "@/assets/img/icon-enterprise.png";
import iconOrganize from "@/assets/img/icon-organize.png";

export default function Introduce(props) {
  return (
    <div className="introduce-box">
      <div className="content-box">
        <h3>
          公司介绍 <span>/ Group to introduce</span>
        </h3>
        <div className="flex jc-sb">
          <img src={companyImg} alt="" className="left-img"/>
          <div className="information">
            <p>
              河北易县玉昌建材有限公司座落于古老而文明的易水河畔，西倚太行山脉，东临冀中平原，位于河北易县。公司成立于2013年，是一家专业致力于生产加工销售建筑石料用石、制造销售石灰材料的公司。目前建有4座环保机械立窑，2条大型石料生产线，拥有年产400万吨石料、40万吨石灰的生产能力。
            </p>
            <ul className="flex jc-sb ai-c">
              <li>
                <img src={iconEnterprise} />
                <span>生命第一</span>
              </li>
              <li></li>
              <li>
                <img src={iconDevelop} />
                <span>环保优先</span>
              </li>
              <li></li>
              <li>
                <img src={iconOrganize} />
                <span>组织机构</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
