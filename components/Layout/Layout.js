import { defineMessages, useIntl } from 'react-intl';
import { NavBar, Icon, WingBlank } from 'antd-mobile';
import { withRouter } from 'next/router';
import Head from 'next/head';
import withStyles from 'react-jss';
import Nav from './Navigation/Nav';

const styles = {
  header: {
    padding: '15px 0 9px 15px',
    color: '#000',
    'font-size': '16px',
    'line-height': '16px',
    height: '16px',
    'font-weight': 'bolder',
    position: 'relative',
  },
};

const messages = defineMessages({
  title: {
    id: 'title',
    defaultMessage: 'React Intl Next.js Example',
  },
});

function Layout(props) {
  const { title, children } = props;

  const intl = useIntl();

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title || intl.formatMessage(messages.title)}</title>
      </Head>

      <NavBar mode="light">
        {title || intl.formatMessage(messages.title)}
      </NavBar>
      <Nav />
      <WingBlank>{children}</WingBlank>
    </div>
  );
}

export default withStyles(styles)(Layout);
