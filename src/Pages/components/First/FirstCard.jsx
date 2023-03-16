import { Card, TextCard, Temperature, Cards } from "./styles"
import WeatHer from '../../../assets/weather.svg'
import IconPin from '../../../assets/iconPin.svg'
import IconWind from '../../../assets/wind.svg'
import IconHumidity from '../../../assets/iconHumidity.svg'
import IconRain from '../../../assets/weather2.svg'

export default function FirstCard(){
  return (
    <>
      <Card>
        <img src={WeatHer} alt="Ícone representando duas nuvens" id="icon"/>
        <TextCard>
          <img src={IconPin} alt="ícone de um pin do google maps" />
          Rio do Sul, SC
        </TextCard>
        <Temperature>
          <h1>18 <span>°C</span> </h1>
          <div className="estimates">
            <span className="first">22°</span>
            <span className="second">16°</span>
          </div>
        </Temperature>
        <Cards>
          <div className="box">
            <img src={IconWind} alt="" />
            <div className="text">  
              <h2>Vento</h2>
              <p><span>17</span> Km/h</p>
            </div>
          </div>
          <div className="box">
          <img src={IconHumidity}alt="" />
            <div className="text">
              <h2>Umidade</h2>
              <p><span>31</span> %</p>
            </div>
          </div>
          <div className="box">
          <img src={IconRain} alt="" />
            <div className="text">
              <h2>Chuva</h2>
              <p><span>10</span> %</p>
            </div>
          </div>
        </Cards>
      </Card>
    </>
  )
}