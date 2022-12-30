// eslint-disable-next-line no-unused-vars
import styles from "./style.scss";
import stone1 from "@/assets/img/stone-1.jpg";
import stone2 from "@/assets/img/stone-2.jpg";
import stone3 from "@/assets/img/stone-3.jpg";
import stone4 from "@/assets/img/stone-4.jpg";
import stone5 from "@/assets/img/stone-5.jpg";
import stone6 from "@/assets/img/stone-6.jpg";

export default function Product(props) {
  return (
    <div className="product-box">
      <div className="content-box">
        <div className="title-box">
          <h2>
            <span>
              <strong>THE MAIN PRODUCTS</strong>
            </span>
          </h2>
          <h3>
            <span>
              <strong>主营产品</strong>
            </span>
          </h3>
        </div>
        <ul className="flex ai-c">
          <li>
            <div className="img-box">
              <img src={stone1} alt="" />
            </div>
            <h3>3cm-8cm</h3>
          </li>
          <li>
            <div className="img-box">
              <img src={stone2} alt="" />
            </div>
            <h3>1cm-3cm</h3>
          </li>
          <li>
            <div className="img-box">
              <img src={stone3} alt="" />
            </div>
            <h3>1cm-2cm</h3>
          </li>
          <li>
            <div className="img-box">
              <img src={stone4} alt="" />
            </div>
            <h3>0.5cm-1cm</h3>
          </li>
          <li>
            <div className="img-box">
              <img src={stone5} alt="" />
            </div>
            <h3>0.8cm</h3>
          </li>
          <li>
            <div className="img-box">
              <img src={stone6} alt="" />
            </div>
            <h3>石粉</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
