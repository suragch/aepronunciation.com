import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function AppPage() {
  return (
    <Layout
      title="American English Pronunciation App"
      description="Download the app to improve your pronunciation.">
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <Heading as="h1">American English Pronunciation App</Heading>
              
              <p>
                The mobile app helps you practice your American English pronunciation anywhere.
              </p>
              
              <div className="gallery" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: '30px'}}>
                <img src="/uploads/2018/08/Screenshot_2017-01-07-19-17-58-267_com.aepronunciation.ipa_.png" alt="App Screenshot 1" style={{maxHeight: '400px'}} />
                <img src="/uploads/2018/08/Screenshot_2017-01-07-19-19-10-038_com.aepronunciation.ipa_.png" alt="App Screenshot 2" style={{maxHeight: '400px'}} />
                <img src="/uploads/2018/08/Screenshot_2017-01-07-19-22-12-142_com.aepronunciation.ipa_.png" alt="App Screenshot 3" style={{maxHeight: '400px'}} />
              </div>
              
              <hr />
              
              <div style={{ marginTop: '30px', marginBottom: '10px', textAlign: 'center' }}>
                <Link
                  className="button button--primary button--lg"
                  to="https://play.google.com/store/apps/details?id=com.aepronunciation.ipa" 
                  style={{ marginRight: '20px', marginBottom: '20px' }}>
                  Android
                </Link>
                <Link
                  className="button button--primary button--lg"
                  to="https://itunes.apple.com/us/app/ae-pronunciation/id1049726030?mt=8"
                  style={{ marginBottom: '20px' }}>
                  Apple
                </Link>
              </div>
              
              <p style={{ textAlign: 'center' }}>
                <Link to="/uploads/2020/05/aePronunciation_2.2.0.apk">
                  Android APK direct download
                </Link>
              </p>
              
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}