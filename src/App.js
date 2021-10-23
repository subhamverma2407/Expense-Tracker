import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import Amount from "./components/Amount/Amount";
import Transaction from "./components/Transaction/Transaction";
import Nav from "./components/Nav/Nav";
import Chart from "./components/Chart/Chart";
import { useContext } from "react";
import Context from "./context/Context";
import History from "./components/History/History";

function App() {
  const { state } = useContext(Context);
  let View = null;
  if (state.selectedMenu === "history") View = <History />;
  else if (state.selectedMenu === "add_transaction") View = <Transaction />;
  else if (state.selectedMenu === "chart") View = <Chart />;
  return (
    <div className={styles.App}>
      <Header />
      <Balance />
      <Amount />
      <Nav />
      {View}
    </div>
  );
}
export default App;
