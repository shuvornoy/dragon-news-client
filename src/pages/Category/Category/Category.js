import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCart from '../../Shared/NewsCart/NewsCart';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2> Total Category: {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsCart
                key={news.id}
                news={news}
                ></NewsCart>)
            }
        </div>
    );
};

export default Category;