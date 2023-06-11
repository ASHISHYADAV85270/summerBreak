import React from "react";
import { useSelector } from "react-redux"; // to get data from store
import { RiDeleteBin4Fill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
  //to get data
  const data = useSelector((state) => {
    return state.users;
  });
  //   console.log(data);

  const dispatch = useDispatch();

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <>
      {data.map((item, id) => {
        return (
          <>
            <li className="litag" key={id}>
              {item}
              <button
                className="btn-delete"
                onClick={() => {
                  deleteUser(id);
                }}
                key={id}
              >
                <MdDeleteForever
                  className="delete-icon"
                  style={{ width: "full", height: "full" }}
                />
              </button>
            </li>
            <hr />
          </>
        );
      })}
    </>
  );
};

export default DisplayUsers;
