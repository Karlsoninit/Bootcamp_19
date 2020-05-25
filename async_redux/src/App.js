import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { relavanceWishes } from "./redux/operations";

function App(props) {
  console.log("props", props);
  console.log("procces", process.env.NODE_ENV);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(relavanceWishes());
  }, []);

  return (
    <>
      <h2>async redux</h2>
    </>
  );
}

// const mapDispatchToProps = {
//   relavanceWishes,
// };

// export default connect(null, mapDispatchToProps)(App);

export default App;
