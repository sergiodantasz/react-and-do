import App from '@/App';
import { renderWithProviders } from '@/utils/test-utils';

test('renders App correctly', () => {
  renderWithProviders(<App />);
  expect(true).toBeTruthy();
});
