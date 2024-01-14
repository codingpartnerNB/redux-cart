import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
  {
    id: 'p1',
    title: 'My First Trial',
    description: 'This is the hardest one',
    price: 390
  },
  {
    id: 'p2',
    title: 'My Second Trial',
    description: 'This is the most hardest one',
    price: 470
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map(item => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
