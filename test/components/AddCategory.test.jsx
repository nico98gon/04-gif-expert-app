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

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
                
        expect( input.value ).toBe( inputValue );
        
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        // expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    });
    
    test('no debe de llamar a onNewCategory si el input está vacío', () => {

        const onNewCategory= jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form');

        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        // expect( onNewCategory ).not.toHaveBeenCalled();

    });

    test('no debe de llamar a onNewCategory si el input = 1 caracter', () => {

        const inputValue = 'a';
        const onNewCategory= jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);

    });

    test('no debe de llamar a onNewCategory si el input <= 1 caracter', () => {

        const inputValue = '';
        const inputValue1 = 'a';
        const onNewCategory= jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);

        fireEvent.input( input, { target: { value: inputValue1 } });
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);

    });

});