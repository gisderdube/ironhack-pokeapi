# Ironhack PokeAPI

-   you can access all pokemons at `https://ironhack-pokeapi.herokuapp.com/pokemon`
-   you can access detailed information about a pokemon at `https://ironhack-pokeapi.herokuapp.com/pokemon/:id`
-   You can pass the following query properties:
    -   `name`: will return all pokemon that have that string occuring somewhere in their name, case insensitive
    -   `minHp`
    -   `maxHp`
    -   `minAttack`
    -   `maxAttack`
    -   `minDefense`
    -   `speed`
    ```
        curl https://ironhack-pokeapi.herokuapp.com/pokemon?name=chu&minAttack=60
    ```
