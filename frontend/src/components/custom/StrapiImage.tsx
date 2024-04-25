import React, { useState, useEffect } from 'react';

interface StrapiImageProps {
    endpoint: string;
}

const StrapiImage: React.FC<StrapiImageProps> = ({ endpoint }) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(endpoint)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Assuming the image URL is located at `data.data.attributes.imageUrl`
                // Adjust the path according to your API response structure
                const imageUrl = data.data.attributes.imageUrl;
                setImageUrl(imageUrl);
                setLoading(false);
            })
            .catch(error => {
                console.error('Fetching error:', error);
                setError('Failed to load image');
                setLoading(false);
            });
    }, [endpoint]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {imageUrl ? <img src={imageUrl} alt="Strapi Image" style={{ width: '100%' }} /> : <p>No image found</p>}
        </div>
    );
};

export default StrapiImage;
