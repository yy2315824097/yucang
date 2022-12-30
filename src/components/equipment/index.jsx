/* eslint-disable no-unused-vars */
import styles from "./style.scss";
import equipment1 from "@/assets/img/equipment-1.jpg";
import equipment2 from "@/assets/img/equipment-2.jpg";
import equipment3 from "@/assets/img/equipment-3.jpg";
import equipment4 from "@/assets/img/equipment-4.jpg";

export default function Eqipment(props) {
  return (
    <div className="eqipment-box">
      <div className="content-box">
        <div className="title">技术设备 </div>
        <div className="flex">
          <div className="left-box">
            <img src={equipment1} alt="" />
            <p>
              我公司秉承先进环保理念，购买并安装了国内最先进的环保机立窑制灰设备，建有4条保定地区唯一一家具有自动收尘系统的成品灰储存罐装车生产线，避免装卸过程中的二次扬尘；对生产过程中产生的烟气，采用湿式双碱法脱硫工艺，经脱硫除尘处理后能够实现稳定达标排放。
            </p>
          </div>
          <ul className="flex-1 flex flex-d jc-sb">
            <li className="flex">
              <img src={equipment2} alt="" />
              <p>
                石料加工生产采用自动化流水线，所有机械设备全部安装在密闭车间内，在每个产生粉尘点位的上方全部配套安装了集尘罩，经布袋收尘器处理后回收利用，降低了粉尘的无组织排放。车间内部下料点配有喷淋装置，喷洒水雾以增强空气湿度，抑制粉尘产生，改善车间生产环境。
              </p>
            </li>
            <li className="flex">
              <img src={equipment3} alt="" />
              <p>
                对厂区裸露的地面和空闲位置分步骤、分区域的进行硬化和绿化，另外我公司还专门购入了绿化洒水车，及时对公路至厂区的运输道路进行全方位地面喷洒，减少了车辆运输过程中产生的二次扬尘。
              </p>
            </li>
            <li className="flex">
              <img src={equipment4} alt="" />
              <p>
                我公司现正在对入厂道路路基进行修整和加宽处理，年底前将对其进行全面硬化，并加装自动喷淋系统，以达到抑尘最佳效果。矿区运输道路配有自动喷淋装置，矿石装载平台配有雾炮，发运销售单元配有清洗平台，真正做到了车辆装运清洁、出入干净。
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
