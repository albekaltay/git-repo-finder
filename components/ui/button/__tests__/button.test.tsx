import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../button";

describe("Button Component", () => {
  it("renders button with label", () => {
    render(<Button label="Test Button" onClick={() => {}} />);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);

    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders with icon when provided", () => {
    const TestIcon = () => <span data-testid="test-icon">🔍</span>;
    render(<Button label="Search" onClick={() => {}} icon={<TestIcon />} />);

    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  it("renders without icon when not provided", () => {
    render(<Button label="No Icon" onClick={() => {}} />);

    const button = screen.getByRole("button");
    expect(button.firstChild).toBeInstanceOf(HTMLSpanElement);
  });
});
