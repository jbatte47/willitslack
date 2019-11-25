import { useState } from 'react';
import useConstant from 'use-constant';
import debounce from 'awesome-debounce-promise';
import { useAsync } from 'react-async-hook';
import axios from 'axios';

const getFileSize = async url => {
  const { headers: { 'content-length': contentLength } = {} } = (await axios.head(url)) || {};
  return contentLength;
};

const useHeadLookup = () => {
  const [url, setUrl] = useState('');
  const debouncedGetFileSize = useConstant(() => debounce(getFileSize, 500));
  const lookup = useAsync(() => (!url || url.length === 0 ? null : debouncedGetFileSize(url)), [
    url,
  ]);

  return {
    url,
    setUrl,
    lookup,
  };
};

export default useHeadLookup;
