import { ListGroup, Button, Image } from "react-bootstrap";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useContext } from "react";
import { Cartcontext } from "../context/cartcontext";

const Cartitem = ({ item }) => {
  const { removefromcart, addtocart, updatequantity } = useContext(Cartcontext);

  return (
    <ListGroup.Item className=" mt-4 align-items-center justify-content-between">
      <div className="row justify-content-between">
        <div className="col-6 d-flex">
          <Image
            src={item.image}
            alt={item.name}
            width={50}
            height={50}
            rounded
          />
          <div className="fw-bold ms-2">
            {item.name}
            <div className="text-muted small">{item.price} USD</div>
          </div>
        </div>

        <div className="col-4">
          <div className="fs-6 small d-flex align-items-center jus me-3">
            <Button
              variant="outline-dark"
              size="sm"
              onClick={() => updatequantity(item.id, item.quantity - 1)}
              className="me-2"
              disabled={item.quantity <= 1}
            >
              <FaMinus />
            </Button>
            <span>{item.quantity}</span>
            <Button
              variant="outline-info"
              size="sm"
              className="ms-2"
              onClick={() => addtocart(item)}
            >
              <FaPlus />
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => removefromcart(item.id)}
              className="float-end ms-4"
            >
              <FaTrash /> Remove
            </Button>
          </div>
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default Cartitem;
