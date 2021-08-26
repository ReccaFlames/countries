import { Link } from 'react-router-dom';
import './card.scss';

interface CardProps {
    title: string;
    children?: JSX.Element | string;
    image: string;
    link?: string;
}

const Card: React.FC<CardProps> = (props) => {
    const { title, children, image, link } = props;

    return (
        <li className="card">
            {link ? (
                <Link to={link}>
                    <div className="img">
                        <img src={image} alt="" />
                    </div>
                    <div className="content">
                        <h2>{title}</h2>
                        {children}
                    </div>
                </Link>
            ) : (
                <>
                    <div className="img">
                        <img src={image} alt="" />
                    </div>
                    <div className="content">
                        <h2>{title}</h2>
                        {children}
                    </div>
                </>
            )}
        </li>
    );
};

export default Card;
