import React from 'react'
import InfiniteMenu from '../components/InfiniteMenu'
function Check() {
  const items = [
  {
    image: 'https://cdn.simpleicons.org/figma',
    link: 'https://www.figma.com/',
    title: 'Figma',
    description: 'Figma is a collaborative interface design tool.'
  },
  {
    image: 'https://cdn.simpleicons.org/react',
    link: 'https://react.dev/',
    title: 'React',
    description: 'A JavaScript library for building user interfaces.'
  },
  
  {
    image: 'https://cdn.simpleicons.org/vite',
    link: 'https://vitejs.dev/',
    title: 'Vite',
    description: 'Next generation frontend tooling for faster builds.'
  },
  {
    image: 'https://cdn.simpleicons.org/tailwindcss',
    link: 'https://tailwindcss.com/',
    title: 'Tailwind CSS',
    description: 'A utility-first CSS framework for rapid UI development.'
  },
  {
    image: 'https://cdn.simpleicons.org/framer',
    link: 'https://www.framer.com/motion/',
    title: 'Framer Motion',
    description: 'An open-source motion library for React.'
  },
  {
    image: 'https://cdn.simpleicons.org/eslint',
    link: 'https://eslint.org/',
    title: 'ESLint',
    description: 'A tool for identifying and fixing JavaScript code issues.'
  },
  {
    image: 'https://cdn.simpleicons.org/nodedotjs',
    link: 'https://nodejs.org/',
    title: 'Node.js',
    description: 'JavaScript runtime built on Chrome’s V8 engine.'
  },
 
  {
    image: 'https://cdn.simpleicons.org/fastapi',
    link: 'https://fastapi.tiangolo.com/',
    title: 'FastAPI',
    description: 'A modern, fast (high-performance) web framework for Python.'
  },
  {
    image: 'https://cdn.simpleicons.org/mongodb',
    link: 'https://www.mongodb.com/',
    title: 'MongoDB',
    description: 'A NoSQL database program using JSON-like documents.'
  },
  {
    image: 'https://cdn.simpleicons.org/python',
    link: 'https://www.python.org/',
    title: 'Python',
    description: 'A powerful, high-level, general-purpose programming language.'
  },
  {
    image: 'https://cdn.simpleicons.org/scikitlearn',
    link: 'https://scikit-learn.org/',
    title: 'Scikit-learn',
    description: 'A machine learning library for Python.'
  }
];

  return (
  <div style={{ height: '600px', position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div>
  );
}

export default Check;



