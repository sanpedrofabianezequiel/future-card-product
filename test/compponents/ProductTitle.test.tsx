import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle } from '../../src/components';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('Product title', () => {

    test('debe de mostrar el componente correctamente con el titulo personalizado', () => {

        const wrapper = renderer.create(
            <ProductTitle  title='Custom product' className='custom-class'/>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
    
    test('debe de mostrar el componente con el nombre del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1} >
                {
                    ()=>(
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })
    
})
