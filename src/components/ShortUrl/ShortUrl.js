import React from 'react';

function ShortUrl({shortUrl}) {
    return (
        <div>
            {shortUrl && (
                <div>
                    <p>Shortened URL:</p>
                    <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                        {shortUrl}
                    </a>
                </div>
            )}
        </div>
    );
}

export default ShortUrl;