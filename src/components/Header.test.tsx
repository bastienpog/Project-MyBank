import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";
import "@testing-library/jest-dom";

describe("Header Component", () => {
    it("renders logo and title", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        expect(screen.getByText("MyPiggyBank")).toBeInTheDocument();
    });

    it("renders navigation links", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Expense")).toBeInTheDocument();
    });

    it("links have correct paths", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
        expect(screen.getByText("Expense").closest("a")).toHaveAttribute("href", "/Expense");
    });
});
