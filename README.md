# TSDX NPM Example Not Dowland


import {
  ProductCard
ProductImage
ProductTitle
ProductButtons
} from 'future-card-product'


```
  <ProductCard 
                product={ product }
                initialValues={{
                    count: 6,
                    maxCount: 10,
                }}
            >
                {
                    ({ reset, count, isMaxCountReached, maxCount, increaseBy  }) => (
                        <>
                            <ProductImage/>
                            <ProductTitle />
                            <ProductButtons />
                         
                        </>
                    )
                }
            </ProductCard>

```