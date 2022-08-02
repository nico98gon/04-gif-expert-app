import { GifItem } from "../../src/components/GifItem";
import { render, screen } from "@testing-library/react";

describe('Pruebas GifExpertApp', () => { 
    
    const title = 'Saitama';
    const url = "https://one-punch.com/saitama.jpg";
    
    test('should de hacer match con el snapshot', () => { 

        const { container } = render( <GifItem title="{ title }" url="{ url }" />)
        expect( container ).toMatchSnapshot();

    });

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => { 

        render( <GifItem title= { title } url= { url } />)
        // expect( screen.getByRole('img').src).toBe(url);
        // expect( screen.getByRole('img').alt).toBe(title);
        // screen.debug();
        const { src, alt} = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe(title);

    });

    test('debe mostra el titulo en el componente', () => {
        render( <GifItem title= { title } url= { url } />)
        expect(screen.getByText( title )).toBeTruthy();
    })
    
});