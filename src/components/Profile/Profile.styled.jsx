import styled from '@emotion/styled';

export const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 320px;
  margin: 50px auto 50px auto;
  text-align: center;
`;

export const Avatar = styled.img`
  display: block;
  padding-top: 10px;
  width: 100%;
  border-radius: 50% 50%;
`;

export const Label = styled.span`
  color: grey;
  font-size: 18px;
`;

export const UserName = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: black;
`;

export const StatsList = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  list-style: none;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  border-bottom: none;
  background-color: beige;
`;

export const Quantity = styled.span`
  color: black;
`;
