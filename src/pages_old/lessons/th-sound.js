import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function ThSoundLesson() {
  return (
    <Layout
      title="The TH Sound in American English"
      description="Learn how to correctly pronounce the 'th' sound in American English, one of the most challenging sounds for non-native speakers.">
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <Link to="/lessons">← Back to All Lessons</Link>
              
              <Heading as="h1" className="margin-top--md">The TH Sound in American English</Heading>
              
              <div className="admonition admonition-tip alert alert--success">
                <div className="admonition-heading">
                  <h5>Two Different TH Sounds</h5>
                </div>
                <div className="admonition-content">
                  <p>
                    There are actually two different "th" sounds in English:
                  </p>
                  <ul>
                    <li><strong>Voiced TH</strong>: as in "this", "that", "mother"</li>
                    <li><strong>Unvoiced TH</strong>: as in "think", "thumb", "mouth"</li>
                  </ul>
                </div>
              </div>
              
              <Heading as="h2">How to Pronounce the TH Sound</Heading>
              
              <p>
                The "th" sound is made by placing the tip of your tongue between your top and bottom front teeth, 
                then pushing air out while your tongue is in that position.
              </p>
              
              <ol>
                <li>
                  <strong>Tongue Position</strong>: Place the tip of your tongue between your front teeth. 
                  It should be visible if you look in a mirror.
                </li>
                <li>
                  <strong>For the Unvoiced TH</strong>: Push air out without vibrating your vocal cords 
                  (like a whisper). Try saying "think" or "thin".
                </li>
                <li>
                  <strong>For the Voiced TH</strong>: Push air out while vibrating your vocal cords. 
                  Place your hand on your throat to feel the vibration. Try saying "the" or "this".
                </li>
              </ol>
              
              <div 
                style={{ 
                  padding: '20px', 
                  backgroundColor: '#eaf2f8', 
                  borderRadius: '5px',
                  marginTop: '20px',
                  marginBottom: '20px'
                }}
              >
                <Heading as="h3">Common Mistakes</Heading>
                <ul>
                  <li>
                    <strong>Substituting "d" or "t"</strong>: Many speakers use "d" instead of the voiced "th" 
                    (saying "dis" instead of "this") or "t" instead of the unvoiced "th" (saying "tink" instead of "think").
                  </li>
                  <li>
                    <strong>Substituting "s" or "z"</strong>: Some speakers replace "th" with "s" or "z" sounds.
                  </li>
                  <li>
                    <strong>Not extending the tongue</strong>: The tongue must be visible between the teeth.
                  </li>
                </ul>
              </div>
              
              <Heading as="h2">Practice Words</Heading>
              
              <div className="row">
                <div className="col col--6">
                  <div className="card">
                    <div className="card__header">
                      <h3>Unvoiced TH Words</h3>
                    </div>
                    <div className="card__body">
                      <ul>
                        <li>Think</li>
                        <li>Thin</li>
                        <li>Thumb</li>
                        <li>Thought</li>
                        <li>Three</li>
                        <li>Throw</li>
                        <li>Thirsty</li>
                        <li>Thursday</li>
                        <li>Theory</li>
                        <li>Bathroom</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="col col--6">
                  <div className="card">
                    <div className="card__header">
                      <h3>Voiced TH Words</h3>
                    </div>
                    <div className="card__body">
                      <ul>
                        <li>The</li>
                        <li>This</li>
                        <li>That</li>
                        <li>They</li>
                        <li>There</li>
                        <li>Those</li>
                        <li>Then</li>
                        <li>Mother</li>
                        <li>Father</li>
                        <li>Weather</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <Heading as="h2" className="margin-top--lg">Practice Sentences</Heading>
              
              <ol>
                <li>I think <strong>those three</strong> are <strong>the</strong> best.</li>
                <li>My brother's birthday is on <strong>Thursday</strong>.</li>
                <li><strong>They thought that the theater</strong> was closed.</li>
                <li>Is <strong>this</strong> your <strong>thirteenth</strong> birthday?</li>
                <li>My <strong>father</strong> has a new <strong>theory</strong> about <strong>the weather</strong>.</li>
              </ol>
              
              <div 
                style={{ 
                  padding: '20px', 
                  backgroundColor: '#f8eaf2', 
                  borderRadius: '5px',
                  marginTop: '30px',
                  marginBottom: '30px'
                }}
              >
                <Heading as="h3">Tongue Twister Challenge</Heading>
                <p>Try saying these tongue twisters to practice the "th" sound:</p>
                <ol>
                  <li><strong>Th</strong>e <strong>th</strong>ick <strong>th</strong>readbare <strong>th</strong>read <strong>th</strong>at <strong>th</strong>rowaway <strong>th</strong>read-<strong>th</strong>inking <strong>th</strong>imble <strong>th</strong>ought.</li>
                  <li><strong>Th</strong>ey <strong>th</strong>ought a <strong>th</strong>ousand <strong>th</strong>ings on <strong>Th</strong>ursday <strong>th</strong>e <strong>th</strong>irteenth.</li>
                </ol>
              </div>
              
              <Heading as="h2">Next Steps</Heading>
              <p>
                Practice the TH sound daily, focusing on the correct tongue position. Start slowly and gradually
                increase your speed. Record yourself saying the practice words and sentences, then compare with 
                native pronunciations.
              </p>
              
              <div className="margin-top--lg margin-bottom--lg">
                <Link
                  className="button button--primary button--lg"
                  to="/lessons">
                  Back to All Lessons
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}