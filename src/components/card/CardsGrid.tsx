import './cardsgrid.scss';

interface CardsGridProps {
    childrens?: JSX.Element[];
}

const CardsGrid: React.FC<CardsGridProps> = (props) => {
    const { children } = props;

    return <ul className="cards">{children}</ul>;
};

export default CardsGrid;
