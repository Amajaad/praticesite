import { ListGroup, Button, Image } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { Cartcontext } from "../context/cartcontext";

const Cartitem = ({ item }) => {
  const { removefromcart } = useContext(Cartcontext);

  return (
    <ListGroup.Item className="d-flex mt-4 align-items-center justify-content-between">
      <div className="d-flex align-items-start gap-3">
        <Image
          src={item.image}
          alt={item.name}
          width={50}
          height={50}
          rounded
        />
        <div>
          <div className="fw-bold">{item.name}</div>
          <div className="text-muted small">{item.price} USD</div>
        </div>
        <div className="">
          <div className=" fs-5 small">Count:{item.quantity}</div>
        </div>
      </div>
      <Button
        variant="danger"
        size="sm"
        onClick={() => removefromcart(item.id)}
      >
        <FaTrash /> Remove
      </Button>
    </ListGroup.Item>
  );
};

export default Cartitem;
