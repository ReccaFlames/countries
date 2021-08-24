import { Link } from 'react-router-dom';
import './card.scss';

interface CardProps {
    title: string;
    children?: JSX.Element | string;
    image: string;
}

const Card: React.FC<CardProps> = (props) => {
    const { title, children, image } = props;

    return (
        <li className="card">
            {/* <div className="img">
                <img src={image} alt="" />
            </div>
            <div className="content">
                <h2>{title}</h2>
                {children}
            </div> */}
            <Link to="/country">
                <div className="img">
                    <img src={image} alt="" />
                </div>
                <div className="content">
                    <h2>{title}</h2>
                    {children}
                </div>
            </Link>
        </li>
    );
};

export default Card;
