import './Card.css';

const Card = ({
  children,
  className = '',
  hoverable = false, // If true, the card lifts up on hover
  glass = false,     // If true, applies a translucent blur effect
  onClick,           // Makes the card clickable
}) => {
  
  const classes = [
    'dp-card',
    hoverable ? 'dp-card-hoverable' : '',
    glass ? 'dp-card-glass' : '',
    onClick ? 'dp-card-clickable' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
