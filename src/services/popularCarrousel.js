// imports...
import movieList from "../routers/getPopularMovie";
const pokemonList = document.getElementById("carroselPopular");

const limit = 10;
let offset = 0;

// Code..
async function convertToDiv(movieList) {
  return `
        
    <section class="content-filmes">
            <div class="carrosel-filme">
              <div class="owl-carousel owl-theme">
                <div class="item" style="width: auto">
                <img class="box-filme" src="${movieList.poster_path}" />
             </div>
            </div>
        </div>
    </section>

    `;
}

const newHtml = pokemons.map(convertPokemonToLi).join("");
pokemonList.innerHTML += newHtml;

convertToDiv(movieList);
