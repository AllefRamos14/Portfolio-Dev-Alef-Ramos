import styled from "styled-components";

export const Header = styled.header`
  padding: 15px ;
  border-radius: 20px;
  

`;

export const Container = styled.div`


  .title {
    color: #ff3c3c;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
  
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
  }


   @media (max-width: 451px) {
.title {
  display: block;
}

li a {
  font-size: 20px;
  margin-left: 30px;
  text-decoration: none;
}


/* ===== Tablet ===== */
@media (max-width: 586px) {
  
  .title {
    display: none;
  }

  li a {
    font-size: 18px;
    margin-left: 20px;
  }

}


/* ===== Celular pequeno ===== 451 */
@media (max-width: 360px) {

  li a {
    font-size: 15px;
    margin-left: 2px;
    
  } 

}
 
  }

`;

export const Li = styled.li`
  font-weight: 400;
  cursor: pointer;
  font-size: 19px;
  position: relative;

  a {
    text-decoration: none;
    color: #fff;
  }

  &::after {
    content: '';
    height: 3px;
    width: ${({ $isActive }) => ($isActive ? '100%' : 0)};
    background-color: #ff3c3c;
    position: absolute;
    bottom: -7px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.6s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 586px) {
  
  &::after {
    transform: translateX(-35%);
  }
    
  }

`;
