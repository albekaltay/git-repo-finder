import { render, screen, fireEvent } from "@testing-library/react";
import { Dropdown } from "../dropdown";
import "@testing-library/jest-dom";

describe("Dropdown", () => {
  const mockIcon = <span>🔍</span>;
  const mockItems = [
    { label: "Item 1", onClick: jest.fn() },
    { label: "Item 2", onClick: jest.fn() },
  ];

  it("renders dropdown button with icon and text", () => {
    render(
      <Dropdown
        icon={mockIcon}
        buttonText="Test Button"
        dropdownItems={mockItems}
        text="Header Text"
      />
    );

    expect(screen.getByText("🔍")).toBeInTheDocument();
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("shows dropdown content when clicked", () => {
    render(
      <Dropdown icon={mockIcon} dropdownItems={mockItems} text="Header Text" />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(screen.getByText("Header Text")).toBeInTheDocument();
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("calls onClick handler when dropdown item is clicked", () => {
    render(<Dropdown icon={mockIcon} dropdownItems={mockItems} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const item1 = screen.getByText("Item 1");
    fireEvent.click(item1);

    expect(mockItems[0].onClick).toHaveBeenCalled();
  });

  it("closes dropdown when clicking outside", () => {
    render(<Dropdown icon={mockIcon} dropdownItems={mockItems} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(screen.getByText("Item 1")).toBeInTheDocument();

    fireEvent.mouseDown(document.body);

    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
  });
});
