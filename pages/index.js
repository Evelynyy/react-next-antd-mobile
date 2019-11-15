import {
  FormattedMessage,
  FormattedNumber,
  defineMessages,
  useIntl,
} from 'react-intl';
import Head from 'next/head';
import { Button } from 'antd-mobile';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import withStyles from 'react-jss';

import Layout from '../components/Layout/Layout';
import Login from '../components/Login/login';

const styles = {
  container: {
    marginTop: 100,
    textAlign: 'center',
  },

  header: {
    fontSize: 24,
    lineHeight: 1.25,
  },
};

const { description } = defineMessages({
  description: {
    id: 'description',
    defaultMessage: 'An example app integrating React Intl with Next.js',
  },
});

function Index(props) {
  const intl = useIntl();

  return (
    <Layout title="Index">
      <Head>
        <meta name="description" content={intl.formatMessage(description)} />
      </Head>
      {/* <p className={props.classes.container}>
        <FormattedMessage id="greeting" defaultMessage="Hello, World!" />
      </p>
      <p className={props.classes.header}>
        <FormattedNumber value={1000} />
      </p> */}
      <Link href="/about">
        <Button>Go to About</Button>
      </Link>
      <div>
        <p>Next.js has {props.stars} ⭐️</p>
        <Link href="/preact">
          <a>How about preact?</a>
        </Link>
      </div>

      <Login />
    </Layout>
  );
}

Index.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const json = await res.json(); // better use it inside try .. catch
  return { stars: json.stargazers_count };
};

export default withStyles(styles)(Index);
