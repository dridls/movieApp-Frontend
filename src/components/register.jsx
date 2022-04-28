const Register = () => {
  return (
    <div className="register">
      <h1>Register</h1>
      <h2>Name</h2>
      <input className="name" />
      <h2>Email</h2>
      <input className="email" />
      <h2>Password</h2>
      <input className="password" />
      <br />
      <br />
      <br />
      <button className="register-btn">Register</button>

      <form>
        <label>Name</label>
        <input
          type="name"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <button onClick={submitHandler}>Add Item</button>

        {listItems.map((item, index) => (
          <li
            key={Math.random(listItems.length)}
            className={`item ${item.hasBeenAdded && "existing-item"}`}
          >
            <span>
              {item.name} : {item.quantity}
            </span>

            <Button onClick={() => increase(index)} color="green" type="+" />
            {item.quantity > 0 && (
              <Button onClick={() => decrease(index)} color="yellow" type="-" />
            )}
            {item.quantity === 0 && (
              <Button onClick={() => deleteItem(index)} color="red" type="X" />
            )}
          </li>
        ))}
      </form>
    </div>
  );
};
export default Register;
