interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expences: Expense[];
  handleDelete: (id: number) => void;
}

export default function ExpenseList({ expences, handleDelete }: Props) {
  return (
    <>
      <h1 className="text-align-centre">Expense Tracker App</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {expences.map((expence) => (
            <tr key={expence.id}>
              <td>{expence.description}</td>
              <td>{expence.amount}</td>
              <td>{expence.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(expence.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td colSpan={3}>
              {expences
                .reduce((acc, expence) => acc + expence.amount, 0)
                .toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
