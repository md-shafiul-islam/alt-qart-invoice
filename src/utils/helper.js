import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import dateFormat, { masks } from "dateformat";
import { Bounce, toast } from "react-toastify";

const SwalAllert = withReactContent(Swal);

export const isEmptyOrNull = (obj) => {
  if ((obj === undefined && obj === null) || obj === `null`) {
    return true;
  }

  if (typeof obj === "undefined" || obj == `null`) {
    return true;
  }

  if (
    obj === null ||
    obj === undefined ||
    typeof obj === "undefined" ||
    obj === "" ||
    obj == `null`
  ) {
    return true;
  }

  if (Object.keys(obj).length === 0 && obj.constructor === Object) {
    return true;
  }

  if (Array.isArray(obj)) {
    if (obj.length > 0) {
      return false;
    }

    return true;
  }

  if (obj) {
    return false;
  }
  return true;
};

export const esIsArray = (list) => {
  if (!isEmptyOrNull(list)) {
    return Array.isArray(list);
  }
  return false;
};

export const getStrDate = (date) => {
  return new Date(date).toDateString();
};

export const getStrMonthYearDate = (date) => {
  if (isEmptyOrNull(date)) date = new Date();
  return dateFormat(date, "mmm-yyyy");
};

/**
 *
 * @param {Date} date
 * @returns "mm-yyyy" 01-2024
 */
export const getDateMonthYear = (date) => {
  return dateFormat(date, "mm-yyyy");
};

export const onNotify = (title) => {
  return toast(title, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

export const onNotifyError = (title) => {
  return toast.error(title, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

export const onNotifyWarn = (title) => {
  return toast.warn(title, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

export const onNotifySuccess = (title) => {
  return toast.success(title, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

export const onConfirmAlert = ({
  title,
  onConfirm = () => {},
  yesText = "Yes",
  noText = "No",
}) => {
  SwalAllert.fire({
    title: title,
    showDenyButton: true,
    confirmButtonText: yesText,
    denyButtonText: noText,
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm();
    } else if (result.isDenied) {
      Swal.fire("", "", "info");
    }
  });
};

export const getBoolean = (val) => {
  if (/true/i.test(val)) {
    return true;
  }
  return false;
};
