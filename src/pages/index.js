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
              <Heading as="h2">Welcome to AEPronunciation</Heading>
              <p>
                Welcome to AEPronunciation.com, your resource for improving your American English pronunciation. 
                We offer free pronunciation lessons and a mobile app to help you speak English clearly and confidently.
              </p>
              
              <Heading as="h3">Our Resources</Heading>
              <ul>
                <li><strong>Free Lessons</strong>: Step-by-step guides for specific sounds and pronunciation challenges</li>
                <li><strong>Pronunciation App</strong>: Practice and get feedback on your pronunciation anywhere</li>
              </ul>
              
              <Heading as="h3">Why Improve Your Pronunciation?</Heading>
              <p>
                Clear pronunciation helps others understand you better and gives you more confidence when speaking English.
                Our approach focuses on the most important aspects of pronunciation that make the biggest difference in being understood.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
