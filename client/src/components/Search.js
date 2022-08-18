import React, { useEffect, useState } from 'react'
import { InputBase, List, ListItem, Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import {fetchProducts} from '../redux/actions/productActions'
import {useSelector, useDispatch} from 'react-redux'

const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
  width: 38%;
    border: 1px solid #00000054;
    border-radius: 0.2rem;

`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

const Search = () => {
    const [ text, setText ] = useState();
    const [ open, setOpen ] = useState(true)

    const getText = (text) => {
        setText(text);
        setOpen(false)
    }

    const getProducts = useSelector(state => state.allproducts);
    const { products } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    return (
        <SearchContainer>
            <InputSearchBase
                placeholder="Search for products, brands and more"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => getText(e.target.value)}
                value={text}
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            {
                text &&
                <ListWrapper hidden={open} style={{width:"38%"}}>
                    {
                        products.filter(product => product.title.toLowerCase().includes(text.toLowerCase())).map(product => (
                            <ListItem style={{}}>
                                <Link
                                    to={`/product/${product.id}`}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                    onClick={() => {setOpen(true)
                                    setText("")}}
                                >
                                    {product.title}
                                </Link>
                            </ListItem>
                        ))
                    }
                </ListWrapper>
            }
        </SearchContainer>
    )
}

export default Search