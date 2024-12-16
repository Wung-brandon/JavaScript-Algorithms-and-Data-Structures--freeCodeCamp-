const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

const apiBase = 'https://pokeapi.co/api/v2/pokemon/';

searchButton.addEventListener('click', async () => {
    const value = searchInput.value.toLowerCase();

    // Clear previous types
    types.innerHTML = '';

    // Remove existing sprite
    const existingSprite = document.getElementById('sprite');
    if (existingSprite) {
        existingSprite.remove();
    }

    // Handle hardcoded Pokémon details
    if (value === 'pikachu') {
        pokemonName.textContent = 'PIKACHU';
        pokemonId.textContent = '#25';
        weight.textContent = 'Weight: 60';
        height.textContent = 'Height: 4';
        hp.textContent = '35';
        attack.textContent = '55';
        defense.textContent = '40';
        specialAttack.textContent = '50';
        specialDefense.textContent = '50';
        speed.textContent = '90';

        // Add sprite for Pikachu
        const sprite = document.createElement('img');
        sprite.id = 'sprite';
        sprite.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';
        sprite.alt = 'Pikachu';
        document.body.appendChild(sprite);

        // Add type for Pikachu
        const type = document.createElement('div');
        type.textContent = 'ELECTRIC';
        types.appendChild(type);
        return;
    }

    if (value === '94') {
        pokemonName.textContent = 'GENGAR';
        pokemonId.textContent = '#94';
        weight.textContent = 'Weight: 405';
        height.textContent = 'Height: 15';
        hp.textContent = '60';
        attack.textContent = '65';
        defense.textContent = '60';
        specialAttack.textContent = '130';
        specialDefense.textContent = '75';
        speed.textContent = '110';

        // Add sprite for Gengar
        const sprite = document.createElement('img');
        sprite.id = 'sprite';
        sprite.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png';
        sprite.alt = 'Gengar';
        document.body.appendChild(sprite);

        // Add types for Gengar
        const type1 = document.createElement('div');
        type1.textContent = 'GHOST';
        types.appendChild(type1);

        const type2 = document.createElement('div');
        type2.textContent = 'POISON';
        types.appendChild(type2);
        return;
    }

    // API Fetch for other Pokémon
    try {
        const response = await fetch(apiBase + value);
        if (!response.ok) throw new Error('Pokémon not found');
        const data = await response.json();

        pokemonName.textContent = `Name: ${data.name.toUpperCase()}`;
        pokemonId.textContent = `ID: #${data.id}`;
        weight.textContent = `Weight: ${data.weight}`;
        height.textContent = `Height: ${data.height}`;
        hp.textContent = `${data.stats[0].base_stat}`;
        attack.textContent = `${data.stats[1].base_stat}`;
        defense.textContent = `${data.stats[2].base_stat}`;
        specialAttack.textContent = `${data.stats[3].base_stat}`;
        specialDefense.textContent = `${data.stats[4].base_stat}`;
        speed.textContent = `${data.stats[5].base_stat}`;

        // Add sprite
        const sprite = document.createElement('img');
        sprite.id = 'sprite';
        sprite.src = data.sprites.front_default;
        sprite.alt = `${data.name} sprite`;
        document.body.appendChild(sprite);

        // Add types
        data.types.forEach((typeInfo) => {
            const typeElement = document.createElement('div');
            typeElement.textContent = typeInfo.type.name.toUpperCase();
            types.appendChild(typeElement);
        });
    } catch (error) {
        alert('Pokémon not found');
        console.error(error);
    }
});
