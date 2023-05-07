import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { rest, server } from './setupServer';
import renderWithProviders from './utils/utils';
import AllCoins from './components/homepage/allCoins';
import AllDetails from './components/details/allDetails';

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

  it('should handle errors', async () => {
    server.use(
      rest.get('https://api.coingecko.com/api/v3/coins/', (req, res, ctx) => res(ctx.status(404))),
    );

    renderWithProviders(<AllCoins />);

    expect(
      await screen.findByText(/Request failed with status code 404/i),
    ).toBeInTheDocument();
  });
});

describe('Details component test', () => {
  it('should show loading status initially', async () => {
    renderWithProviders(<AllDetails />);

    expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();
  });

  it('should fetch data after some time', async () => {
    renderWithProviders(<AllCoins />);

    expect(screen.queryByText(/loading\.\.\./i)).toBeInTheDocument();
    expect(await screen.findByText(/tether/i)).toBeInTheDocument();
    expect(screen.queryByText(/loading\.\.\./i)).not.toBeInTheDocument();
  });

  it('should handle errors', async () => {
    server.use(
      rest.get('https://api.coingecko.com/api/v3/coins/', (req, res, ctx) => res(ctx.status(404))),
    );

    renderWithProviders(<AllCoins />);

    expect(
      await screen.findByText(/Request failed with status code 404/i),
    ).toBeInTheDocument();
  });
});
