import React, { useState } from "react";
import WorkSheetCard from "./WorkSheetCard";
import { Empty, Pagination } from "antd";

const WorkSheetItems = ({
  items = [],
  isAction = false,
  onMarkItem,
  ...props
}) => {
  const [pageSize, setPageSize] = useState(6);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(6);

  const onPageChange = (page, pSize) => {
    setStart((page - 1) * pSize);
    setEnd(pSize * page);
  };

  return (
    <div className="grid grid-cols-12 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-12 gap-6">
      {items?.length > 0 ? (
        items?.slice(start, end).map((item) => {
          return (
            <div className="xs:col-span-1 sm:col-span-1 md:col-span-4 lg:col-span-4">
              <WorkSheetCard
                key={`sheet-${item._id}`}
                item={item}
                onMarkItem={onMarkItem}
                isAction={isAction}
              />
            </div>
          );
        })
      ) : (
        <div className="min-h-40 w-full text-2xl text-center col-span-12">
          <Empty />
        </div>
      )}
      <div className="w-full col-span-12">
        <Pagination
          total={items?.length}
          pageSize={pageSize}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default WorkSheetItems;
