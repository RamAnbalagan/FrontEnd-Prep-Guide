# React Crash course 2019 - Brad Traversy

We will be exploring React using a ToDo list app.

# What Is React ?

JS library created by Facebook and is useful for building UIs and Front end Applications.

React is often called a framework because of it's behavior and capabilities.

# Why use it ?

* Makes Front end JS much easier
* Uses self contained independent components with their own state
* much more interactive UIs
* Virtual DOM
* JSX - Easily incorporate JS in Markup
* Easy to work with teams

# React state

* components can have state which is an object that determines how that component renders and behaves
* We can also have "application level" state by using a state manager like Redux or Reacts own **context API**

# Create-React-App

* CLI Tool for creating React applications
* Uses webpack but needs no config from you
* comes bundled with a dev server with hot reload
* 'npm run build' will compiled your code into static assets

# Anatomy of a component

* Class based components ( can use local component state )
* functional components ( can't use state, unless they use React hooks)

```
class Post extends React.Component {
  state = {
    ...
  }

  render() {
    return (
      <div>
        <h3> {this.state.title} </h3>
        <p> {} </p>
      </div>
    )
  }
}
```

Render is the only lifeCycle method that is required.

JSX is a combination of JS and HTML. You can include JS withing using `{ }`
You can't use `class`, you've gotta use `className`

# Structure of Create-React-App

## Package.json 
*  Manifest of all dependencies
* React is the main dependency
* React dom lets you load react into the DOM
* react scripts lets you handle scripts

## index.html

* Everything runs through one single page, called index.html
* basically everything outputs to this one ID called "root", this is the entry point to React.
* App component is the main parent component, which gets rendered into the Root ID using React.

## App.js

* class based component
* 