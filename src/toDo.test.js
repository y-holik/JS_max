import userEvent from "@testing-library/user-event";
import ToDo from "./toDo";
import { render, screen } from '@testing-library/react';
import React from "react";

// test.describe('Peptide library testing', () => {
//     test.beforeEach(async ({ page }) => {
//       await render(<ToDo />);
//     });

// test.beforeEach(() => {
//     render(<ToDo />); 
    

test('naming test', () => {
    render(<ToDo />);
    const linkElement = screen.getByText(/todo/i);
    expect(linkElement).toBeInTheDocument();
});

test('checkbox testing', async () => {
    render(<ToDo />);
    const inputField = screen.getByPlaceholderText('input task');
    await userEvent.type(inputField, 'pervii');
    await screen.getByTestId('adding').click();
    const checkbox = screen.getByTestId('checkbox-1');
    checkbox.click();
    expect(checkbox).toBeChecked();
});

test('button X visibility', () => {
    render(<ToDo />);
    // const inputField = screen.getByPlaceholderText('input task');
    // await userEvent.type(inputField, 'vtoroi');
    // await screen.getByTestId('adding').click();

    // const checkbox = screen.getByTestId('checkbox-2');
    // expect(checkbox).not.toBeChecked();
    const deleteButton = screen.getByTestId('deletion');
    expect(deleteButton).toBeInTheDocument();    
});  

test('button Edit visibility', () => {
    render(<ToDo />);
    const deleteButton = screen.getByTestId('editing');
    expect(deleteButton).toBeInTheDocument();   
});

test('line-through testing', async () => {
    render(<ToDo />);
    const inputField = screen.getByPlaceholderText('input task');
    await userEvent.type(inputField, 'pervii');
    const Text = screen.getByText('pervii - true');
    expect(Text).toHaveStyle('text-decoration: line-through');
});