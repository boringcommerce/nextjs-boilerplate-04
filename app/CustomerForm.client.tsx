import React, { useRef } from 'react';

function CustomerForm() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
    };

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" ref={firstNameRef} />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" ref={lastNameRef} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" ref={emailRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CustomerForm;
