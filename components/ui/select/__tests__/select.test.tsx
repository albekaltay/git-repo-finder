import { render, screen, fireEvent } from "@testing-library/react";
import { Select } from "../select";

describe("Select Component", () => {
  const mockOnChange = jest.fn();
  const defaultProps = {
    value: 1,
    onChange: mockOnChange,
    options: [1, 2, 3],
    label: "Test Label",
    className: "test-class",
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it("renders select with label", () => {
    render(<Select {...defaultProps} />);

    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("renders all options", () => {
    render(<Select {...defaultProps} />);

    defaultProps.options.forEach((option) => {
      expect(screen.getByText(option.toString())).toBeInTheDocument();
    });
  });

  it("calls onChange with correct value when option is selected", () => {
    render(<Select {...defaultProps} />);

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "2" } });

    expect(mockOnChange).toHaveBeenCalledWith(2);
  });

  it("renders without label when label prop is not provided", () => {
    const propsWithoutLabel = { ...defaultProps, label: undefined };
    render(<Select {...propsWithoutLabel} />);

    expect(screen.queryByText("Test Label")).not.toBeInTheDocument();
  });
});
