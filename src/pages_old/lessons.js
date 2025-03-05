import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

const lessons = [
  {
    id: 'vowel-sounds',
    title: 'American English Vowel Sounds',
    description: 'Learn how to pronounce American English vowel sounds correctly.',
    link: '/lessons/vowel-sounds',
  },
  {
    id: 'consonant-sounds',
    title: 'American English Consonant Sounds',
    description: 'Master the consonant sounds that are challenging for non-native speakers.',
    link: '/lessons/consonant-sounds',
  },
  {
    id: 'th-sound',
    title: 'The TH Sound',
    description: 'Practice the unique "th" sounds in American English that many languages don\'t have.',
    link: '/lessons/th-sound',
  },
  {
    id: 'r-sound',
    title: 'The American R Sound',
    description: 'Learn to pronounce the American R sound, which is different from most other languages.',
    link: '/lessons/r-sound',
  },
  {
    id: 'l-sound',
    title: 'The L Sound',
    description: 'Master the L sound in initial and final positions in words.',
    link: '/lessons/l-sound',
  },
  {
    id: 'word-stress',
    title: 'Word Stress in American English',
    description: 'Learn the patterns of syllable stress in American English words.',
    link: '/lessons/word-stress',
  },
  {
    id: 'sentence-stress',
    title: 'Sentence Rhythm and Stress',
    description: 'Improve your fluency by learning proper sentence rhythm and stress patterns.',
    link: '/lessons/sentence-stress',
  },
  {
    id: 'linking-sounds',
    title: 'Linking Words in American English',
    description: 'Learn how Americans connect words together when speaking naturally.',
    link: '/lessons/linking-sounds',
  },
  {
    id: 'reduced-sounds',
    title: 'Reduced Sounds and Weak Forms',
    description: 'Master the reduced vowel sounds that occur in unstressed syllables.',
    link: '/lessons/reduced-sounds',
  },
  {
    id: 'intonation',
    title: 'American English Intonation Patterns',
    description: 'Learn the natural rises and falls in pitch when speaking American English.',
    link: '/lessons/intonation',
  },
];

function LessonCard({ title, description, link }) {
  return (
    <div className="card margin-bottom--lg">
      <div className="card__body">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className="card__footer">
        <Link
          className="button button--primary button--block"
          to={link}>
          View Lesson
        </Link>
      </div>
    </div>
  );
}

export default function LessonsPage() {
  return (
    <Layout
      title="American English Pronunciation Lessons"
      description="Free lessons to help you improve your American English pronunciation and speak with clarity and confidence.">
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <Heading as="h1">American English Pronunciation Lessons</Heading>
              <p>
                Our pronunciation lessons are designed to help non-native English speakers 
                improve their American English pronunciation. Each lesson focuses on specific 
                sounds or aspects of pronunciation.
              </p>
              
              <p>
                Click on a lesson below to get started. We recommend beginning with the vowel and 
                consonant sounds before moving on to more advanced topics like rhythm and intonation.
              </p>
            </div>
          </div>
          
          <div className="row margin-top--lg">
            {lessons.map((lesson, idx) => (
              <div key={lesson.id} className="col col--6 margin-bottom--lg">
                <LessonCard 
                  title={lesson.title} 
                  description={lesson.description} 
                  link={lesson.link} 
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}