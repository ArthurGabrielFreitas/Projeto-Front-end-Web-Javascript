export default function CardGrid() {
  const cards = [
    { id: 1, titulo: 'Título da caixa', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maiores exercitationem, corrupti facilis ut sint tempora quo, eius et, hic debitis quos quia illo sunt corporis accusantium vitae quidem tempore nihil.' },
    { id: 2, titulo: 'Título da caixa', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maiores exercitationem, corrupti facilis ut sint tempora quo, eius et, hic debitis quos quia illo sunt corporis accusantium vitae quidem tempore nihil.' },
    { id: 3, titulo: 'Título da caixa', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maiores exercitationem, corrupti facilis ut sint tempora quo, eius et, hic debitis quos quia illo sunt corporis accusantium vitae quidem tempore nihil.' },
    { id: 4, titulo: 'Título da caixa', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maiores exercitationem, corrupti facilis ut sint tempora quo, eius et, hic debitis quos quia illo sunt corporis accusantium vitae quidem tempore nihil.' }, ,
    { id: 5, titulo: 'Título da caixa', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maiores exercitationem, corrupti facilis ut sint tempora quo, eius et, hic debitis quos quia illo sunt corporis accusantium vitae quidem tempore nihil.' },
    { id: 6, titulo: 'Título da caixa', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maiores exercitationem, corrupti facilis ut sint tempora quo, eius et, hic debitis quos quia illo sunt corporis accusantium vitae quidem tempore nihil.' },
    { id: 7, titulo: 'Título da caixa', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maiores exercitationem, corrupti facilis ut sint tempora quo, eius et, hic debitis quos quia illo sunt corporis accusantium vitae quidem tempore nihil.' },
    { id: 8, titulo: 'Título da caixa', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maiores exercitationem, corrupti facilis ut sint tempora quo, eius et, hic debitis quos quia illo sunt corporis accusantium vitae quidem tempore nihil.' },
  ];

  return (
    <div className="grid">
      {cards.map(card => (
        <div key={card.id} className="card-item">
          <h3>{card.titulo}</h3>
          <p>{card.texto}</p>
        </div>
      ))}
    </div>
  )
}
