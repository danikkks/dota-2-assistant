import moment from "moment";

const runes = {
  bounty: {
    firstSpawnTime: moment.duration(0, "minutes"),
    spawnRate: moment.duration(2, "minutes"),
    items: {
      bounty: {
        icons: {
          minimap:
            "https://gamepedia.cursecdn.com/dota2_gamepedia/c/c9/Bounty_Rune_minimap_icon.png"
        }
      }
    }
  },
  powerUp: {
    firstSpawnTime: moment.duration(2, "minutes"),
    spawnRate: moment.duration(2, "minutes"),
    items: {
      doubleDamage: {
        icons: {
          minimap:
            "https://gamepedia.cursecdn.com/dota2_gamepedia/7/77/Double_Damage_Rune_minimap_icon.png"
        }
      },
      arcane: {
        icons: {
          minimap:
            "https://gamepedia.cursecdn.com/dota2_gamepedia/3/30/Arcane_Rune_minimap_icon.png?version=708db7029967159d35ddd61b7e694d67"
        }
      },
      haste: {
        icons: {
          minimap:
            "https://gamepedia.cursecdn.com/dota2_gamepedia/7/7e/Haste_Rune_minimap_icon.png?version=babff48fe74ba0addd8f16db199ebd3f"
        }
      },
      illusion: {
        icons: {
          minimap:
            "https://gamepedia.cursecdn.com/dota2_gamepedia/1/10/Illusion_Rune_minimap_icon.png?version=341189342d8093040d941b9c1c062e7f"
        }
      },
      invisibility: {
        icons: {
          minimap:
            "https://gamepedia.cursecdn.com/dota2_gamepedia/0/09/Invisibility_Rune_minimap_icon.png?version=9208415e913efa3cca07d58bc897274b"
        }
      },
      regeneration: {
        icons: {
          minimap:
            "https://gamepedia.cursecdn.com/dota2_gamepedia/7/77/Regeneration_Rune_minimap_icon.png?version=ec3367bb5d775fda3911c3b72bffdbbc"
        }
      }
    }
  }
};

export default runes;
