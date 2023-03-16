import { Card } from "./style";
import IconWeather from "../../../assets/weather.svg";
import IconSun from "../../../assets/sun.svg";
import IconWeather2 from "../../../assets/rain.svg";
import IconStorm from "../../../assets/storm.svg";
import IconSunligth from "../../../assets/sunlight.svg";

export default function ThirdCard() {
  return (
    <Card>
      <div className="content">
        <div className="item">
          <h2>Amanhã</h2>
          <img src={IconWeather} alt="ícone do Clima nublado " />
          <p>
            <span>21°</span> 16°
          </p>
        </div>
        <div className="item">
          <h2>Sexta-Feira</h2>
          <img src={IconWeather2} alt="ícone do Clima nublado " />
          <p>
            <span>28°</span> 20°
          </p>
        </div>
        <div className="item">
          <h2>Sábado</h2>
          <img src={IconSun} alt="ícone do Clima ensolarado " />
          <p>
            <span>25°</span> 21°
          </p>
        </div>
        <div className="item">
          <h2>Amanhã</h2>
          <img src={IconStorm} alt="ícone do Clima nublado " />
          <p>
            <span>20°</span> 14°
          </p>
        </div>
        <div className="item">
          <h2>Amanhã</h2>
          <img src={IconSunligth} alt="ícone do Clima nublado " />
          <p>
            <span>24°</span> 18°
          </p>
        </div>
      </div>
    </Card>
  );
}
