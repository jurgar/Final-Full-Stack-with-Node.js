import styled from "styled-components";
import NavBar from "../../components/Nav";
import Button from "../../components/Button";
import { useState } from "react";
import "./index.css";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px;
`;

const InputContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  margin-top: 10px;
  padding: 13px;
  &:focus {
    outline: none;
  }
  border-radius: 12px;
  background-color: #f9f9f9;
  border-style: dotted;
  border-color: #a68ed3;
`;

//

const AddMemberForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handlerAddMember = (e) => {
    e.preventDefault();
    if (name && email && age) {
      addMember({ name: name, email: email, age: age });
      setName("");
      setEmail("");
      setAge("");
    }
  };

  const addMember = (member) => {
    console.log(member);
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(member),
    };
    fetch("http://localhost:3001/v1/members/", option)
      .then((res) => res.json())
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavBar />
      <div>
        <StyledForm onSubmit={(e) => handlerAddMember(e)}>
          <InputContainer>
            <label>Name</label>
            <StyledInput
              placeholder="Name and Surname"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <label>Email</label>
            <StyledInput
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <label>Age</label>
            <StyledInput
              placeholder="Age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </InputContainer>
          <Button type={"submit"}>Submit</Button>
        </StyledForm>
      </div>
    </div>
  );
};

export default AddMemberForm;
