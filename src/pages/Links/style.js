import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 20px;

  >header{
     margin-bottom: 10px;
    img{
      position: relative;
      width: 92.59px;
      height: 92.59px;
      border-radius: 50%;
      margin-bottom: 30px;
    }

    svg{
      position: relative;
      top: 104px;
      left: -8px;
    }
  }
span{
  color: rgba(0, 8, 47, 0.8);
  font-size: 18px;
  line-height: 150%;
    }
`