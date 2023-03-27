import React from "react";
import editImg from "../assets/edit.svg";
import delImg from "../assets/delete.svg";
import { useDispatch } from "react-redux";
import {
  editActive,
  removeTransaction,
} from "../features/transactions/transactionsSlice";
import { numberWithCommas } from "../utils/numberWithCommas";

const List = ({ transaction }) => {
  const { id, name, type, amount } = transaction || {};
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editActive(transaction));
  };

  const handleDelete = () => {
    dispatch(removeTransaction(id));
  };
  return (
    <li class={`transaction ${type === "income" ? "income" : "expense"}`}>
      <p>{name}</p>
      <div class="right">
        <p>৳ {numberWithCommas(amount)}</p>
        <button class="link" onClick={handleEdit}>
          <img class="icon" src={editImg} alt="Edit" />
        </button>
        <button class="link" onClick={handleDelete}>
          <img class="icon" src={delImg} alt="Delete" />
        </button>
      </div>
    </li>
  );
};

export default List;
