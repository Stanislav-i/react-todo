import { Container } from "./Container";
import Header from "./Header/Header";
import Noteimput from "./Noteimput/Noteimput";
import NotesList from "./NotesList/NotesList";

export const App = () => {
  return (
      <Container>
      <Header />
      <Noteimput />
      <NotesList />
      </Container>
  );
};
