import './Badge.css';

const Badge = ({ children, variant = 'default', className = '' }) => {
  return (
    <span className={`dp-badge dp-badge-${variant} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
