import "./styles.css";
const htmlContent = require('./game_import/frame.html.js');
const template = require('./game_import/index.html');

export default function App() {
  return (
    <div className="App">
        <div dangerouslySetInnerHTML={template} />
    </div>
  );
}