import styled, { keyframes } from "styled-components";

const entrar = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  gap: 20px;
  padding: 30px 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Exp = styled.div`
  position: relative;
  background-color: #1a1a1a;
  color: #fff;
  padding: 16px 16px 16px 20px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(255, 60, 60, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;

  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease,
              box-shadow 0.3s ease, transform 0.3s ease;

  &.visivel {
    opacity: 1;
    transform: translateY(0);
    transition-delay: ${({ $delay }) => $delay || "0s"};
  }

  /* acento lateral — identidade visual sutil, sem pesar numa página densa de texto */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 3px;
    background: #ff3c3c;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 15px rgba(255, 60, 60, 0.4);
  }

  &.visivel:hover {
    transform: scale(1.02) translateY(0);
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
    list-style: none;
    margin-top: 6px;
    padding-left: 0;

    li {
      position: relative;
      margin-bottom: 6px;
      padding-left: 22px;
      font-size: 0.85rem;
      line-height: 1.4;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.35em;
        width: 10px;
        height: 10px;
        background: #ff3c3c;
        clip-path: polygon(
          14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 45% 62%
        );
      }
    }
  }

  svg {
    color: #fff;
    margin-right: 8px;
    flex-shrink: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: box-shadow 0.3s ease;

    &.visivel:hover {
      transform: scale(1.02);
    }
  }
`;