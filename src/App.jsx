import React from 'react';
import filesize from 'filesize';

import TextInput from './text-input';
import useHeadLookup from './use-head-lookup';

const slackMax = 3145728; // 3 MB (binary) -- I assume this is what Slack means by "3 MB"

export default () => {
  const {
    url,
    setUrl,
    lookup: { loading, error, result },
  } = useHeadLookup();

  return (
    <>
      <TextInput onTextChanged={({ text }) => setUrl(text)} />
      <h2>{url}</h2>
      {error && <div>Error! {JSON.stringify(error)}</div>}
      {loading && <div>Loading...</div>}
      {result && <h1>{result <= slackMax ? 'YES' : 'NO'}</h1>}
      {result && <p>Your file is {filesize(result)}</p>}
    </>
  );
};
