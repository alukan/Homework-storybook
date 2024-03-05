import { Button } from './stories/Button';
import { Header } from './stories/Header';
import { LoggedIn, LoggedOut } from './stories/Header.stories';
import { Warning, Primary, Secondary, Large, Small } from './stories/Button.stories';
function App() {
  console.log({...Warning.args})
  return (
    <div className="App">
      <Header {...LoggedIn.args} />
      <Header {...LoggedOut}/>
      <Button {...Warning.args}/>
      <Button {...Primary.args}/>
      <Button {...Secondary.args}/>
      <Button {...Large.args}/>
      <Button {...Small.args}/>
    </div>
  );
}

export default App;
