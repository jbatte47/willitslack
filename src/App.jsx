import React from 'react';
import filesize from 'filesize';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import TextInput from './text-input';
import useHeadLookup from './use-head-lookup';
import useStyle from './use-style';
import reaction from './reaction';

const slackMax = 3145728; // 3 MB (binary) -- I assume this is what Slack means by "3 MB"
const positiveFeedback = <span>That&apos;s just right! Post away!</span>;
const negativeFeedback = (
  <span>That&apos;s too large (max file size: {filesize(slackMax)}). Find something smaller.</span>
);

export default () => {
  const {
    setUrl,
    lookup: { loading, error, result },
  } = useHeadLookup();
  const css = useStyle();

  return (
    <>
      <CssBaseline />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextInput label="Enter your URL" onTextChanged={({ text }) => setUrl(text)} />
          </Grid>
          <Grid item xs={12} className={css.feedback}>
            {error && <div>Error! {error.message}</div>}
            {loading && <CircularProgress />}
            {result && (
              <h1>
                {result <= slackMax ? 'YES' : 'NO'} {reaction(result <= slackMax)}
              </h1>
            )}
          </Grid>
          <Grid item xs={12} className={css.feedback}>
            {result && (
              <p>
                Your file is <span className={css.fileSize}>{filesize(result)}</span>.{' '}
                {result <= slackMax ? positiveFeedback : negativeFeedback}
              </p>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
