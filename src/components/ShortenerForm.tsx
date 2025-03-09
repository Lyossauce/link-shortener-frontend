import { useState } from "react";
import { shortenLink } from "../services/LinkShortenerService";

export default function ShortenerForm() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const shortenedUrl = await shortenLink(url);
    setShortUrl(shortenedUrl);
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="shortener-form">
        <input
            type="text"
            placeholder="Shorten a link here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit" disabled={loading}>
            {loading ? 'Shortening...' : 'Shorten It!'}
        </button>
      </form>
      {shortUrl && (
        <div className="short-url">
          <span>{shortUrl}</span>
          <button
            onClick={() => {
              navigator.clipboard.writeText(shortUrl);
            }}
          >
            Copy
          </button>
        </div>
      )}
    </div>
    
  );
}