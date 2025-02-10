import { render, screen, fireEvent } from "@testing-library/react";
import { RadioButton } from "../radioButton";

describe("RadioButton", () => {
  const mockOnChange = jest.fn();
  const defaultProps = {
    value: "test-value",
    label: "Test Label",
    name: "test-name",
    checked: false,
    onChange: mockOnChange,
    className: "custom-class",
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it("renders radio button with label correctly", () => {
    render(<RadioButton {...defaultProps} />);

    const radioInput = screen.getByRole("radio");
    const label = screen.getByText("Test Label");

    expect(radioInput).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(radioInput).not.toBeChecked();
  });

  it("applies custom className", () => {
    render(<RadioButton {...defaultProps} />);

    const label = screen.getByText("Test Label").closest("label");
    expect(label).toHaveClass("custom-class");
  });

  it("handles checked state correctly", () => {
    render(<RadioButton {...defaultProps} checked={true} />);

    const radioInput = screen.getByRole("radio");
    expect(radioInput).toBeChecked();
  });

  it("calls onChange when clicked", () => {
    render(<RadioButton {...defaultProps} />);

    const radioInput = screen.getByRole("radio");
    fireEvent.click(radioInput);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
