import React from 'react';

type PageProps = {
  params: {
    searchTerm: string;
  };
};

type SearchResult = {
  organic_results: [
    {
      position: number;
      title: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};

const search = async (searchTerm: string) => {
  const res = await fetch(
    `http://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.SERPAPI_KEY}`
  );

  // error trigger below - enable only in PROD build
  // throw new Error('WHOOPS something broke');
  const data: SearchResult = await res.json();
  return data;
};

async function SearchResults({ params: { searchTerm } }: PageProps) {
  const searchResults = await search(searchTerm);

  return (
    <div>
      <p className='text-gray-500 text-sm'>You searched for: {searchTerm}</p>
      <ol className='space-y-5 p-5'>
        {searchResults.organic_results.map((result) => (
          <li key={result.position} className='list-decimal'>
            <p className='font-bold'>{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SearchResults;
