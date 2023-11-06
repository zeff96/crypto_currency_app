import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import renderWithProviders from '../utils/utils';
import AllCoins from '../modules/homepage/allCoins';

const handlers = [
  rest.get('https://api.coingecko.com/api/v3/coins/', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([
      { id: 'bitcoin', name: 'Bitcoin', symbol: 'btc' },
      { id: 'ethereum', name: 'Ethereum', symbol: 'eth' },
      { id: 'tether', name: 'Tether', symbol: 'usdt' },
    ]),
  )),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Coins component test', () => {
  it('should showing loading status initially', async () => {
    renderWithProviders(<AllCoins />);
    expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();
  });

  it('should fetch data after some time', async () => {
    renderWithProviders(<AllCoins />);

    expect(screen.queryByText(/loading\.\.\./i)).toBeInTheDocument();
    expect(await screen.findByText(/tether/i)).toBeInTheDocument();
    expect(screen.queryByText(/loading\.\.\./i)).not.toBeInTheDocument();
  });
});
