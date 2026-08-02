import { forwardRef } from 'react';
import './Input.css';

const Input = forwardRef(({
  label,
  error,
  icon,
  className = '',
  id,
  ...props
}, ref) => {
  // If no ID is provided, we generate a random one.
  // This is crucial for accessibility so the <label> can link to the <input>
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div className={`dp-input-wrapper ${className}`}>
      {label && (
        <label htmlFor={inputId} className="dp-input-label">
          {label}
        </label>
      )}
      
      <div className="dp-input-container">
        {icon && (
          <span className="dp-input-icon">
            {icon}
          </span>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={`dp-input ${error ? 'dp-input-error' : ''} ${icon ? 'dp-input-with-icon' : ''}`}
          {...props}
        />
      </div>

      {error && (
        <span className="dp-input-error-msg">{error}</span>
      )}
    </div>
  );
});

// Required when using forwardRef so React DevTools can name the component
Input.displayName = 'Input';

export default Input;
