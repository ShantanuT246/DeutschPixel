import Button from './components/common/Button';
import Input from './components/common/Input';
import Card from './components/common/Card';
import Loader from './components/common/Loader';
import Badge from './components/common/Badge';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>DeutschPixel</h1>
      <p style={{ color: 'var(--dp-color-text-secondary)' }}>
        German Vocabulary Trainer
      </p>
      <Button variant="primary" isLoading={false}>Test Button</Button>
      <Button variant="secondary">Secondary Button</Button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem', maxWidth: '300px' }}>
        <Input label="Email" placeholder="Enter your email" type="email" />
        <Input label="Password" placeholder="Enter password" type="password" error="Password must be at least 6 characters" />
      </div>

      <Card hoverable={true} style={{ marginTop: '2rem', maxWidth: '400px' }}>
        <h2>Card Title</h2>
        <p style={{ color: 'var(--dp-color-text-secondary)', marginBottom: '1rem' }}>
          Hover over me to see the lift effect!
        </p>
        <Button variant="primary" fullWidth>Action</Button>
      </Card>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
        <Badge variant="der">Der (M)</Badge>
        <Badge variant="die">Die (F)</Badge>
        <Badge variant="das">Das (N)</Badge>
      </div>
      <Loader text="Loading vocabulary..." />
    </div>
  );
}

export default App;
