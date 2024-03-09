import React from "react";
import { useDispatch } from "react-redux";
import { removeUserFromServer } from "../../Redux/store/users";
import swal from "sweetalert";
export default function UserItem({ _id, firstname, lastname }) {
  const dispatch = useDispatch(_id);
  const removeHandler = () => {
    swal({
      title: "ایا مطمین هستید؟",
      icon: "warning",
      buttons: ["نه","اره" ]
    }).then((res) => {
      if (res) {
        dispatch(removeUserFromServer(_id));
        swal({
          title:"پاک شد...   ",icon:"success",buttons:["ok"]
    
        })
      }
    });
  };

  return (
    <div className="uesrs__item">
      <div className="users__info">
        <img
          src="../../img/admin/profile/banana.png"
          alt="photo user"
          className="users__img"
        />
        <div className="users__details">
          <p className="users__name my-0">
            {firstname}
            {lastname}
          </p>
          <p lang="en" className="users__email">
            ce01010101it@gmail.com
          </p>
        </div>
      </div>
      <div className="users__btns">
        <button className="btn-custome btn-custome--gray">پیام ها</button>
        <button className="btn-custome btn-custome__blue">اطلاعات</button>
        <button
          className="btn-custome btn-custome__red"
          onClick={removeHandler}
        >
          حذف
        </button>
      </div>
    </div>
  );
}
