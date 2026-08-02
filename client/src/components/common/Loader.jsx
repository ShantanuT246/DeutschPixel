import './Loader.css';

const Loader = ({ fullScreen = false, text = '' }) => {
  return (
    <div className={`dp-loader-wrapper ${fullScreen ? 'dp-loader-fullscreen' : ''}`}>
      <div className="dp-loader-spinner">
        <div className="dp-loader-ring"></div>
        <div className="dp-loader-ring"></div>
        <div className="dp-loader-ring"></div>
        <div className="dp-loader-ring"></div>
      </div>
      {text && <p className="dp-loader-text">{text}</p>}
    </div>
  );
};

export default Loader;
