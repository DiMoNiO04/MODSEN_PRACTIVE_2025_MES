import { useState, FormEvent, ChangeEvent } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export function Form() {
  const [value, setValue] = useState<string>("");

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Submitted value:", value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form</h1>
      <Input value={value} onChange={onChangeInput} />
      <Button />
    </form>
  );
}
