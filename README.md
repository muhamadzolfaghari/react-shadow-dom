# Mixing shadow DOM with react

The great achievement with shadow DOM is CSS encapsulation and scoped DOM subtree.

It allow to create a separated DOM and CSS style which are isolated from being conflicted with the page  stylesheet.

This is a suitable choice when it needs to create a Plugin or third-party library has an UI. The subtree DOM attach shadow to a global DOM. As it provides a isolation environment it can be same as an iframe but just in case of UI. This method can support SSR.

The React simply can integrated with Shadow DOM, only by attachShadow method in any method. Furthermore, React can be implemented at any environment such as a plugin for WordPress, be a part of a micro-frontend or  even come with other JavaScript frameworks.


```typescript
const App = () => (<div>The application</div>);

// Choice where it needs to attach shadow DOM
const root = document.querySelector('#root');

// Attach shadow DOM to the root and create a subtree DOM
const shadowContainer = root.attachShadow({ mode: 'open' });

// Create a root to render React app inside that
const shadowRoot = document.createElement('div');
shadowContainer.appendChild(shadowRoot);

// Render The App component inside the attached shadow DOM
ReactDOM.createRoot(shadowRoot).render(<App />);
```
