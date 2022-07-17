import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {
  toast.error('Write the correct value');

  return (
    <div>
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default Notification;
