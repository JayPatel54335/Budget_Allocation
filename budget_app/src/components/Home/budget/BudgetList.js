import React from 'react';
import './BudgetList.css'

const BudgetList = ({ budgets, onRemove,currency}) => {
  const totalAmount = budgets.reduce((total, budget) => total +  parseFloat(budget.amount),0);
  return (
    <div className='card'>
      <div className='cbg'></div>
    <table>
    <thead>
      <tr className='tt'>
        <th>Expanse Name</th>
        <th>Amount</th>
        {/* <th>Currency</th> */}
        <th>Expanse Date</th>
        <th className='act'>Action</th>
      </tr>
    </thead>
    <tbody>
      {budgets.map((budget, index) => (
        <tr key={index}>
          <td>{budget.title}</td>
          <td>{currency}{budget.amount}</td>
          <td>{budget.date.toLocaleDateString()}</td>
          <td>
            <button className='rem' onClick={() => onRemove(index)}>Remove</button>
          </td>
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr className='ft'>
        <th>
          Total 
        </th>
        <th>{currency}{totalAmount}</th>
      </tr>
    </tfoot>
  </table>
  </div>
  );
};

export default BudgetList;