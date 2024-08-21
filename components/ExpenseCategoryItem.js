import { CurrencyFormater } from "@/lib/utils";
import ViewExpenseModal from "./modals/ViewExpenseModal";
import { useState } from "react";

function ExpenseCategoryItem({expense}) {
  const [showViewExpenseModa, setViewExpenseModal] = useState(false);

    return (
      <>
      <ViewExpenseModal show={showViewExpenseModa}
                        onClose={setViewExpenseModal}
                        expense={expense}/>
        <button onClick={() => {setViewExpenseModal(true)}}>
          <div className="flex items-center justify-between py-4 px-4 bg-slate-700 rounded-3xl"> 
          <div className="flex items-center gap-2">
            <div className="w-[25px] h-[25px] rounded-full" 
                style={{backgroundColor: expense.color}}/>
            <h4>{expense.title}</h4>
          </div>
          <p>{CurrencyFormater(expense.total)}</p>
        </div>
        </button>
      </>
    );
}

export default ExpenseCategoryItem;
