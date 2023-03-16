import styled from 'styled-components';
import backgroundCard from '../../../assets/card1.png';
export const Card = styled.div` 
  width: 48rem;
  height: 48rem;
  background: url(${backgroundCard}) no-repeat center;
  background-size: contain;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 3.2rem;
  padding-bottom: 1.2rem;
  justify-content: space-between;
  grid-row: 1/3;
  @media screen and (max-width: 978px){
    grid-row: 1;
  }
  #icon{
    position: absolute;
    top: -5rem;
    left: -5rem;
    width: 17.6rem;
    height: 17.6rem;
  }
`;

export const TextCard = styled.p`
  color: var(---font-quaternary-color);
  display: inline-flex;
  align-items: center;
  align-self: flex-end;
  margin-right: 3.2rem;
`;

export const Temperature = styled.div`
  display: grid;
  align-self: center;
  justify-items: center;
  padding-bottom: 20%;
  h1{
    font-size: 8.8rem;
    color: var(---font-primary-color);
    position: relative;
    font-weight: bold;
  }
  h1 span{
    position: absolute;
    top: 1.6rem;
    font-size: 2.4rem;
    color: var(---font-secondary-color);
    font-weight: bold;
  }
  span{
    font-size: 2rem;
    font-weight: bold;
  } 
  .first{
    color: var(---font-primary-color);
    margin-right: 4px;
  }
  .second{
    color: var(---font-secondary-color);
  }
`
export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.2rem;
  align-items: center;
  justify-self: flex-end;
  .box{
    background: rgba(102, 96, 200, .6);
    width: calc(100%/3 - .8rem);
    padding: 1.4rem 1.6rem;
    display: flex;
    gap: 1.2rem;
    border-radius: 6px;
  }
  .box .text h2{
    font-size: 1.2rem;
    color: var(---font-tertiary-color);
    font-weight: 400;
  }
  .box .text p{
    font-size: 1.4rem;
    color: var(---font-secondary-color);
    font-weight: 700;
  }
  .box .text p span {
    font-size: 1.8rem;
    color: var(---font-tertiary-color);
  }
`

