import {Card, ContentCard} from './styles'
import IconLeaf from '../../../assets/iconLeaf.svg'
import IconTime from '../../../assets/iconTime.svg'
import chart from '../../../assets/chart.svg'

export default function SecondCard(){
  return(
    <ContentCard>
      <Card>
        <p className='title'>
          <img src={IconLeaf} alt="ícone de uma folha" /> 
          Qualidade do ar
        </p>
        <div className="box">
          <p>Boa</p>
          <h2>21</h2>
        </div>
        <div className="content">
          <div className="item">
            <p>12.9</p>
            <p>PM2.5</p>
          </div>
          <div className="item">
            <p>12.9</p>
            <p>PM10</p>
          </div>
          <div className="item">
            <p>2.1</p>
            <p>sO₂</p>
          </div>
          <div className="item">
            <p>1.4</p>
            <p>NO₂</p>
          </div>
          <div className="item">
            <p>21.2</p>
            <p>O₃</p>
          </div>
          <div className="item">
            <p>0.7</p>
            <p>CO</p>
          </div>
        </div>
      </Card>
      <Card>
        <p className="title">
          <img src={IconTime} alt="ícone de uma relógio" /> 
          Horário do sol
        </p>
        <div className="chart">
          <div className="sun"></div>
          <img src={chart} alt="Gráfico"/>
          <div className="text">
            <p>06:12 </p>
            <p>18:52 </p>
          </div>
          <span>16:01</span>
        </div>
      </Card>
    </ContentCard>
  )
}