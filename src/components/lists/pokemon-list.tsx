import { GameModel, Pokemon } from "@/model/model";
import { Sprite } from "@/components/sprite";
import { PathManager } from "@/modules/path-manager";
import { stylesheet } from "typestyle";
import { createList } from "@/components/lists/list";
import { ChooseFromListDialog } from "@/components/dialogs/choose-from-list-dialog";
import { IDDisplay } from "@/components/displays/id-display";

const PokemonList = createList<Pokemon>(() => GameModel.model.pokemon, [
  {
    text: "Icon",
    sort: ([id1], [id2]) => id1.localeCompare(id2),
    render: (h, [id, pokemon]) => (
      <Sprite
        class={styles.pokeIcon}
        size={32}
        src={PathManager.pokeIcon(id)}
      />
    )
  },
  {
    text: "ID",
    sort: ([id1], [id2]) => id1.localeCompare(id2),
    render: (h, [id, pokemon]) => <IDDisplay value={id} />
  },
  {
    text: "Name",
    sort: ([, pokemon1], [, pokemon2]) =>
      pokemon1.name.localeCompare(pokemon2.name),
    render: (h, [id, pokemon]) => pokemon.name
  }
]);

const styles = stylesheet({
  pokeIcon: {
    margin: "-8px 0 0 0"
  }
});

export const ChoosePokemonDialog = ChooseFromListDialog(PokemonList);
