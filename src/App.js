import React, { useState } from 'react';
import './App.css';
import ShortenerBar from "./components/Shortener/ShortenerBar";
import ShortUrl from "./components/ShortUrl/ShortUrl";

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const shortenUrl = async () => {
    const response = await fetch('http://localhost:8080/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `longUrl=${longUrl}`,
    });

    if (response.ok) {
      const result = await response.json();
      setShortUrl("http://localhost:8080/yd/"+result.shortUrl);
    } else {
      console.error('Failed to shorten URL');
    }
  };

  return (
      <div className="App">
        <ShortenerBar longUrl={longUrl} setLongUrl={setLongUrl} shortenUrl={shortenUrl}/>
        <ShortUrl shortUrl={shortUrl}/>
      </div>
  );
}

export default App;
