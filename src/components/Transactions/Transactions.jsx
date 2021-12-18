import { TransactionsHistory } from 'components/Transactions-history/Transactions-history';

export const Transactions = ({ events }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {events.map(event => (
        <TransactionsHistory
          key={event.id}
          type={event.type}
          amount={event.amount}
          currency={event.currency}
        />
      ))}
    </table>
  );
};
