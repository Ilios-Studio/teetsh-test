import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import type { Item as IItem } from "../../../domain";
import { Item } from "../Item";
import userEvent from "@testing-library/user-event";

// Mock DOMPurify
jest.mock("dompurify", () => ({
  __esModule: true,
  default: {
    sanitize: jest.fn((input: string) =>
      input.replace(/<script[^>]*>.*?<\/script>/gi, "")
    ),
  },
}));

describe("Item", () => {
  const mockItem: IItem = {
    id: "1",
    value: "<p>Test content</p>",
    y: 0,
    Sequence: null,
    domaineId: "domain-1",
    periodeId: "periode-1",
    FicheDePrep: null,
    attachments: [],
  };

  it("renders content with sanitization", () => {
    render(<Item item={mockItem} hoverBorderColor="hover:border-blue-400" />);

    const content = screen.getByText("Test content");
    expect(content).toBeInTheDocument();
  });

  it("sanitizes malicious content", () => {
    const maliciousItem: IItem = {
      ...mockItem,
      value: '<p>Safe content</p><script>alert("hack")</script>',
    };

    render(
      <Item item={maliciousItem} hoverBorderColor="hover:border-blue-400" />
    );

    const safeContent = screen.getByText("Safe content");
    expect(safeContent).toBeInTheDocument();

    // Script tag should be removed by sanitization
    expect(screen.queryByText('alert("hack")')).toBeNull();
  });

  it("opens dialog when clicked", async () => {
    const user = userEvent.setup();

    render(<Item item={mockItem} hoverBorderColor="hover:border-blue-400" />);

    const dialogTrigger = screen.getByTestId("item-dialog-trigger");

    // Click to open dialog
    await user.click(dialogTrigger);

    // Dialog should be open and show content
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    // Check content in dialog specifically
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveTextContent("Test content");
  });
});
