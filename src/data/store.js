export const posts = [
    {
      id: 1,
      title: 'React Overview',
      content: `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
      Declarative views make your code more predictable and easier to debug.
      Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.`,
      author: 'Ram',
      category: 'react'
    },
    {
      id: 2,
      title: 'Angular JumpStart',
      content: `Angular is an app-design framework and development platform for creating efficient and sophisticated single-page apps.
      Use modern web platform capabilities to deliver app-like experiences. High performance, offline, and zero-step installation.
      `,
      author: 'Hari',
      category: 'angular'
    },
    {
      id: 3,
      title: 'Introduction to Redux',
      content: `Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.`,
      author: 'Krish',
      category: 'redux'
    }
  ];
  
  export const categories = [
    {
      id: 'react',
      name: 'React'
    },
    {
      id: 'angular',
      name: 'Angular'
    },
    {
      id: 'redux',
      name: 'Redux'
    },
    {
      id: 'java',
      name: 'Java'
    }

  ];
  
  export const categoryAll = {
    id: 'all',
    name: 'All'
  };