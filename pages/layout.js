import FinanceContextProvider from "@/lib/store/finance-context";
import Nav from "@/components/navigation";
import AuthContextProvider from "@/lib/store/auth-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <AuthContextProvider>
      <FinanceContextProvider>
        <ToastContainer />
          <div>
            <Nav />
            <main>{children}</main>
          </div>
      </FinanceContextProvider>
    </AuthContextProvider>
  );
}