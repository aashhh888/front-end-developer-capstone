import './Special.css';

const Special = (props) => {    
    const specialImage = <img src={require("../../images/" + props.Image)} className='specialImage' />;

    return (
        <div className='specialContainer'>
        {specialImage}
        <h3>{props.Name}</h3>
        <h3>${props.Price}</h3>
        <p>{props.Details}</p>
        <h4>Order a delivery <img></img></h4>
        </div>
    );
};

export default Special;