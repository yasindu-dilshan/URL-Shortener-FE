import React from 'react';

const ShortenerBar = ({longUrl, setLongUrl, shortenUrl}) => {
    return (
        <div>
            <h1>URL Shortener</h1>
            <div>
                <label>Long URL:</label>
                <input type="text" value={longUrl} onChange={(e) => setLongUrl(e.target.value)}/>
            </div>
            <button onClick={shortenUrl}>Shorten URL</button>
        </div>
    );
}

export default ShortenerBar;