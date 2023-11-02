import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;
const itemsPerPage = 6; // Number of products per page
const ProductPage = styled.div`
display: flex;
  justify-content: center;
  margin-top: 20px;
  margin: 0 5px;
  cursor: pointer;
  font-size:22px;
  &.active {
    font-weight: bold;
  }
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 5px 15px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width:50vh;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;
const ProductDescription = styled.span`
    font-size:18px;
    margin:10px 0;
`
const ProductPrice = styled.p`
  font-size: 16px;
  color: #333;
`;
const FilterContainer = styled.div`
  margin-bottom: 20px;
`;
const SelectContainer = styled.select`
  border-radius:10px;
`;
const ProductListPage = ({ products }) => {
    const [filter, setFilter] = useState('all');
  const [sort, setsort] = useState('price');
  const [currentPage, setCurrentPage] = useState(0);

  const filteredProducts = filter === 'all' ? products : products.filter(product => product.category === filter);

  const ProductsSort = [...filteredProducts].sort((a, b) => {
    if (sort === 'price') {
      return a.price - b.price;
    } else if (sort === 'title') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setsort(e.target.value);
  };
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const pageCount = Math.ceil(ProductsSort.length / itemsPerPage);
  const ProductDisplay = ProductsSort.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (<>
  <FilterContainer className='FiterContainer'>
        <label>
          Filter by Category:
          <select value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="Mobile&Accesories">Mobile&Accesories</option>
            <option value="Electronics">Electronics</option>
            <option value="TV&Appliances">TV&Appliances</option>
            <option value="fashion">Fashion</option>
            <option value="Beauty">Beauty</option>
            <option value="Home&Kitchen">Home and Kitchen</option>
          </select>
        </label>

        <label>
          Sort by:
          <select value={sort} onChange={handleSortChange}>
            <option value="select">Select</option>
            <option value="price">Price</option>
            <option value="title">title</option>
          </select>
        </label>
      </FilterContainer>
            <ProductListContainer>
            {ProductDisplay.map((product, index) => (
          <ProductCard className='ProductCard' key={index}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>₹{product.price.toFixed(2)}</ProductPrice>
            <ProductDescription>{product.description}</ProductDescription>

          </ProductCard>
        ))}
    {/* {products.map((product, index) => (
      <ProductCard key={index}>
        <ProductImage src={product.image} alt={product.name} />
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        <ProductTitle>{product.description}</ProductTitle>

      </ProductCard>
    ))} */}

  </ProductListContainer>
  <ProductPage>
  <ReactPaginate
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
  </ProductPage>
  </>);
};

export default ProductListPage;
