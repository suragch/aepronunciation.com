import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/app"
            style={{ marginRight: '20px' }}>
            Get the App
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/lessons">
            View Lessons
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Improve Your American English Pronunciation"
      description="Learn American English pronunciation with free lessons and a pronunciation app to help you speak English with confidence.">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <Heading as="h2">Welcome</Heading>
              <p>
                Welcome to aePronunciation.com, your resource for improving your American English pronunciation. 
                Study the pronunciation lessons and use the mobile app to help you speak English clearly and confidently.
              </p>
              
              <Heading as="h3">Resources</Heading>
              <ul>
                <li><strong>Lessons</strong>: Topical lessons for specific sounds, stress, and intonation</li>
                <li><strong>Pronunciation App</strong>: Train your ear to recognize the subtle differences between sounds</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
