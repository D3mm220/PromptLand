import "../styles/globals.css";

import Nav from "../components/Nav.jsx";
import Provider from "../components/Provider.jsx";

export const metadata = {
  title: "PromptLand",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
