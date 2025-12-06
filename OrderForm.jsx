import React, { useState } from "react";

const OrderForm = () => {
  const [data, setData] = useState({
    name: "",
    address: "",
    password: "",
    product: "",
    notes: "",
    payment: "",
    extra: [],
    file: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setData((prev) => ({
        ...prev,
        extra: checked ? [...prev.extra, value] : prev.extra.filter((i) => i !== value)
      }));
    } 
    else if (name === "file") {
      setData({ ...data, file: e.target.files[0] });
    } 
    else {
      setData({ ...data, [name]: value });
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert("Order Submitted Successfully! 🛍");
    console.log(data);
  };

  return (
    <form style={styles.card} onSubmit={submitForm}>
      <h2 style={styles.title}>🧾 Product Order Form</h2>

      <input type="text" name="name" placeholder="Full Name" style={styles.input} onChange={handleChange} />
      <input type="password" name="password" placeholder="Account Password" style={styles.input} onChange={handleChange}/>

      <textarea name="address" rows="3" placeholder="Delivery Address" style={styles.textArea} onChange={handleChange}></textarea>

      <select name="product" style={styles.input} onChange={handleChange}>
        <option>-- Select a Product --</option>
        <option value="Coffee Beans">Coffee Beans</option>
        <option value="Brown Notebook Pack">Brown Notebook Pack</option>
        <option value="Wooden Pen Holder">Wooden Pen Holder</option>
        <option value="Leather Journal">Leather Journal</option>
      </select>

      <p style={styles.label}>Payment Mode</p>
      <div style={styles.row}>
        <label><input type="radio" name="payment" value="UPI" onChange={handleChange}/> UPI</label>
        <label><input type="radio" name="payment" value="Card" onChange={handleChange}/> Credit/Debit Card</label>
        <label><input type="radio" name="payment" value="COD" onChange={handleChange}/> Cash on Delivery</label>
      </div>

      <p style={styles.label}>Extra Add-ons</p>
      <div style={styles.row}>
        <label><input type="checkbox" value="Gift Wrap" onChange={handleChange}/> Premium Gift Wrap</label>
        <label><input type="checkbox" value="Express Delivery" onChange={handleChange}/> Express Delivery</label>
        <label><input type="checkbox" value="Thank You Card" onChange={handleChange}/> Thank You Card</label>
      </div>

      <textarea name="notes" rows="3" placeholder="Additional Notes (optional)" style={styles.textArea} onChange={handleChange}></textarea>

      <input type="file" name="file" style={styles.file} onChange={handleChange}/>

      <button type="submit" style={styles.button}>Place Order</button>
    </form>
  );
};


const styles = {
  card: {
    width: "390px",
    padding: "26px",
    borderRadius: "14px",
    background: "linear-gradient(145deg, #F5E6CC, #C9A26B)", // Cream + Coffee Brown
    boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
    zIndex: "3",
  },
  title: {
    textAlign: "center",
    marginBottom: "18px",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#4B2E12"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "8px",
    borderRadius: "6px",
    border: "1px solid #7C4F2C",
    fontSize: "14px",
    background: "#FAF3E0"
  },
  textArea: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #7C4F2C",
    marginTop: "10px",
    background: "#FAF3E0"
  },
  label: { fontWeight: "bold", marginTop: "12px", color: "#4B2E12" },
  row: { display: "flex", gap: "12px", marginTop: "6px", flexWrap: "wrap" },
  file: { marginTop: "10px" },
  button: {
    width: "100%",
    padding: "11px",
    background: "#7C4F2C",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    marginTop: "14px",
    cursor: "pointer",
    fontSize: "15px"
  }
};

export default OrderForm;
