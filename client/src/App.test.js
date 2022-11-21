import { render, screen } from '@testing-library/react';
import App from './App';
import About from './components/about';
import Favorite from './components/favorite';
import Home from './components/home';
import Trade from './components/trade';
import Trades from './components/trades'


describe("About", () => {
  test("renders my about component", () => {
    render(<About />);
  });
});

describe("Favorite", () => {
  test("renders my favorite component", () => {
    render(<Favorite />);
  });
});

describe("Home", () => {
  test("renders my home component", () => {
    render(<Home />);
  });
});

describe("public_navbar", () => {
  test("renders my navbar component", () => {
    render(<Navbar />);
  });
});

describe("Trade", () => {
  test("renders my trade component", () => {
    render(<Trade />);
  });
});

describe("Trades", () => {
  test("renders my trades component", () => {
    render(<Trades />);
  });
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
