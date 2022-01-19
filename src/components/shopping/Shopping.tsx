import classes from "./Shopping.module.css";

const Shopping = () => {
  return (
    <div className={classes.shop}>
      <div className={classes["form-shadow"]}></div>
      <form className={classes.form}>
        <div className={classes.pay}>
          <input
            className={classes["pay-input1"]}
            type="text"
            id="pay1"
            value="Pay"
            disabled
          />
          <input className={classes["pay-input2"]} type="number" id="pay2" />
          <select
            className={classes["pay-select"]}
            name="pay-select"
            id="pay-select"
          >
            <option value="EUR">EUR</option>
            <option value="All">ALL</option>
          </select>
        </div>
        <div className={classes.buy}>
          <input
            className={classes["buy-input1"]}
            type="text"
            id="buy1"
            value="Buy"
            disabled
          />
          <input className={classes["buy-input2"]} type="number" id="buy2" />
          <select
            className={classes["buy-select"]}
            name="buy-select"
            id="buy-select"
          >
            <option value="BTC">BTC</option>
            <option value="All">ALL</option>
          </select>
        </div>

        <label className={classes["payment-label"]} htmlFor="payment">
          Payment method
        </label>
        <select className={classes["bank-select"]} name="payment" id="payment">
          <option value="">Bank transfer</option>
        </select>
      </form>
    </div>
  );
};

export default Shopping;
