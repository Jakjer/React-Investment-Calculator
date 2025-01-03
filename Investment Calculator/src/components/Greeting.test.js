import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test('renders Hello World as a text', () => {
  //Arrange
  render(<Greeting />);

  //Act

  //Assert
  const helloWorldElement = screen.getByText('Hello World', { exact: false });
  expect(helloWorldElement).toBeInTheDocument();
  // expect(helloWorldElement).toBeInTheDocument();
});