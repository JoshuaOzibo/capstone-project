import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "./Login";
import { signInWithEmailAndPassword } from "firebase/auth";
import { showToast } from "../toastMessage/ToastMessage";

// Mock Firebase auth and showToast
jest.mock("firebase/auth");
jest.mock("../toastMessage/ToastMessage");

// Mock the config module
jest.mock("../../config/config.ts", () => ({
  config: {
    apiKey: "mockApiKey",
    authDomain: "mockAuthDomain",
    projectId: "mockProjectId",
    storageBucket: "mockStorageBucket",
    messagingSenderId: "mockMessagingSenderId",
    appId: "mockAppId",
    measurementId: "mockMeasurementId",
  },
}));

describe("Login Component", () => {
  beforeEach(() => {
    (signInWithEmailAndPassword as jest.Mock).mockResolvedValue({
      user: { uid: "123" },
    });
    (showToast as jest.Mock).mockImplementation(() => {});
  });

  test("renders email and password input fields", () => {
    render(<Login setOpen={() => {}} />);

    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  test("submits the form and logs in the user", async () => {
    render(<Login setOpen={() => {}} />);

    // Simulate user input
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password123" },
    });

    // Simulate form submission
    fireEvent.submit(screen.getByRole("button", { name: /Login/i }));

    await waitFor(() => expect(signInWithEmailAndPassword).toHaveBeenCalled());

    // Check if showToast was called
    expect(showToast).toHaveBeenCalledWith(
      "User logged in successful",
      "success"
    );
  });

  test("shows an error message when login fails", async () => {
    (signInWithEmailAndPassword as jest.Mock).mockRejectedValue(
      new Error("Login failed")
    );

    render(<Login setOpen={() => {}} />);

    // Simulate user input
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "wrongpassword" },
    });

    fireEvent.submit(screen.getByRole("button", { name: /Login/i }));

    await waitFor(() => expect(signInWithEmailAndPassword).toHaveBeenCalled());

    expect(
      screen.getByText("Email or Password not correct")
    ).toBeInTheDocument();

    // Check if showToast was called with error message
    expect(showToast).toHaveBeenCalledWith("Error logging in user", "error");
  });
});
