import { useEffect } from "react";

function App() {
  
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const uiValue = queryParams.get("ui");
    if (uiValue) {
      alert(`User Input from URL: ${uiValue}`);
    }
  }, []);

  return (
    <>
      <form className="center-form" method="get">
        <label htmlFor="ui">User Input: </label>
        <input name="ui" type="text" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
