import ExpenseCategoryItem from "@/components/ExpenseCategoryItem";
import { CurrencyFormater } from "@/lib/utils";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

import { useState, useContext, useEffect } from "react";
import { financeContext } from "@/lib/store/finance-context";

import { AddIncomeModal } from "@/components/modals/AddIncomeModal";
import AddExpensesModal from "@/components/modals/AddExpensesModal";
import { authContext } from "@/lib/store/auth-context";
import SignIn from "@/components/SignIn";
import { signOut } from "firebase/auth";

export default function Home() 
{
  const [showAddIncomeModal, setShowAddIncomeModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  
  const [balance, setBalance] = useState(0);  
  
  const { expenses, income } = useContext(financeContext);
  const {user} = useContext(authContext);

  useEffect(() => {
    // Calculate total income
    const totalIncome = income.reduce((total, i) => {
      return total + Number(i.amount);
    }, 0);
    
    // Calculate total expenses by summing amounts in the items array
    const totalExpenses = expenses.reduce((total, e) => {
      const itemsTotal = e.items.reduce((itemTotal, item) => {
        return itemTotal + Number(item.amount);
      }, 0);
      return total + itemsTotal;
    }, 0);
  
    const newBalance = totalIncome - totalExpenses;
  
    console.log("Total Income:", totalIncome);
    console.log("Total Expenses:", totalExpenses);
    console.log("New Balance:", newBalance);
  
    setBalance(newBalance);
  }, [expenses, income]);
  
  if(!user){
    return <SignIn />;
  }

  return ( 
  <>  {/*React Fragment to contain div and main containners*/}
  {/* Add Income Modal */}
    <AddIncomeModal show = { showAddIncomeModal } onClose = { setShowAddIncomeModal } />
  
    {/* Add Expenses Modal */}
    <AddExpensesModal 
      show={showAddExpenseModal} 
      onClose = { setShowAddExpenseModal}/>

  <main className="container max-w-2xl px-6 py-6 mx-auto">
  
  <section className="py-3">
    <small className="text-gray-400 text-md">My Balance</small>
    <h2 className="text-4xl font-bold">{CurrencyFormater(balance)}</h2>
  </section>
  <section className="flex items-center py-3 gap-2">
    <button onClick = { () => {
      setShowAddExpenseModal(true)
    } } className="btn btn-primary">+ Expense</button>
    <button onClick = { () => {
      setShowAddIncomeModal(true)
      } } className="btn btn-primary-outline">+ Income</button>
  </section>

  {/* Expenses */}
  <section className="py-6">
    <h3 className="text-2xl ">My Expenses</h3>
    <div className="flex flex-col gap-4 mt-4">
      {expenses.map
        (expense => 
          {
              return (<ExpenseCategoryItem 
                key={expense.id}  //when you're passing items and rendering them, you need to use a key
                expense={expense} />
              )
          }
        )
      }
    </div>
  </section>

  {/* Chart */}
  <section className="py-6">
    <a id="stats" />
    <h3 className="text-2xl">Stats</h3>
    <div className="w-1/2 mx-auto">
      <Doughnut 
          data= {{
            labels: expenses.map((expense) => expense.title),
            datasets: [
              {
              label: "Expenses",
              data: expenses.map((expense) => expense.total),
              backgroundColor: expenses.map((expense) => expense.color),
              borderColor: ["#000000"],
              borderWidth: 5
              }
            ] 
          }}/>
    </div>
  </section>
    
  </main>
  </>        
  );
}