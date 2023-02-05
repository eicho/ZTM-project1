import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => (
  // console.log(this.props.monsters);
  //const { monsters } = this.props;

  /* implicit return */
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);
export default CardList;
