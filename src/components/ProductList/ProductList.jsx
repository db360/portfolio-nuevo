import React from 'react';
import "./productList.css";
import Product from '../Product/Product';
import {projects} from "../../data";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Think bigger, build Smarter, solve harder</h1>
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsum beatae numquam nostrum ipsa aspernatur qui soluta, itaque natus suscipit?
                </p>
            </div>
            <div className="pl-list">
                {projects.map(item=>(
                    <Product key={item.id} img={item.img} link={item.url} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
