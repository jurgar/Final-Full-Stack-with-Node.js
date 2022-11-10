import "./index.css";
import NavBar from "../../components/Nav";
import Table from "../../components/Table/Table";
import Modal from "../../components/Modal";
import { useState, useEffect } from "react";

const Members = () => {
  const [orders, setOrders] = useState([]);
  const [modalClass, setModalClass] = useState("hidden");
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/v1/members")
      .then((resp) => resp.json())
      .then((response) => setOrders(response))
      .catch((err) => console.log(err));
  }, [orders]);
  const createConfirmModal = (e) => {
    setModalClass("active");
    setCurrentId(e.target.parentElement.id);
  };
  const handleExit = (e) => {
    setModalClass("hidden");

    setCurrentId("");
  };

  const handleDeleteOrder = () => {
    fetch("http://localhost:3001/v1/members/members/" + currentId, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then((res) => console.log(res));
    setModalClass("hidden");

    setCurrentId("");
  };

  return (
    <div>
      <NavBar />
      <div className="table-container">
        <Table createConfirmModal={(e) => createConfirmModal(e)}>
          {orders}
        </Table>
        <Modal
          funcDelete={(e) => handleDeleteOrder(e)}
          funcExit={handleExit}
          className={modalClass}
          id={currentId}
        />
      </div>
    </div>
  );
};

export default Members;
