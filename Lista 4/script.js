// ── Configuração ───────────────────────────────
const TOKEN_API  = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDg4NDZhMTFjOWExNGFiZDg3ODkwYWZlNTYzNWUyMiIsIm5iZiI6MTc3NDk5OTU5NC42MDE5OTk4LCJzdWIiOiI2OWNjNTgyYTAwOWQ5M2JjZThlNWIzOTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3KtZZBrZAwjHkovqSH06M20N8pAREefb9fUwFQZ2GOA";
const URL_BASE   = "https://api.themoviedb.org/3";
const URL_IMAGEM = "https://image.tmdb.org/t/p/w500";
const IDIOMA     = "pt-BR";

// ── Referências do DOM ──────────────────────────
const grade       = document.getElementById("grid");
const barraStatus = document.getElementById("status-bar");
const msgErro     = document.getElementById("error-msg");

// ── Mapa de gêneros (id → nome) ─────────────────
let mapaGeneros = {};

// ── Exibe skeletons enquanto carrega ────────────
const exibirSkeletons = () => {
  const skeletonHTML = `
    <div class="skeleton">
      <div class="skel-poster"></div>
      <div class="skel-body">
        <div class="skel-line" style="width:70%"></div>
        <div class="skel-line" style="width:45%"></div>
        <div class="skel-line" style="width:90%"></div>
        <div class="skel-line" style="width:80%"></div>
      </div>
    </div>`;

  const itens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  itens.forEach(() => {
    grade.innerHTML += skeletonHTML;
  });
};

// ── Faz uma requisição AJAX e retorna o JSON ────
const buscarDados = (url) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.setRequestHeader("Authorization", "Bearer " + TOKEN_API);
  xhr.setRequestHeader("accept", "application/json");

  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.responseText));
    } else {
      reject("Erro HTTP: " + xhr.status);
    }
  };

  xhr.onerror = () => reject("Erro de rede");

  xhr.send();
});

// ── Monta o HTML de um card de filme ────────────
const montarCard = (filme, indice) => {
  const {
    title: titulo,
    poster_path: caminhoPoster,
    vote_average: nota,
    release_date: dataLancamento,
    overview: sinopse,
    genre_ids: idsGenero,
    original_language: idiomaOriginal,
    popularity: popularidade
  } = filme;

  const urlPoster = caminhoPoster
    ? URL_IMAGEM + caminhoPoster
    : "https://via.placeholder.com/500x750/13131a/7a7a8c?text=No+Poster";

  const ano   = dataLancamento ? dataLancamento.slice(0, 4) : "—";
  const score = nota ? nota.toFixed(1) : "N/A";

  const tagGeneros = idsGenero
    .map(id => mapaGeneros[id])
    .filter(nome => nome !== undefined)
    .slice(0, 3)
    .map(nome => `<span class="genre-tag">${nome}</span>`)
    .join("");

  const delay = `animation-delay: ${indice * 80}ms`;

  return `
    <div class="card" style="${delay}">
      <div class="card__poster">
        <img src="${urlPoster}" alt="Poster do filme ${titulo}" title="Poster do filme ${titulo}" loading="lazy"/>
        <div class="card__rank">#${indice + 1}</div>
        <div class="card__score"><span class="star">★</span>${score}</div>
      </div>
      <div class="card__body">
        <div class="card__title">${titulo}</div>
        <div class="card__meta">
          <span title="Ano de lançamento">📅 ${ano}</span>
          <span title="Idioma original">🌐 ${idiomaOriginal.toUpperCase()}</span>
          <span title="Índice de popularidade">🔥 ${Math.round(popularidade)}</span>
        </div>
        <p class="card__overview">${sinopse || "Sinopse não disponível."}</p>
        <div class="card__genres">${tagGeneros || '<span class="genre-tag">Sem gênero</span>'}</div>
      </div>
    </div>`;
};

// ── Exibe estado de erro ─────────────────────────
const exibirErro = () => {
  grade.innerHTML = "";
  msgErro.style.display = "block";
  barraStatus.innerHTML = `<span class="dot" style="background:#e84a4a;animation:none"></span>Falha ao carregar`;
};

// ── Busca gêneros e filmes, depois renderiza ─────
const iniciar = async () => {
  exibirSkeletons();

  try {
    // 1) Busca os gêneros para traduzir IDs → nomes
    const dadosGeneros = await buscarDados(`${URL_BASE}/genre/movie/list?language=${IDIOMA}`);
    dadosGeneros.genres.forEach(genero => {
      mapaGeneros[genero.id] = genero.name;
    });

    // 2) Busca os filmes mais populares
    const dadosFilmes = await buscarDados(`${URL_BASE}/movie/popular?language=${IDIOMA}&page=1`);
    const top10 = dadosFilmes.results.slice(0, 10);

    // 3) Limpa os skeletons e renderiza os cards
    grade.innerHTML = "";
    top10.forEach((filme, indice) => {
      grade.innerHTML += montarCard(filme, indice);
    });

    barraStatus.innerHTML = `<span class="dot" style="background:#4ae87c"></span>${top10.length} filmes carregados`;

  } catch (erro) {
    console.error(erro);
    exibirErro();
  }
};

// ── Início ───────────────────────────────────────
iniciar();