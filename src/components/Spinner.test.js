import { render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react";
import Spinner from './Spinner';

describe("Spinner", () => {
    test("render correctly", () => {
        act(() => {
            render(<Spinner />);
        })


        const containerDiv = screen.getByTestId("spin-container");
        expect(containerDiv).toBeInTheDocument();
    })
})