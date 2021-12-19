import propTypes from 'prop-types';
import { Body } from './Transactions-history.styled';

export const TransactionsHistory = ({ id, type, amount, currency }) => {
  return (
    <Body key={id}>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency.slice(0, 3)}</td>
      </tr>
    </Body>
  );
};

TransactionsHistory.propTypes = {
  id: propTypes.string,
  type: propTypes.string,
  amount: propTypes.string,
  currency: propTypes.string,
};
