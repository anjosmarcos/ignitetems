import { Header } from 'src/Components/Header';
import { Container } from './styles';
import { Hightlight } from 'src/Components/Highlight';
import { GroupCard } from 'src/Components/GrupoCard';

export default function Groups() {
  return (
    <Container>
      <Header showBackButton/>
      <Hightlight
        title="Turma"
        subtitle="Escolha uma turma para participar"
      />

      <GroupCard
        title="Turma A"
      />
      
      <GroupCard
        title="Turma B"
      />

    </Container>
  );
}


