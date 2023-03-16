import styled from "styled-components";

export const ContentCard = styled.div`
  row-gap: 1;
  grid-column: 2;
  display: flex;
  gap: 2.4rem;
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
    position: relative;
    row-gap: 1.2rem;
  }
  .chart::before {
    content: "";
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    background:#f6c833;
    border-radius: 50%;
    top: 6px;
    right: 72px;
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
