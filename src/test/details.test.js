import { screen } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import renderWithProviders from '../utils/utils';
import AllDetails from '../modules/details/allDetails';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: 'tether' }), // Provide a valid "id" value
}));

const handlers = [
  rest.get('https://api.coingecko.com/api/v3/coins/tether', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({ id: 'tether', name: 'Tether', symbol: 'usdt' }),
  )),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


describe('Details component test', () => {
  it('should show loading status initially', async () => {
    renderWithProviders(
        <AllDetails />
    );

    expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();
  });

  it('should fetch data after some time', async () => {
    renderWithProviders(<AllDetails />);

    expect(screen.queryByText(/loading\.\.\./i)).toBeInTheDocument();
    expect(await screen.findByText('Tether')).toBeInTheDocument();
    expect(screen.queryByText(/loading\.\.\./i)).not.toBeInTheDocument();
  });
});
