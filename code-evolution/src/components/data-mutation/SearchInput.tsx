import { Button } from "../ui/button";
import { Field } from "../ui/field";
import { Input } from "../ui/input";
import Form from "next/form";

// SearchInput Component
const SearchInput = () => {
  return (
    <Form action="/fetching/database">
      <Field orientation="horizontal">
        <Input
          type="search"
          name="query"
          className="py-5.5"
          placeholder="Search..."
        />
        <Button type="submit">Search</Button>
      </Field>
    </Form>
  );
};

export default SearchInput;
