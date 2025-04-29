import { Button, Container, Title } from "./Common.styles";

const AddLogForm = () => {
  return (
    <Container>
      <Title>Add Log</Title>
      <form>
        <div>
          <label htmlFor="logTitle">Title:</label>
          <input type="text" id="logTitle" name="logTitle" required />
        </div>
        <div>
          <label htmlFor="logDescription">Description:</label>
          <textarea id="logDescription" name="logDescription" required></textarea>
        </div>
        <div>
          <label htmlFor="logDate">Date:</label>
          <input type="date" id="logDate" name="logDate" required />
        </div>
        <Button type="submit">Add Log</Button>
      </form>
    </Container>
  );
}

export default AddLogForm;