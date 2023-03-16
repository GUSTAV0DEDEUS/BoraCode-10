import styled from "styled-components";

export const Card = styled.div`
  grid-row: 2;
  height: 21.2rem;
  width: 100%;
  border-radius: 10px;
  padding: 4rem;
  background: var(---background-color);
  .content{
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
  .content .item{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .content .item h2{
    font-size: 1.4rem;
    font-weight: 700;
    color: var(---font-secondary-color);
  }
  .content .item p{
    font-size: 1.6rem;
    font-weight: 700;
    color: var(---font-quaternary-color);
  }
  .content .item p span{
    color: var(---font-primary-color);
  }
  @media screen and (max-width: 380px){
    height: auto;
    .content{
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
    }
  }
`