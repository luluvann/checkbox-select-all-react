import "./App.css";
import Task from "./Task";
import { useState, useEffect } from "react";
import { Catalogues } from "./MockData";

function App() {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(Catalogues);
  }, [list]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const onChange = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  const catalog = list.map(({ id, name }) => {
    return (
      <>
        <Task
          key={id}
          type="checkbox"
          name={name}
          id={id}
          onChange={onChange}
          isChecked={isCheck.includes(id)}
        />
        {name}
      </>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <Task
          type="checkbox"
          name="selectAll"
          id="selectAll"
          onChange={handleSelectAll}
          isChecked={isCheckAll}
        />
        Select All
        {catalog}
      </header>
    </div>
  );
}

export default App;
