import { toast } from "react-toastify";

export default (msg, type, lessImportant) => {
  switch (type) {
    case "success":
      toast.success(msg, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    case "error":
      toast.error(msg, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    case "info":
    default:
      toast.info(msg, {
        position: lessImportant
          ? toast.POSITION.BOTTOM_RIGHT
          : toast.POSITION.TOP_CENTER,
      });
  }
};
