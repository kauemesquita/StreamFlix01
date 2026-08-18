function hl(seletor, classe, duracao = 2500, atraso = 0) {
  const lista =
    typeof seletor === "string"
      ? Array.from(document.querySelectorAll(seletor))
      : [seletor];
  lista.forEach((el, i) => {
    if (!el) return;
    setTimeout(
      () => {
        el.classList.add(classe);
        setTimeout(() => el.classList.remove(classe), duracao);
      },
      atraso + i * 200,
    );
  });
}

function selecionarPorId() {
  const elemento = document.getElementById("titulo-filme");

  console.log(elemento);
  console.log(elemento.tagName);
  console.log(elemento.textContent);
  console.log(elemento.id);

  hl("#titulo-filme", "elemento-selecionado");
  hl("#filme-principal", "elemento-selecionado");
}

function selecionarPorClasse() {
  const elementos = document.getElementsByClassName("genero-acao");

  console.log("Quantidade:", elementos.length);

  for (let i = 0; i < elementos.length; i++) {
    console.log(i, elementos[i].textContent.trim());
  }
  hl(".genero-acao", "highlight-acao", 2500);
  hl(".genero-drama", "highlight-acao", 2500);
}

function selecionarPorQuery() {
  const elemento = document.querySelector(".filme-mini");

  console.log(elemento);

  hl(elemento, "elemento-selecionado");
}

function selecionarTodos() {
  const elementos = document.querySelectorAll(".filme-mini");

  console.log("Quantidade:", elementos.length);

  elementos.forEach((el, indice) => {
    console.log(indice, el.textContent.trim());
  });
  elementos.forEach((el, i) => hl(el, "elemento-selecionado", 2500, i * 300));
}

//Demo2

function mudarTexto() {
  const titulo = document.getElementById("titulo-destaque");

  titulo.textContent = "Breaking Bad";

  console.log("Novo texto:", titulo.textContent);

  titulo.classList.add("texto-animado");
  setTimeout(() => titulo.classList.remove("texto-animado"), 1500);
  hl("#titulo-destaque", "elemento-selecionado", 2000);
}

function adicionarBadge() {
  const badge = document.createElement("span");

  badge.className = "badge";

  badge.textContent = "⭐ Em Alta";

  const container = document.getElementById("badge-container");

  container.innerHTML = "";

  container.appendChild(badge);

  console.log("Badge criado:", badge);

  hl("#badge-container", "elemento-selecionado", 2000);
}

function mudarPoster() {
  const poster = document.getElementById("poster-destaque");

  const titulo = document.getElementById("titulo-destaque");

  const opcoes = [
    {
      url: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
      nome: "The Last of Us",
    },

    {
      url: "https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg",
      nome: "Wednesday",
    },

    {
      url: "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
      nome: "Breaking Bad",
    },

    {
      url: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      nome: "Round 6",
    },

    {
      url: "https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg",
      nome: "Stranger Things",
    },
  ];

  const sorteado = opcoes[Math.floor(Math.random() * opcoes.length)];

  poster.src = sorteado.url;

  poster.alt = sorteado.nome;

  titulo.textContent = sorteado.nome;

  console.log("Poster trocado para:", sorteado.nome);

  poster.style.opacity = "0";

  poster.style.transition = "opacity 0.3s";

  setTimeout(() => {
    
      poster.style.opacity = "1";

      poster.classList.add("poster-fade-in");

      setTimeout(() => {
        poster.classList.remove("poster-fade-in")
      }, 600);

  }, 300);
}

function adicionarDestaque() {

  const card = document.getElementById("filme-destaque");

  card.classList.add("destaque");

  console.log("Classes atuais:", card.className);

  setTimeout(() => {

    card.classList.remove("destaque");

    console.log("Classe removida!")
    
  }, 3000);

card.classList.toggle("destaque");

  if (card.classList.contains("destaque")) {
    console.log("Tem destaque");
  } else {
    console.log("Não tem destaque");
  }
}

function lerInput() {

  const input = document.getElementById("input-busca");

  console.log(input);

  const texto = input.value.trim();

  if (texto === "") {
    alert("Digite algo no campo primeiro!");

    return;
  }

  const titulo = document.getElementById("titulo-destaque");

  titulo.textContent = texto;

  console.log("Valor lido:", texto);
  console.log("Caracteres:", texto.length);

  titulo.classList.add("texto-animado");

  setTimeout(() => {

    titulo.classList.remove("texto-animado");
    
  }, 1500);

}

function resetarDemo2() {

  document.getElementById("titulo-destaque").textContent = "The Witcher";

  document.getElementById("sinopse-destaque").textContent = "Geralt de Rívia, um caçador de monstros solitário, luta para encontrar seu lugar em um mundo onde as pessoas são mais perversas que bestas.";

  document.getElementById("poster-destaque").src = 'https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg';

  document.getElementById("poster-destaque").alt = 'The Witcher';

  document.getElementById("poster-destaque").style.opacity = "1";

  document.getElementById("badge-container").innerHTML = "";

  document.getElementById("filme-destaque").classList.remove("destaque");

  document.getElementById("input-busca").value = "";

}

function adicionarFilme() {

    const input = document.getElementById("input-filme");

    const nomeFilme = input.value.trim();

    if (nomeFilme === "") {
      
      alert("Digite o nome de um Filme!");

      return;

    }

    const li = document.createElement("li");

    const span = document.createElement("span");

    span.textContent = "🎬 " + nomeFilme;

    const btnRemover = document.createElement("button");

    btnRemover.textContent = "🗑️ Remover";

    btnRemover.onclick = function () {

      this.parentElement.remove();
    };

    li.appendChild(span);

    li.appendChild(btnRemover);

    const lista = document.getElementById("minha-lista");

    lista.appendChild(li);

    input.value = "";

    input.focus();

    console.log("Adicionado:", nomeFilme, "Total:", lista.children.length);

    li.classList.add("item-novo");

}

