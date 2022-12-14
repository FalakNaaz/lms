import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastComponent = ({ msg, renderToast, setToast }) => {
  useEffect(() => {
    if (renderToast) {
      toast.success(`${msg}`);
      setToast(false);
    }
    /* eslint-disable */
  }, [renderToast]);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ToastComponent;
