import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function AppPage() {
  return (
    <Layout
      title="American English Pronunciation App"
      description="Download our American English pronunciation app to improve your speaking skills and get real-time feedback on your pronunciation.">
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <Heading as="h1">AE Pronunciation App</Heading>
              
              <p>
                Our mobile app helps you practice your American English pronunciation anywhere, 
                with instant feedback and personalized exercises.
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
              
              <Heading as="h2">App Features</Heading>
              <ul>
                <li><strong>Sound Library</strong>: Practice all American English sounds</li>
                <li><strong>Interactive Exercises</strong>: Get real-time feedback on your pronunciation</li>
                <li><strong>Progress Tracking</strong>: Monitor your improvement over time</li>
                <li><strong>Offline Mode</strong>: Practice without an internet connection</li>
              </ul>
              
              <Heading as="h2">How It Works</Heading>
              <p>
                The app uses speech recognition technology to analyze your pronunciation and 
                provide instant feedback. Practice with word lists, sentences, and dialogues 
                designed specifically for non-native English speakers.
              </p>
              
              <Heading as="h2">User Reviews</Heading>
              <div style={{ 
                padding: '20px', 
                backgroundColor: '#f0f4f8', 
                borderRadius: '5px',
                marginBottom: '15px'
              }}>
                <p>"This app has helped me improve my pronunciation tremendously. The feedback is accurate and helpful." - Maria S.</p>
              </div>
              
              <div style={{ 
                padding: '20px', 
                backgroundColor: '#f0f4f8', 
                borderRadius: '5px'
              }}>
                <p>"I've tried many pronunciation apps, but this one is by far the most effective. Highly recommended!" - Takashi M.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}