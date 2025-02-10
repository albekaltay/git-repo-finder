import { render, fireEvent, screen } from "@testing-library/react";
import { Input } from "../input";

describe("Input Component", () => {
  it("renders correctly with placeholder", () => {
    render(<Input placeholder="Test placeholder" />);
    expect(screen.getByPlaceholderText("Test placeholder")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const customClass = "custom-class";
    render(<Input className={customClass} />);
    expect(screen.getByRole("textbox")).toHaveClass(customClass);
  });

  it("handles value and onChange correctly", () => {
    const mockOnChange = jest.fn();
    const testValue = "test value";

    render(<Input value={testValue} onChange={mockOnChange} />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveValue(testValue);

    fireEvent.change(inputElement, { target: { value: "new value" } });
    expect(mockOnChange).toHaveBeenCalled();
  });
});
