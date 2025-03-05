import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function ContactPage() {
  return (
    <Layout
      title="Contact Us"
      description="Get in touch with the American English Pronunciation team. We're here to help with any questions about our lessons or app.">
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <Heading as="h1">Contact Us</Heading>
              <p>
                Have questions about our pronunciation lessons or app? Want to suggest a new lesson topic?
                We'd love to hear from you!
              </p>
              
              <div className="card margin-bottom--lg">
                <div className="card__body">
                  <Heading as="h3">Contact Information</Heading>
                  <p><strong>Email:</strong> info@aepronunciation.com</p>
                  <p><strong>Response Time:</strong> We typically respond within 1-2 business days</p>
                </div>
              </div>
              
              <Heading as="h2">Frequently Asked Questions</Heading>
              
              <div style={{ marginBottom: '20px' }}>
                <Heading as="h3">Is the content free?</Heading>
                <p>
                  All of our online lessons are completely free. The mobile app has a free version 
                  with limited features and a premium version with full functionality.
                </p>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <Heading as="h3">Do you offer private lessons?</Heading>
                <p>
                  We don't currently offer private lessons, but we're working on adding personalized 
                  feedback features to our app in the future.
                </p>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <Heading as="h3">Can I suggest a new lesson topic?</Heading>
                <p>
                  Absolutely! We welcome suggestions for new lesson topics. Please email us with your ideas.
                </p>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <Heading as="h3">I found an error in one of the lessons. How can I report it?</Heading>
                <p>
                  We appreciate your feedback! Please email us with the specific lesson and error details.
                </p>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <Heading as="h3">Do you have materials for teachers?</Heading>
                <p>
                  We're currently developing resources specifically for English teachers. 
                  Sign up for our newsletter to be notified when these materials become available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}