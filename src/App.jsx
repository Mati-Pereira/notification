/* eslint-disable  */
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () =>
    toast.success('Notificação Gerada por um evento 😄', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

  return (
    <div className="flex flex-col h-screen items-center justify-around">
      <div className="flex flex-col gap-12">
        <h1 className="text-4xl text-slate-500 font-bold">
          Clique no botão para a notificação aparecer
        </h1>
        <button
          className="p-4 bg-slate-500 rounded flex m-auto text-slate-100 font-semibold"
          type="button"
          onClick={notify}
        >
          Notify !
        </button>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="dark"
        />
      </div>
    </div>
  );
}

export default App;
