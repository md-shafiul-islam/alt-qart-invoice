import React from "react";
import { getStrDate } from "../../utils/helper";

const WorkSheetCard = ({ item, isAction = false, onMarkItem, ...props }) => {
  const { _id, userEmail, task, hours, date } = item;
  return (
    <div className="w-full flex flex-col  gap-4 shadow-xl border border-teal-600 p-4 text-base font-medium rounded-xl">
      <p className="text-lg font-semibold">Task: {task}</p>
      <p>Hours: {hours}</p>
      <p>Employee: {userEmail}</p>
      <p>Date: {getStrDate(date)}</p>
      {isAction ? (
        <div className="text-center text-gray-200 font-bold flex flex-row gap-4">
          <span className="px-2 py-1 bg-red-500 ">Pending</span>
          <span
            className="px-2 py-1 bg-teal-700 cursor-pointer"
            onClick={() => {
              onMarkItem(item);
            }}
          >
            Mark It{" "}
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default WorkSheetCard;
