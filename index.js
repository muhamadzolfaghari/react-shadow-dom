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
