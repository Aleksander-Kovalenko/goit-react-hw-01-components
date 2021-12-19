import styled from '@emotion/styled';

export const ItemHistory = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Label = styled.span`
  font-size: 18px;
  font-width: 500px;
`;
