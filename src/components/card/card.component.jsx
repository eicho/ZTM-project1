import CardList from "../card-list/card-list.component"; // eslint-disable-next-line
import "./card.styles.css";

const Card = ({ monster }) => {
  //const Card = ({ monster: { name, email, id } }) => {
  const { name, email, id } = monster;
  return (
    <div key={id} className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
export default Card;
