import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

test("Home page", () => {
  render(<Page />);
  expect(screen.getByText("Senior Fullstack Web Developer")).toBeDefined();
});
