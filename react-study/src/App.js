import Item from './components/Item';
import './App.css';
function App() {
  return (
    <div className="App">
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
          isPacked={true}
          name='space suit'
          />
          <Item
          isPacked={true}
          name= 'Helmet with a golden leaf'
          />
          <Item
          isPacked={false}
          name= 'Photo of Tam'
          />
        </ul>
      </section>
    </div>
  );
}

export default App;
