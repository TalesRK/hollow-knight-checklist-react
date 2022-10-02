import { geo, essence, paleOre } from '../static/img'

const geoRender = <img src={geo} className="item-image geo" alt="geo" />
const essenceRender = (
    <img src={essence} className="item-image essence" alt="essence" />
)
const paleOreRender = (
    <img src={paleOre} className="item-image pale-ore" alt="pale-ore" />
)

export const gameData = {
    bosses: {
        id: 'bosses',
        label: (
            <>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://hollowknight.fandom.com/wiki/Category:Bosses_(Hollow_Knight)"
                >
                    Bosses
                </a>
            </>
        ),
        content: [
            {
                id: 'bosses_broken_vessel',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Broken_Vessel"
                        >
                            Broken Vessel
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'bosses_brooding_mawlek',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Brooding_Mawlek"
                        >
                            Brooding Mawlek
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'bosses_the_collector',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Collector"
                        >
                            The Collector
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'bosses_dung_defender',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Dung_Defender"
                        >
                            Dung Defender
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'bosses_false_knight',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/False_Knight"
                        >
                            False Knight
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'bosses_grimm',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Grimm"
                        >
                            Grimm
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'bosses_gruz_mother',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Gruz_Mother"
                        >
                            Gruz Mother
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'bosses_hive_knight',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Hive_Knight"
                        >
                            Hive Knight
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'bosses_hornet_greenpath',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Hornet_Protector"
                        >
                            Hornet (Greenpath)
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'bosses_hornet_cast_off_shell',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Hornet_Sentinel"
                        >
                            Hornet (Cast-Off Shell)
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'bosses_mantis_lords',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Mantis_Lords"
                        >
                            Mantis Lords
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'bosses_nosk',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Nosk"
                        >
                            Nosk
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'bosses_soul_master',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Soul_Master"
                        >
                            Soul Master
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'bosses_traitor_lord',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Traitor_Lord"
                        >
                            Traitor Lord
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'bosses_uumuu',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Uumuu"
                        >
                            Uumuu
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'bosses_watcher_knight',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Watcher_Knight"
                        >
                            Watcher Knight
                        </a>
                    </>
                ),
                percent: 1,
            },
        ],
    },
    equipment: {
        label: (
            <>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://hollowknight.fandom.com/wiki/Category:Items_(Hollow_Knight)"
                >
                    Equipment
                </a>
            </>
        ),
        content: [
            {
                id: 'equipment_mothwing_cloak',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Mothwing_Cloak"
                        >
                            Mothwing Cloak
                        </a>
                    </>
                ),
                percent: 2,
            },
            {
                id: 'equipment_mantis_claw',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Mantis_Claw"
                        >
                            Mantis Claw
                        </a>
                    </>
                ),
                percent: 2,
            },
            {
                id: 'equipment_crystal_heart',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Crystal_Heart"
                        >
                            Crystal Heart
                        </a>
                    </>
                ),
                percent: 2,
            },
            {
                id: 'equipment_isma_s_tear',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Isma's_Tear"
                        >
                            Isma's Tear
                        </a>
                    </>
                ),
                percent: 2,
            },
            {
                id: 'equipment_king_s_brand',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/King's_Brand"
                        >
                            King's Brand
                        </a>
                    </>
                ),
                percent: 2,
            },
            {
                id: 'equipment_monarch_wings',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Monarch_Wings"
                        >
                            Monarch Wings
                        </a>
                    </>
                ),
                percent: 2,
            },
            {
                id: 'equipment_shade_cloak',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Shade_Cloak"
                        >
                            Shade Cloak
                        </a>
                    </>
                ),
                percent: 2,
            },
        ],
    },
    spells: {
        id: 'spells',
        label: (
            <>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://hollowknight.fandom.com/wiki/Category:Spells_and_Abilities_(Hollow_Knight)#Spells"
                >
                    Spells
                </a>
            </>
        ),
        content: [
            {
                id: 'spells_vengeful_spirit',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Vengeful_Spirit"
                        >
                            Vengeful Spirit
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'spells_shade_soul',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Shade_Soul"
                        >
                            Shade Soul
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'spells_desolate_dive',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Desolate_Dive"
                        >
                            Desolate Dive
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'spells_descending_dark',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Descending_Dark"
                        >
                            Descending Dark
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'spells_howling_wraiths',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Howling_Wraiths"
                        >
                            Howling Wraiths
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'spells_abyss_shriek',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Abyss_Shriek"
                        >
                            Abyss Shriek
                        </a>
                    </>
                ),
                percent: 1,
            },
        ],
    },
    dream_nail: {
        id: 'dream_nail',
        label: (
            <>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://hollowknight.fandom.com/wiki/Dream_Nail"
                >
                    Dream Nail
                </a>
            </>
        ),
        content: [
            {
                id: 'dream_nail_acquire_the_dream_nail',
                label: <>Acquire the Dream Nail</>,
                percent: 1,
            },
            {
                id: 'dream_nail_awaken_the_dream_nail',
                label: <>Awaken the Dream Nail ({essenceRender} 1800)</>,
                percent: 1,
            },
            {
                id: 'dream_nail_hear_the_seer_s_final_words',
                label: <>Hear the Seer's final words ({essenceRender} 2400)</>,
                percent: 1,
            },
        ],
    },
    nail: {
        id: 'nail',
        label: (
            <>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://hollowknight.fandom.com/wiki/Nail"
                >
                    Nail
                </a>
            </>
        ),
        content: [
            {
                id: 'nail_sharpened_nail',
                label: <>Sharpened Nail ({geoRender} 250)</>,
                percent: 1,
            },
            {
                id: 'nail_channelled_nail',
                label: (
                    <>
                        Channelled Nail ({geoRender} 800 and {paleOreRender} 1)
                    </>
                ),
                percent: 1,
            },
            {
                id: 'nail_coiled_nail',
                label: (
                    <>
                        Coiled Nail ({geoRender} 2000 and {paleOreRender} 2)
                    </>
                ),
                percent: 1,
            },
            {
                id: 'nail_pure_nail',
                label: (
                    <>
                        Pure Nail ({geoRender} 4000 and {paleOreRender} 3)
                    </>
                ),
                percent: 1,
            },
        ],
    },
    nail_arts: {
        id: 'nail_arts',
        label: (
            <>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://hollowknight.fandom.com/wiki/Category%3ASpells_and_Abilities_(Hollow_Knight)#Nail_Arts"
                >
                    Nail Arts
                </a>
            </>
        ),
        content: [
            {
                id: 'nail_arts_great_slash',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Great_Slash"
                        >
                            Great Slash
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'nail_arts_dash_slash',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Dash_Slash"
                        >
                            Dash Slash
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'nail_arts_cyclone_slash',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Cyclone_Slash"
                        >
                            Cyclone Slash
                        </a>
                    </>
                ),
                percent: 1,
            },
        ],
    },
    vessel_fragments: {
        id: 'vessel_fragments',
        label: (
            <>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://hollowknight.fandom.com/wiki/Vessel_Fragment"
                >
                    Vessel Fragments
                </a>
            </>
        ),
        content: [
            {
                id: 'vessel_fragments_sly_geo_550',
                label: (
                    <>
                        {'Bought from '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Sly"
                        >
                            Sly
                        </a>
                        {' in Dirtmouth for'} {geoRender} {' 550'}
                    </>
                ),
                percent: 0.3333333,
            },
            {
                id: 'vessel_fragments_sly_geo_900',
                label: (
                    <>
                        {'Bought from '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Sly"
                        >
                            Sly
                        </a>
                        {' in Dirtmouth for'} {geoRender} {' 900'}
                    </>
                ),
                percent: 0.3333333,
            },
            {
                id: 'vessel_fragments_green_path_queens_garden',
                label: (
                    <>
                        {'Found in '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Greenpath"
                        >
                            Greenpath
                        </a>
                        {' near the inaccessible '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Queen%27s_Gardens"
                        >
                            Queen's Gardens
                        </a>
                        {' entrance'}
                    </>
                ),
                percent: 0.3333333,
            },
            {
                id: 'vessel_fragments_forgotten_crossroads',
                label: (
                    <>
                        {'Left of the lift in '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Forgotten_Crossroads"
                        >
                            Forgotten Crossroads
                        </a>
                    </>
                ),
                percent: 0.3333333,
            },
            {
                id: 'vessel_fragments_kings_station',
                label: (
                    <>
                        {'Found above '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/City_of_Tears#Sub-area:_King.27s_Station"
                        >
                            King's Station
                        </a>
                        {' near a lift'}
                    </>
                ),
                percent: 0.3333333,
            },
            {
                id: 'vessel_fragments_deepnest',
                label: (
                    <>
                        {'Found in '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Deepnest"
                        >
                            Deepnest
                        </a>
                        {' above the working tram'}
                    </>
                ),
                percent: 0.3333333,
            },
            {
                id: 'vessel_fragments_stag_nest',
                label: (
                    <>
                        {'Found at the end of '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Howling_Cliffs#Sub-area:_Stag_Nest"
                        >
                            Stag Nest
                        </a>
                    </>
                ),
                percent: 0.3333333,
            },
            {
                id: 'vessel_fragments_seer_essence_700',
                label: (
                    <>
                        {'Given by the '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Seer"
                        >
                            Seer
                        </a>
                        {' for'} {essenceRender} {' 700'}
                    </>
                ),
                percent: 0.3333333,
            },
            {
                id: 'vessel_fragments_ancient_basin_geo_3000',
                label: (
                    <>
                        {'Found in the fountain in '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Ancient_Basin"
                        >
                            Ancient Basin
                        </a>
                        {' for'} {geoRender} {' 3000'}
                    </>
                ),
                percent: 0.3333333,
            },
        ],
    },
    mask_shards: {
        id: 'mask_shards',
        label: (
            <>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://hollowknight.fandom.com/wiki/Mask_Shard"
                >
                    Mask Shards
                </a>
            </>
        ),
        content: [
            {
                id: 'mask_shards_sly_geo_150',
                label: (
                    <>
                        {'Bought from '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Sly"
                        >
                            Sly
                        </a>
                        {' in Dirtmouth for'} {geoRender} {' 150'}
                    </>
                ),
                percent: 0.25,
            },
            {
                id: 'mask_shards_sly_geo_500',
                label: (
                    <>
                        {'Bought from '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Sly"
                        >
                            Sly
                        </a>
                        {' in Dirtmouth for'} {geoRender} {' 500'}
                    </>
                ),
                percent: 0.25,
            },
            {
                id: 'mask_shards_sly_geo_800',
                label: (
                    <>
                        {'Bought from '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Sly"
                        >
                            Sly
                        </a>
                        {' in Dirtmouth for'} {geoRender} {' 800'}
                    </>
                ),
                percent: 0.25,
            },
            {
                id: 'mask_shards_sly_geo_1500',
                label: (
                    <>
                        {'Bought from '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Sly"
                        >
                            Sly
                        </a>
                        {' in Dirtmouth for'} {geoRender} {' 1500'}
                    </>
                ),
                percent: 0.25,
            },
            {
                id: 'mask_shards_brooding_mawlek',
                label: (
                    <>
                        {'Defeating '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Brooding_Mawlek"
                        >
                            Brooding Mawlek
                        </a>
                        {' far West of the '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Forgotten_Crossroads"
                        >
                            Forgotten Crossroads
                        </a>
                    </>
                ),
                percent: 0.25,
            },
            {
                id: 'mask_shards_grubfather_grubs_5',
                label: (
                    <>
                        {'Given by '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Grubfather"
                        >
                            Grubfather
                        </a>
                        {' after rescuing 5 grubs'}
                    </>
                ),
                percent: 0.25,
            },
            {
                id: 'mask_shards_forgotten_crossroads',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Forgotten_Crossroads"
                        >
                            Forgotten Crossroads
                        </a>
                        {' south of '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/False_Knight"
                        >
                            False Knight
                        </a>
                        {' (where there are '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Goam"
                        >
                            Goams
                        </a>
                        {')'}
                    </>
                ),
                percent: 0.25,
            },
            {
                id: 'mask_shards_queens_station',
                label: (
                    <>
                        {'In '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Fungal_Wastes#Sub-area:_Queen.27s_Station_.C2.A0"
                        >
                            Queen's Station
                        </a>
                        {', near East side'}
                    </>
                ),
                percent: 0.25,
            },
            {
                id: 'mask_shards_bretta',
                label: (
                    <>
                        {'Found in '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Bretta"
                        >
                            Bretta
                        </a>
                        {"'s house in Dirtmouth"}
                    </>
                ),
                percent: 0.25,
            },
            {
                id: 'mask_shards_greenpath',
                label: (
                    <>
                        {'Found in '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Greenpath#Sub-area:_Stone_Sanctuary"
                        >
                            Stone Sanctuary
                        </a>
                        {' in '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Greenpath"
                        >
                            Greenpath
                        </a>
                    </>
                ),
                percent: 0.25,
            },
            {
                id: 'mask_shards_royal_waterways',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Royal_Waterways"
                        >
                            Royal Waterways
                        </a>
                        {' NW section, swim left under main path'}
                    </>
                ),
                percent: 0.25,
            },
            {
                id: 'mask_shards_deepnest',
                label: (
                    <>
                        {'Found in '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Deepnest"
                        >
                            Deepnest
                        </a>
                        {' through '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Fungal_Wastes#Sub-area:_Fungal_Core"
                        >
                            Fungal Core
                        </a>
                        {', near '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Mantis_Lords"
                        >
                            Mantis Lords
                        </a>
                    </>
                ),
                percent: 0.25,
            },
            {
                id: 'mask_shards_enraged_guardian',
                label: (
                    <>
                        {'Reward from '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Enraged_Guardian"
                        >
                            Enraged Guardian
                        </a>
                    </>
                ),
                percent: 0.25,
            },
            {
                id: 'mask_shards_the_hive',
                label: (
                    <>
                        {'Found behind a wall in '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Hive"
                        >
                            The Hive
                        </a>
                    </>
                ),
                percent: 0.25,
            },
            {
                id: 'mask_shards_seer_essence_500',
                label: (
                    <>
                        {'Given by the '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Seer"
                        >
                            Seer
                        </a>
                        {' for'} {essenceRender} {' 1500'}
                    </>
                ),
                percent: 0.25,
            },
            {
                id: 'mask_shards_grey_mourner',
                label: (
                    <>
                        {'Given by '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Grey_Mourner"
                        >
                            Grey Mourner
                        </a>
                        {' in '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Resting_Grounds"
                        >
                            Resting Grounds
                        </a>
                    </>
                ),
                percent: 0.25,
            },
        ],
    },
    charms: {
        id: 'charms',
        label: (
            <>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://hollowknight.fandom.com/wiki/Category:Charms"
                >
                    Charms
                </a>
            </>
        ),
        content: [
            {
                id: 'charms_wayward_compass',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Wayward_Compass"
                        >
                            Wayward Compass
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_gathering_swarm',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Gathering_Swarm"
                        >
                            Gathering Swarm
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_stalwart_shell',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Stalwart_Shell"
                        >
                            Stalwart Shell
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_soul_catcher',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Soul_Catcher"
                        >
                            Soul Catcher
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_shaman_stone',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Shaman_Stone"
                        >
                            Shaman Stone
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_soul_eater',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Soul_Eater"
                        >
                            Soul Eater
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_dashmaster',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Dashmaster"
                        >
                            Dashmaster
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_sprintmaster',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Sprintmaster"
                        >
                            Sprintmaster
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_grubsong',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Grubsong"
                        >
                            Grubsong
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_grubberfly_s_elegy',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Grubberfly's_Elegy"
                        >
                            Grubberfly's Elegy
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_fragile_heart',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Fragile_Heart"
                        >
                            Fragile Heart
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_fragile_greed',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Fragile_Greed"
                        >
                            Fragile Greed
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_fragile_strength',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Fragile_Strength"
                        >
                            Fragile Strength
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_spell_twister',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Spell_Twister"
                        >
                            Spell Twister
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_steady_body',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Steady_Body"
                        >
                            Steady Body
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_heavy_blow',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Heavy_Blow"
                        >
                            Heavy Blow
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_quick_slash',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Quick_Slash"
                        >
                            Quick Slash
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_longnail',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Longnail"
                        >
                            Longnail
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_mark_of_pride',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Mark_of_Pride"
                        >
                            Mark of Pride
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_fury_of_the_fallen',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Fury_of_the_Fallen"
                        >
                            Fury of the Fallen
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_thorns_of_agony',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Thorns_of_Agony"
                        >
                            Thorns of Agony
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_baldur_shell',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Baldur_Shell"
                        >
                            Baldur Shell
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_flukenest',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Flukenest"
                        >
                            Flukenest
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_defender_s_crest',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Defender's_Crest"
                        >
                            Defender's Crest
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_glowing_womb',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Glowing_Womb"
                        >
                            Glowing Womb
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_quick_focus',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Quick_Focus"
                        >
                            Quick Focus
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_deep_focus',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Deep_Focus"
                        >
                            Deep Focus
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_lifeblood_heart',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Lifeblood_Heart"
                        >
                            Lifeblood Heart
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_lifeblood_core',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Lifeblood_Core"
                        >
                            Lifeblood Core
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_joni_s_blessing',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Joni's_Blessing"
                        >
                            Joni's Blessing
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_hiveblood',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Hiveblood"
                        >
                            Hiveblood
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_spore_shroom',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Spore_Shroom"
                        >
                            Spore Shroom
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_sharp_shadow',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Sharp_Shadow"
                        >
                            Sharp Shadow
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_shape_of_unn',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Shape_of_Unn"
                        >
                            Shape of Unn
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_nailmaster_s_glory',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Nailmaster's_Glory"
                        >
                            Nailmaster's Glory
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_weaversong',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Weaversong"
                        >
                            Weaversong
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_dream_wielder',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Dream_Wielder"
                        >
                            Dream Wielder
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_dreamshield',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Dreamshield"
                        >
                            Dreamshield
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_grimmchild_carefree_melody',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Grimmchild"
                        >
                            Grimmchild
                        </a>
                        {' / '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Carefree_Melody"
                        >
                            Carefree Melody
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'charms_kingsoul_void_heart',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Kingsoul"
                        >
                            Kingsoul
                        </a>
                        {' / '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Void_Heart"
                        >
                            Void Heart
                        </a>
                    </>
                ),
                percent: 1,
            },
        ],
    },
    colosseum: {
        id: 'colosseum',
        label: (
            <>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://hollowknight.fandom.com/wiki/Colosseum_of_Fools"
                >
                    Colosseum
                </a>
            </>
        ),
        content: [
            {
                id: 'colosseum_trial_of_the_warrior',
                label: 'Trial of the Warrior',
                percent: 1,
            },
            {
                id: 'colosseum_trial_of_the_conqueror',
                label: 'Trial of the Conqueror',
                percent: 1,
            },
            {
                id: 'colosseum_trial_of_the_fool',
                label: 'Trial of the Fool',
                percent: 1,
            },
        ],
    },
    dreamers: {
        id: 'dreamers',
        label: (
            <>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://hollowknight.fandom.com/wiki/Dreamers"
                >
                    Dreamers
                </a>
            </>
        ),
        content: [
            {
                id: 'dreamers_lurien_the_watcher',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Dreamers#Lurien_the_Watcher"
                        >
                            Lurien the Watcher
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'dreamers_monomon_the_teacher',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Dreamers#Monomon_the_Teacher"
                        >
                            Monomon the Teacher
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'dreamers_herrah_the_beast',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Dreamers#Herrah_the_Beast"
                        >
                            Herrah the Beast
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'dreamers_galien',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Galien"
                        >
                            Galien
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'dreamers_marmu',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Marmu"
                        >
                            Marmu
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'dreamers_markoth',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Markoth"
                        >
                            Markoth
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'dreamers_xero',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Xero"
                        >
                            Xero
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'dreamers_no_eyes',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/No_Eyes"
                        >
                            No Eyes
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'dreamers_elder_hu',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Elder_Hu"
                        >
                            Elder Hu
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'dreamers_gorb',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Gorb"
                        >
                            Gorb
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'dreamers_nightmare_king_grimm',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Nightmare_King_Grimm"
                        >
                            Nightmare King Grimm
                        </a>
                    </>
                ),
                percent: 1,
            },
        ],
    },
    godhome: {
        id: 'godhome',
        label: (
            <>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://hollowknight.fandom.com/wiki/Godhome"
                >
                    Godhome
                </a>
            </>
        ),
        content: [
            {
                id: 'godhome_find_godhome',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Godhome"
                        >
                            Find Godhome
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'pantheon_of_the_master',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Pantheon_of_the_Master"
                        >
                            Pantheon of the Master
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'godhome_pantheon_of_the_artist',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Pantheon_of_the_Artist"
                        >
                            Pantheon of the Artist
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'godhome_pantheon_of_the_sage',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Pantheon_of_the_Sage"
                        >
                            Pantheon of the Sage
                        </a>
                    </>
                ),
                percent: 1,
            },
            {
                id: 'godhome_pantheon_of_the_knight',
                label: (
                    <>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://hollowknight.fandom.com/wiki/Pantheon_of_the_Knight"
                        >
                            Pantheon of the Knight
                        </a>
                    </>
                ),
                percent: 1,
            },
        ],
    },
}
