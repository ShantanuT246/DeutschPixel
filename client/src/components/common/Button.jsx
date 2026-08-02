import './Button.css';

const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost' | 'danger'
  size = 'md',         // 'sm' | 'md' | 'lg'
  fullWidth = false,
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  // We build a dynamic string of CSS classes based on the props passed in
  const classes = [
    'dp-btn',
    `dp-btn-${variant}`,
    `dp-btn-${size}`,
    fullWidth ? 'dp-btn-full' : '',
    isLoading ? 'dp-btn-loading' : '',
    className
  ].filter(Boolean).join(' '); // .filter(Boolean) removes empty strings

  return (
    <button
      className={classes}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="dp-btn-spinner" />
      ) : null}
      <span className="dp-btn-content">{children}</span>
    </button>
  );
};

export default Button;
