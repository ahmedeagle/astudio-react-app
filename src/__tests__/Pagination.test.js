import { render, screen, fireEvent } from "@testing-library/react";
import UsersPage from "../pages/Users/UsersPage";
import { AppProvider } from "../context/AppContext";

test("pagination works correctly", () => {
  render(
    <AppProvider>
      <UsersPage />
    </AppProvider>
  );

  const nextButton = screen.getByText("Next");
  fireEvent.click(nextButton);
  expect(screen.getByText("Page 2")).toBeInTheDocument();
});