document.addEventListener("DOMContentLoaded", function () {

  const cardFavorito = document.getElementById("card-favorito");

  const statusFavorito = document.getElementById("status-favorito");

  let favoritado = false;

  cardFavorito.addEventListener("click", function () {

    favoritado = !favoritado;

    if (favoritado) {
      
      statusFavorito.textContent = "❤️ FAVORITADO!";
      statusFavorito.style.color = "#e50914";
      cardFavorito.style.borderColor = "#e50914";
      cardFavorito.style.boxShadow = "0 0 20px rgba(229,9,20,0.5)";

    } else {
      
      statusFavorito.textContent = "🤍 Clique para favoritar";
      statusFavorito.style.color = "#8b949e";
      cardFavorito.style.borderColor = "#2a2a2a";
      cardFavorito.style.boxShadow = "none";

      console.log("Favoritado:", favoritado);
    }
  });

  const cardDetalhes = document.getElementById("card-detalhes");
  const statusDetalhes = document.getElementById("status-detalhes");

    cardDetalhes.addEventListener("dblclick", function () {

        statusDetalhes.textContent = "⏳ Carregando...";
        statusDetalhes.style.color = "#ffd700";

        setTimeout(() => {
          statusDetalhes.textContent = "✅ Detalhes carregados!";
          statusDetalhes.style.color = "#3fb950"
        }, 2000);
        console.log("Double click!");
    });

    const cardHover = document.getElementById("card-hover");
    const statusHover = document.getElementById("status-hover");

    cardHover.addEventListener("mouseover", function () {

        statusHover.textContent = "👀 Mouse está aqui!";
        statusHover.style.color = "#e50914";
        cardHover.style.backgroundColor = "#2a2a2a";
        console.log("Mouse entrou!");
    });

     cardHover.addEventListener("mouseout", function () {

        statusHover.textContent = "Aguardando...";
        statusHover.style.color = "#4ade80";
        cardHover.style.backgroundColor = "#1a1a1a";
        console.log("Mouse saiu!");
    });

    const inputTemoReal =document.getElementById("input-busca-tempo-real");
    const contadorDigit = document.getElementById("contador-digitacao");

    inputTemoReal.addEventListener("input", function () {
          
      const texto = this.value;

      const Quantidade = texto.length;

      contadorDigit.textContent = Quantidade > 0 ? `Voce digitou: ${quantidade} - caractere(s) - "${texto}"`: "Voce digitou: 0 caracteres";


      console.log('Digitado: , texto');
    });

    const inputFilme = document.getElementById("input-filme");

    if (inputFilme) {
      
      inputFilme.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
          adicionarFilme();
        }
      });
    }

    inicializarGaleria();

    const inputFiltro = document.getElementById("input-filtro");

    if (inputFiltro) {
      
      inputFiltro.addEventListener("input", function () {

        filtrarFilmes(this.value);
   
      });
    }

});


    const todosFilmes = [
    { nome: 'Stranger Things',      tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg' },
    { nome: 'Breaking Bad',         tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg' },
    { nome: 'The Witcher',          tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg' },
    { nome: 'La Casa de Papel',     tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/MoEKaPFHABtA1xKoOteirGaHl1.jpg' },
    { nome: 'Round 6',              tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg' },
    { nome: 'Peaky Blinders',       tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/i0uajcHH9yogXMfDHpOXexIukG9.jpg' },
    { nome: 'Wednesday',            tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg' },
    { nome: 'The Last of Us',       tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg' },
    { nome: 'Oppenheimer',          tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
    { nome: 'Barbie',               tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg' },
    { nome: 'Duna',                 tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg' },
    { nome: 'Coringa',              tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' },
    { nome: 'A Origem',             tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' },
    { nome: 'Interestelar',         tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
    { nome: 'Parasita',             tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
    { nome: 'Vingadores: Ultimato', tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg' },
];

function inicializarGaleria() {

  const galeria = document.getElementById("galeria-filmes");
console.log(galeria)
  if (!galeria) return;

  todosFilmes.forEach(function(filme) {

    const card = document.createElement("div");

    card.className = "card-galeria";

    card.dataset.nome = filme.nome;

    card.innerHTML = `

              <img 
                src="${filme.img}" 
                alt="${filme.nome}"

                // O onerror é um evento do HTML que executa um código quando acontece um erro.
                // Dentro do onerror, o this representa a própria imagem.
                onerror="this.style.background='#2a2a2a'"
            >

            <div class="card-nome">
                ${filme.nome}
            </div>

            <div class="card-tipo">
                ${filme.tipo}
            </div>
    `;

    galeria.appendChild(card);

  });
}



function filtrarFilmes(termoBusca) {

   const termo = termoBusca.toLowerCase().trim();

   const cards = document.querySelectorAll(".card-galeria");

   let visiveis = 0;

   cards.forEach(function (card) {

      const nomeDoFilme = card.dataset.nome.toLowerCase();

      const combina = termo === "" || nomeDoFilme.includes(termo);

      if (combina) {

        card.classList.remove("oculto");

        visiveis++;

      } else {
        
        card.classList.add("oculto")
      }
   });

   const semResultado =document.getElementById("sem-resultado");

   if (semResultado) {
    
    semResultado.style.display = visiveis === 0 ?  "block" : "nome";
   }

   console.log(`Filtro "${termoBusca}": ${visiveis} resultado.`)
}
