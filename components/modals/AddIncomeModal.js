import { CurrencyFormater } from "@/lib/utils";
import { useRef, useEffect, useContext} from "react";
import {financeContext} from "@/lib/store/finance-context";

//Icons
import { FaRegTrashAlt } from "react-icons/fa";

import Modal from "@/components/Modal";
import { authContext } from "@/lib/store/auth-context";
import { toast } from "react-toastify";

export function AddIncomeModal({show, onClose}) 
{
    const amountRef = useRef();
    const descriptionRef = useRef();
    const { income, addIncomeItem, removeIncomeItem } = useContext(financeContext);
    const { user } = useContext(authContext);
  
    //addIncomeHandler
    const addIncomeHandler = async (e) => {
        e.preventDefault();
        
        const newIncome = {
        amount: +amountRef.current.value,
        description: descriptionRef.current.value,
        createdAt: new Date(),
        uid: user.uid,
        };
        
        try {
            await addIncomeItem(newIncome);
            descriptionRef.current.value = "";
            amountRef.current.value = "";
            toast.success("Income Added Successfully!");
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }  
    };

    //deleteIncomeEntry
    const deleteIncomeEntryHandler = async (incomeId) => {
        try {
            await removeIncomeItem(incomeId);
            toast.success("Income Deleted Successfully!");
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }    
    };

    return (

    <Modal show={show} onClose={onClose}>
    <form onSubmit={addIncomeHandler} className="input-group">
      <div className="input-group">
      <label htmlFor="amount">Income Amount</label>
      <input type="number"
             name="amount"
             ref={amountRef}
             min={0.01}
             step={0.01}
             placeholder="Enter Income Amount"
             required>     
      </input>
      </div>
      <div className="input-group">
      <label htmlFor="description">Description</label>
      <input type="text"
             ref={descriptionRef}
             placeholder="Enter Income Description"
             required>     
      </input>
      </div>
      <button className="btn btn-primary">Add Value</button>
    </form>

    <div className="flex flex-col gap-4 mt-6">
      <h3 className="text-2xl font-bold">Income History</h3>

      {income.map((i) => {
        return (
          <div className="flex items-center justify-between" key={i.id}>
            <div>
              <p className="font-semibold ">{i.description}</p>
              <small className="text-xs">{i.createdAt.toISOString()}</small>
            </div>
            <p className="flex items-center gap-2">
              {CurrencyFormater(i.amount)}
              <button onClick={() => { deleteIncomeEntryHandler(i.id) }} >
                <FaRegTrashAlt/>
              </button>
            </p>
          </div>
        );
      })}
  
    </div>
    </Modal>
  
    );
}

export default AddIncomeModal;