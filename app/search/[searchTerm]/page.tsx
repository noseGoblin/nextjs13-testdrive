import React from 'react';

type PageProps = {
  params: {
    searchTerm: string;
  };
};

const search = async (searchTerm: string) => {
  const res = await fetch(
    `http://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.SERPAPI_KEY}`
  );

  const data = await res.json();
  return data;
};

async function SearchResults({ params: { searchTerm } }: PageProps) {
  const searchResults = await search(searchTerm);
  return <div>SearchResults</div>;
}

export default SearchResults;
