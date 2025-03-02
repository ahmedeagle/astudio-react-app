import { render, screen } from "@testing-library/react";
import Table from "../components/Table";

const sampleData = [
  { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com" },
];

const columns = [
  { header: "ID", accessor: "id" },
  { header: "First Name", accessor: "firstName" },
  { header: "Last Name", accessor: "lastName" },
  { header: "Email", accessor: "email" },
];

test("renders table with correct data", () => {
  render(<Table data={sampleData} columns={columns} />);
  expect(screen.getByText("John")).toBeInTheDocument();
  expect(screen.getByText("Doe")).toBeInTheDocument();
  expect(screen.getByText("john@example.com")).toBeInTheDocument();
});
