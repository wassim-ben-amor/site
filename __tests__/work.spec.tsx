import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/work/page";

test("Work Experiences page", () => {
  render(<Page />);
  expect(screen.getByText("Work Experiences")).toBeDefined();
});
