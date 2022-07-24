import styled from "styled-components";

export const Container = styled.button`

  width: 100%;
  max-width: 300px;
  height: 53px;

  background-color: ${({ theme }) => theme.COLORS.BLUE};
  border-radius: 6px;

  >a{
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.WHITE};
}
`
