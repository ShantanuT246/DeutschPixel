function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>DeutschPixel</h1>
      <p style={{ color: 'var(--dp-color-text-secondary)' }}>
        German Vocabulary Trainer
      </p>
      <button style={{ 
        marginTop: '1rem',
        padding: '0.5rem 1rem', 
        backgroundColor: 'var(--dp-color-primary)', 
        color: 'white',
        borderRadius: 'var(--dp-radius-md)'
      }}>
        Test Button
      </button>
    </div>
  );
}

export default App;
