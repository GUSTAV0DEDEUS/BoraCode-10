import styled from "styled-components";

export const ContentCard = styled.div`
  grid-row: 1;
  grid-column: 2;
  display: flex;
  gap: 2.4rem;
  @media screen and (max-width: 978px){
    grid-row: 3;
    grid-column: 1;
  }
  @media screen and (max-width: 388px){
    flex-direction: column;
  }
`;
export const Card = styled.div`
  padding: 3.2rem 1.6rem 1.6rem;
  background-color: var(---background-color);
  width: 27.7rem;
  height: 24.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  .title {
    display: inline-flex;
    align-items: flex-end;
    gap: 8px;
    font-size: 1.6rem;
    font-weight: bold;
    color: var(---font-secondary-color);
    align-self: center;
  }
  .box {
    display: grid;
    justify-content: center;
    justify-items: center;
    gap: 4px;
  }
  .box p {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.2rem;
    color: #87ebcd;
  }
  .box h2 {
    font-weight: 700;
    font-size: 4rem;
    color: var(---font-tertiary-color);
    line-height: 4.8rem;
  }
  .content {
    display: flex;
    justify-content: space-between;
  }
  .content .item {
    display: grid;
    justify-items: center;
  }
  .content .item p {
    font-weight: 700;
    font-size: 1.4rem;
    color: #87ebcd;
  }
  .content .item p:nth-last-of-type(1) {
    color: var(---font-tertiary-color);
  }
  .chart {
    display: grid;
    justify-items: center;
    margin: 0 auto;
    position: relative;
    row-gap: 1.2rem;
    width: 21.6rem;

  }
  .chart img{
    width: 100%;
  }
  .sun{
    position: absolute;
    left: 0;
    overflow: hidden;
    height: 10.8rem;
    width: 14.4rem;
  }
  .sun::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    width: 21.6rem;
    height: 21.6rem;
    background: linear-gradient(
      180deg,
      rgba(251, 219, 96, 0.2) 0%,
      rgba(251, 219, 96, 0) 101.89%
    );

    mask: linear(0deg, white 50%, transparent 0%);
    -webkit-mask: linear(0deg, white 50%, transparent 0%);

    rotate: 0deg;
  }
  .chart::before {
    content: "";
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    background: #f6c833;
    border-radius: 50%;
    top: .4rem;
    right: 7.2rem;
  }
  .chart .text {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .chart .text p {
    font-weight: 400;
    color: var(---font-primary-color);
    font-size: 1.2rem;
  }
  .chart span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 700;
    color: var(---font-primary-color);
    font-size: 1.4rem;
  }

`;
