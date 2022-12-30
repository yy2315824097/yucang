/* eslint-disable no-unused-vars */
import styles from "./style.scss";
import team1 from "@/assets/img/team-1.jpg";
import team2 from "@/assets/img/team-2.jpg";
import team3 from "@/assets/img/team-3.jpg";
import team4 from "@/assets/img/team-4.jpg";
import advantages1 from "@/assets/img/advantages-1.png";
import advantages2 from "@/assets/img/advantages-2.png";
import advantages3 from "@/assets/img/advantages-3.png";
import advantages4 from "@/assets/img/advantages-4.png";
import responsibility1 from "@/assets/img/responsibility-1.png";
import responsibility2 from "@/assets/img/responsibility-2.png";
import responsibility3 from "@/assets/img/responsibility-3.png";

export default function Team(props) {
  return (
    <div>
      {/* 团队介绍 */}
      <div className="team-box">
        <div className="content-box flex jc-sb">
          <div className="team-info">
            <h3>
              团队介绍 <span>/ team introduction</span>
            </h3>
            <img src={team1} alt="" />
            <ul className="flex ai-c jc-sb">
              <li>
                <img src={team2} alt="" />
              </li>
              <li>
                <img src={team3} alt="" />
              </li>
              <li>
                <img src={team4} alt="" />
              </li>
            </ul>
          </div>
          <div className="advantages">
            <h3 className="flex ai-c jc-c">企业优势</h3>
            <ul className="flex flex-d">
              <li className="flex ai-c">
                <div className="img-box">
                  <img src={advantages1} alt="" />
                </div>
                <p>
                  我们凭借着专业标准的规模化生产、优质的产品以及快捷周到的服务,使企业迅速崛起成为行业内的领军企业。
                </p>
              </li>
              <li className="flex ai-c">
                <div className="img-box">
                  <img src={advantages2} alt="" />
                </div>
                <p>
                  我们已建成保定地区唯一符合国家环保要求具有自动收尘系统的成品灰储存罐装车生产线。
                </p>
              </li>
              <li className="flex ai-c">
                <div className="img-box">
                  <img src={advantages3} alt="" />
                </div>
                <p>
                  我们具有技艺精湛的石料生产工艺，专业先进的生产设备和已达到国际领先水平的环保设施。
                </p>
              </li>
              <li className="flex ai-c">
                <div className="img-box">
                  <img src={advantages4} alt="" />
                </div>
                <p>
                  公司位于保定市易县裴山镇北白虹村,具有明显的地缘优势(距离北京新机场仅90余公里,距离雄安新区仅80公里),其储量及生产能力可以满足新机场、雄安新区在高速公路、铁路、桥梁、水利水电、住房等基建方面的建筑需求。
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 社会责任 */}
      <div className="responsibility-box">
        <div className="content-box flex jc-sb ai-c">
          <div className="left-box">
            <div className="title">
              <h2>社会责任</h2>
              <h3>RESPONSIBILITY</h3>
            </div>
          </div>
          <ul className="flex jc-sb ">
            <li>
              <div className="img-box">
                <img src={responsibility1} alt="" />
              </div>
              <p>赞助易县飞跃羽毛球队</p>
            </li>
            <li>
              <div className="img-box">
                <img src={responsibility2} alt="" />
              </div>
              <p>资助东洛平村贫困户</p>
            </li>
            <li>
              <div className="img-box">
                <img src={responsibility3} alt="" />
              </div>
              <p>资助内部职工子女</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
