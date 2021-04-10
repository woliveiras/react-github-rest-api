import Heading from '../components/Typography/Heading'

export default function App () {
  return (
    <section>
      <Heading
        type='title'
        text='React & GitHub Rest API'
      />
      <p>Busca de dados dos usuários do GitHub.</p>
      <p>Clique em "Pesquisar usuário do GitHub" e clique no ícone de lupa ou pressione Enter.</p>
    </section>
  )
}
