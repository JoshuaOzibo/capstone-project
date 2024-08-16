import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Shortener from "./Shortener";
import { auth } from "../ClientDatabase.ts";
import { showToast } from "../toastMessage/ToastMessage.tsx";

// Mock dependencies
jest.mock("../ClientDatabase.ts", () => ({
  auth: {
    currentUser: {
      getIdToken: jest.fn(),
    },
  },
}));

//get the toast message
jest.mock("../toastMessage/ToastMessage.tsx", () => ({
  showToast: jest.fn(),
}));

//get the loginand sing up
jest.mock("../auth/LoginandsignupModal.tsx", () => () => <div>Mock Modal</div>);
//set the result component
jest.mock("../shortUrlResult/DisplayShortUrlResult.tsx", () => () => (
  <div>Mock DisplayShortUrlResult</div>
));

describe("Shortener Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("handles URL shortening successfully", async () => {
    // Mocking the fetch response
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ shortUrl: "http://short.url/abcd" }),
    });

    render(<Shortener open={false} setOpen={() => {}} />);

    // Simulate form input
    fireEvent.change(screen.getByPlaceholderText("Enter URL to shorten"), {
      target: { value: "http://example.com" },
    });

    // Simulate form submission
    fireEvent.submit(screen.getByRole("button"));

    // Wait for asynchronous actions
    await waitFor(() =>
      expect(showToast).toHaveBeenCalledWith(
        "url shoten syccessfully",
        "success"
      )
    );
    expect(screen.getByText("Mock DisplayShortUrlResult")).toBeInTheDocument();
  });

  test("handles URL shortening failure", async () => {
    // Mock the fetch response with an error
    global.fetch = jest
      .fn()
      .mockRejectedValue(new Error("Failed to shorten URL"));

    render(<Shortener open={false} setOpen={() => {}} />);

    // Simulate form input
    fireEvent.change(screen.getByPlaceholderText("Enter URL to shorten"), {
      target: { value: "http://example.com" },
    });

    // Simulate form submission
    fireEvent.submit(screen.getByRole("button"));

    // Wait for asynchronous actions
    await waitFor(() =>
      expect(showToast).toHaveBeenCalledWith(
        "Failed to shorten URL. Please try again later.",
        "error"
      )
    );
  });

  test("shows modal if user is not authenticated", async () => {
    // Mock auth.currentUser to be null
    (auth as any).currentUser = null;

    const setOpenMock = jest.fn();

    render(<Shortener open={false} setOpen={setOpenMock} />);

    // Simulate form input
    fireEvent.change(screen.getByPlaceholderText("Enter URL to shorten"), {
      target: { value: "http://example.com" },
    });

    // Simulate form submission
    fireEvent.submit(screen.getByRole("button"));

    // Wait for the setOpen function to be called
    await waitFor(() => expect(setOpenMock).toHaveBeenCalledWith(true));
  });
});
