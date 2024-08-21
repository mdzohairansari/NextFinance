
import Modal from "@/components/Modal";
import { financeContext } from "@/lib/store/finance-context";
import { CurrencyFormater } from "@/lib/utils";
import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export function ViewExpenseModal({ show, onClose, expense }) {
    const { deleteExpenseItem, deleteExpenseCategory } = useContext(financeContext);
    
    const deleteExpenseHandler = async () => {
        try {
            await deleteExpenseCategory(expense.id)
            toast.success("Expense Category Deleted!");
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    };

    const deleteExpenseItemHandler = async (item) => {
        try {
            //remove the item from the list
            const updatedItems = expense.items.filter((i) => i.id !== item.id);

            //update the expense balance
            const updatedExpense = {
                items: [...updatedItems],
                total: expense.total - item.amount,
            };

            await deleteExpenseItem(updatedExpense, expense.id);
            toast.success("Expense Item Deleted!");
        } catch (error) {
            console.log(error.message)
            toast.error(error.message);
        }
    };

    return (
        <Modal show={show} onClose={onClose}>
            <div className="flex items-center justify-between">
                <h2 className="text-4xl">{expense.title}</h2>
                <button onClick={deleteExpenseHandler} className="btn btn-red">Delete</button>
            </div>

            <div>
                <h3 className="my-4 text-2xl">Expense History</h3>
                {expense.items.map((item) => {
                    return (
                        <div key={item.id} className="flex items-center justify-between">
                            <small>
                                {item.createdAt.toMillis 
                                    ? new Date(item.createdAt.toMillis()).toISOString()
                                    : item.createdAt.toISOString()}
                            </small>
                            <p className="flex items-center gap-2">
                                    {CurrencyFormater(item.amount)}
                                <button onClick={() => {
                                    deleteExpenseItemHandler(item);
                                }}>
                                    <FaTrashAlt/>
                                </button>
                            </p>
                        </div>
                    );
                })}
            </div>
        </Modal>
    );
}

export default ViewExpenseModal;