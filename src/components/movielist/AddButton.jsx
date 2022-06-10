import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddButton = ({ onClick }) => {
  return (
    <button className="movie__card__add btn btn--icon" onClick={onClick}>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
};

export default AddButton;
