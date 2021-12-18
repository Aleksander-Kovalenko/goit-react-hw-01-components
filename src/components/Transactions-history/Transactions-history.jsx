export const TransactionsHistory = ({ id, type, amount, currency }) => {
  return (
    <tbody key={id}>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency.slice(0, 3)}</td>
      </tr>
    </tbody>
  );
};
