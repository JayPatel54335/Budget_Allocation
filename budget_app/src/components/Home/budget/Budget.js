import React, { useState } from 'react'
import './Budget.css';
import 'react-datepicker/dist/react-datepicker.css'
import BudgetList from './BudgetList';
import { FaPrint, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Budget = () => {
  const [budgets, setBudgets] = useState([]);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('₹');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const addBudget = () => {
    if (title === null || title === "") {
      alert('Expense name cannot be empty');
      return;
    }
    if (amount === null || amount === "") {
      alert('Amount cannot be empty');
      return;
    }
    const newBudget = {name, title, amount, currency, date: selectedDate };
    setBudgets([...budgets, newBudget]);
    setName('')
    setTitle('');
    setAmount('');
    setSelectedDate(new Date());
  };
  const removeBudget = (index) => {
    const updatedBudgets = [...budgets];
    updatedBudgets.splice(index, 1);
    setBudgets(updatedBudgets);
  }; 

  const handlePrint = () => {
    window.print();
  };
  const handleAmountChange = (e) => {
    const inputValue = parseInt(e.target.value);
    setAmount(inputValue);

  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <div className='tb'>
      <div className='bg'></div>
      <div className='mainb'>
        <div className='titelb'> Let's Manage Budget</div>
        <div className='mainc'>
          <div className="add-budget">
            <input type='text' maxLength={20} placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></input>
            <input type="text" maxLength={30}
              value={title} onChange={(e) => setTitle(e.target.value)}
              placeholder="Expanse Type" />            
            <input type="number"
              value={amount}
              onChange={handleAmountChange}
              // onChange={(e) => setAmount(e.target.value)} 
              placeholder="Amount"
              min={0} max={99999999999999} />
              <input type='date' 
              selected={selectedDate}
              value={selectedDate.toISOString().split('T')[0]}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => handleDateChange(new Date(e.target.value))}              
              dateFormat="dd/MM/yyyy" ></input>
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option value="₹">₹(Rupee)</option>
              <option value="$">$(Dollar)</option>
              <option value="€">€(Euro)</option>
              <option value="£">£(Pound)</option>
              {/* Add other currency options here */}
            </select>
            <button className='adb' onClick={addBudget}>Add Budget</button>
            <FaPrint className='pri' onClick={handlePrint} size={29}></FaPrint>
          </div>
          <BudgetList name={name} budgets={budgets} currency={currency} onRemove={removeBudget} selectedDate={selectedDate}/>
        </div>
        <div className='foot'>Thanks for using Budget Allocation App<br/> 
        <span> Click home to return <b>Home page.</b> <br/> <Link to='/' className='a active'><FaHome/></Link></span></div>
      </div>
    </div>
  )
}
export default Budget;





















            /* <DatePicker className='custom-datepicker'
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy" 
              /> */