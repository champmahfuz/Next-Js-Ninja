import { useRouter } from 'next/router';
import React from 'react';

const NewsDetails = () => {
    const router = useRouter()
    return (
        <div>
            <h1>This is Details Page of News {router.query.newsId}</h1>
        </div>
    );
};

export default NewsDetails;