import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 30px 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Exp = styled.div`
  background-color: #1a1a1a;
  color: #fff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(255, 60, 60, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 15px rgba(255, 60, 60, 0.4);
  }

  h3 {
    display: flex;
    align-items: center;
    color: #ff3c3c;
    margin-bottom: 8px;
    font-size: 1.1rem;
  }

  p {
    margin: 4px 0;
    line-height: 1.4;
    font-size: 0.88rem;
  }

  ul {
    margin-top: 6px;
    padding-left: 18px;

    li {
      margin-bottom: 4px;
      font-size: 0.85rem;
      list-style-type: '✔️ ';
    }
  }

  svg{
    color: #ffff;
    margin-right: 8px;
    flex-shrink: 0;
  
  }
`;

