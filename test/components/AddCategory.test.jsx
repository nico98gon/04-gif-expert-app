import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('Pruebas en <AddCategory/>', () => {

    test('debe de cambiar la caja de texto', () => {
        
        render( <AddCategory onNewCategory={ () => {} } /> );
        // screen.debug();
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Saitama' } });

        expect( input.value ).toEqual('Saitama');

    });
});