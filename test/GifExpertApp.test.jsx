import { GifExpertApp } from "../src/GifExpertApp";
import { render, screen, fireEvent } from "@testing-library/react";

describe('Pruebas GifExpertApp', () => { 

    test('debería agregar una nueva categoría al Grid', () => {
        
        // const categories = ['Naruto', 'Goku'];
        const newCategory = 'Saitama';
        // const selectValue = screen.getByDisplayValue('Saitama');

        render(<GifExpertApp />);
        
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");
        
        // onAddCategory('Eren');
        fireEvent.input( input, { target: { value: newCategory } });
        // expect(selectValue).to.equal(newCategory);
        fireEvent.submit( form );
        screen.debug();
        
        // expect(screen.getByRole('heading', { level: 3 }).innerHTML).toContain('Saitama');
        expect( screen.getByText( 'Saitama' ) );
        // Revisar lo comentado e intentar realizar los test
    });


});