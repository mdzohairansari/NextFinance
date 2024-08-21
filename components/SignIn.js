import { authContext } from "@/lib/store/auth-context";
import React, {useContext} from "react";

import { FaGoogle } from "react-icons/fa";

function SignIn() {
    const {googleLoginHandler} = useContext(authContext);

    return (
        <main className="containner max-w-2xl px-6 mx-auto">
            <h1 className="mb-6 text-6xl font-bold text-center">Welcome To NextFinance 👋</h1>
            
            <div className="flex flex-col overflow-hidden shadow-md shadow-slate-500 bg-slate-800 rounded-2xl">
                <div className="h-52">
                    <img className="object-cover w-full h-full" 
                    src="./nextfinance-cover.png" />
                </div>
                <div className="px-4 py-4">
                    <h3 className="text-2xl text-center">Please Sign in to Continue</h3>
                    <button onClick={googleLoginHandler} className="flex self-start gap-2 p-4 mx-auto mt-6 font-medium text-white align-middle bg-gray-700 rounded-lg">
                        <FaGoogle className="text-2xl"/>Google
                    </button>
                </div>
            </div>
        </main>
    );
}

export default SignIn;