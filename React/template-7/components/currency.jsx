import { useState, useEffect } from "react";

function Converter() {
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const handleChange = (e) => {
    parseFloat(e.target.value);
    setAmount(e.target.value);
    <input
      type="text"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
    />;
  };
  const convertToUsd = () => {
    const numericAmount = parseFloat(amount).toFixed(2);
    if (!isNaN(numericAmount)) {
      setConvertedAmount((numericAmount / 1.9).toFixed(2));
    } else {
      setConvertedAmount(alert("Please enter a valid number"));
    }
  };
  const convertToLira = () => {
    const numericAmount = parseFloat(amount).toFixed(2);
    if (!isNaN(numericAmount)) {
      setConvertedAmount(numericAmount * 1.0);
    } else {
      setConvertedAmount(alert("Please enter a valid number"));
    }
  };
  const convertToPound = () => {
    const numericAmount = parseFloat(amount).toFixed(2);
    if (!isNaN(numericAmount)) {
      setConvertedAmount((numericAmount / 2.0).toFixed(2));
    } else {
      setConvertedAmount(alert("Please enter a numeric value"));
    }
  };
  return (
    <div>
      <div className="row mb-4">
        <div className="col-md-4">
          <button onClick={convertToUsd} className="btn btn-primary">
            convert to usd
          </button>
        </div>
        <div className="col-md-4">
          <button onClick={convertToLira} className="btn btn-primary">
            convert to Lira
          </button>
        </div>
        <div className="col-md-4">
          <button
            onClick={convertToPound}
            className="btn btn-primary text-truncate"
          >
            convert to Pound
          </button>
        </div>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control "
          value={amount}
          onChange={handleChange}
          id="input"
        />
        <label for="input" className="form-label">
          Amount
        </label>
      </div>

      <h5 className="mt-3 bg-info p-3 rounded-3 text-white">
        Converted Amount:{" "}
        {convertedAmount !== null ? convertedAmount : "Enter a valid amount"}
      </h5>
    </div>
  );
}
export default Converter;
