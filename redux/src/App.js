import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  balanceIncrementAction,
  balanceDecrementAction,
  userInitAction,
  loyaltyProgram,
} from "./redux/bank/bankAction";
import Travel from "./components/travel/Travel";
import { LayaltyProgram } from "./context/context";

const bonus = {
  bronse: {
    lavel: 1000,
    discount: 2,
  },
  gold: {
    lavel: 3000,
    discount: 5,
  },
  vip: {
    lavel: 7000,
    discount: 10,
  },
};

const bonusPlus = (summ) => {
  if (summ < bonus.bronse.lavel) {
    return (summ * bonus.bronse.discount) / 100;
  } else if (summ > bonus.bronse.lavel && summ < bonus.gold.lavel) {
    return (summ * bonus.gold.discount) / 100;
  } else if (summ > bonus.gold.lavel && summ < bonus.vip.lavel) {
    return (summ * bonus.gold.discount) / 100;
  } else if (summ > bonus.vip.lavel) {
    return (summ * bonus.vip.discount) / 100;
  }
};

const replenishedCard = 999;

function App() {
  const dispatch = useDispatch();

  const {
    balance,
    user: { name },
  } = useSelector((state) => state);

  useEffect(() => {
    // (async () => {})();

    dispatch(userInitAction());
  }, []);

  const decrement = () => {
    const buyShop = Math.floor(Math.random() * 10000);
    console.log(buyShop);
    dispatch(balanceDecrementAction(buyShop));
    const countbonus = bonusPlus(buyShop);
    if (balance > 0) {
      dispatch(loyaltyProgram(countbonus));
    }
  };

  return (
    <>
      <button onClick={() => dispatch(balanceIncrementAction(replenishedCard))}>
        PLUS
      </button>
      <p>client {name}</p>
      <h2>balance: {balance}</h2>

      <button onClick={decrement}>MINUS</button>
      <LayaltyProgram>
        <Travel />
      </LayaltyProgram>
    </>
  );
}

// const mapStateToProps = (state) => {
//   console.log("state", state);
//   return {
//     balance: state.balance,
//     name: state.user.name,
//   };
// };

// const mapDispatchToProps = {
//   balanceIncrementAction,
//   userInitAction,
//   loyaltyProgram,
//   balanceDecrementAction,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
