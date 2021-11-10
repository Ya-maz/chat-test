import { Box, Form } from "./styles";
import emj from "./../../../assets/emodjis.svg";
import { Button } from "./../../UI/Button"

export default function Input({ text, handleInputEnter, handleInputChange}) {
  return (
    <Box flex align="center">
      <Form
        placeholder="Напишите сообщение..."
        value={text}
        onKeyDown={handleInputEnter}
        onChange={handleInputChange}
        >
      </Form>
      <Button padding="10px" onClick={()=>{}}>
        <img src={emj} alt="emoji" />
        </Button>
    </Box>
  );
}