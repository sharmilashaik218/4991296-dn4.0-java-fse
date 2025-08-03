import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  const handleSubmit = () => {
    // 1 Euro = 90 Rupees (Example rate)
    const result = (parseFloat(rupees) / 90).toFixed(2);
    setEuro(result);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>💱 Currency Convertor (INR → EUR)</h2>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter amount in INR"
      />
      <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
        Convert
      </button>

      {euro && (
        <p style={{ marginTop: "10px" }}>
          <strong>EUR:</strong> €{euro}
        </p>
      )}
    </div>
  );
}

export default CurrencyConvertor;
