import { useState } from "react";

import { BiSolidSortAlt } from "react-icons/bi";

interface SortArrowProps {
  sortField: string;
  onSort: (sortBy: string, sortOrder: string) => void;
}

const SortArrow = ({ sortField, onSort }: SortArrowProps) => {
  const [sortOrder, setSortOrder] = useState<string>("1");

  const handleClick = () => {
    toggleSortOrder();
    onSort(sortField, sortOrder);
  }

  const toggleSortOrder = () => {
    const orderDirection = sortOrder === "1" ? "-1" : "1";
    setSortOrder(orderDirection);
  };

  return <BiSolidSortAlt onClick={handleClick} />;
};

export default SortArrow;
