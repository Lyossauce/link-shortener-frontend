/**
 * Shortens a given URL by sending a POST request to the link shortener service.
 *
 * @param url - The URL to be shortened.
 * @returns A promise that resolves to the shortened URL as a string.
 *
 * @throws Will throw an error if the fetch request fails or if the response is not in JSON format.
 */
  export const  shortenLink = async (url: string): Promise<string> => {
    const response = await fetch('http://localhost:3000/local/links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });
    const data = await response.json();
    return data.url;
  }