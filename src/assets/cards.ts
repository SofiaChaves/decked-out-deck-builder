import { Card } from '../types/Card';
import { Rarity } from '../types/Rarity';

export const cards: Card[] = [
    {
        name: 'Sneak',
        description: 'Blocks 2 Clank.',
        rarity: Rarity.Common,
        clank: 2,
    },
    {
        name: 'Stability',
        description: 'Blocks 2 Hazard.',
        rarity: Rarity.Common,
        hazard: 2,
    },
    {
        name: 'Ember Seeker',
        description: 'Generates 2 Frost Ember drops.',
        rarity: Rarity.Common,
        ember: 2,
    },
    {
        name: 'Treasure Hunter',
        description: 'Generates 4 Treasure drops.',
        rarity: Rarity.Common,
        treasure: 4,
    },
    {
        name: 'Moment of Clarity',
        description:
            'Blocks 2 Clank, Blocks 2 Hazard, Generates 4 Treasure drops, and Generates 2 Frost Ember drops.',
        rarity: Rarity.Common,
        ethereal: true,
        clank: 2,
        hazard: 2,
        treasure: 4,
        ember: 2,
    },
    {
        name: 'Evasion',
        description: 'Blocks 4 Clank.',
        rarity: Rarity.Uncommon,
        clank: 4,
    },
    {
        name: 'Tread Lightly',
        description: 'Blocks 4 Hazard.',
        rarity: Rarity.Uncommon,
        hazard: 4,
    },
    {
        name: 'Frost Focus',
        description: 'Generates 4 Frost Ember Drops.',
        rarity: Rarity.Uncommon,
        ember: 4,
    },
    {
        name: 'Smash And Grab',
        description: 'Generates 13 Treasure drops but, Adds 2 Clank.',
        rarity: Rarity.Uncommon,
        clank: -2,
        treasure: 13,
    },
    {
        name: 'Adrenaline Rush',
        description:
            'Every heartbeat for the next 20 seconds Generates 1 Treasure drop.',
        rarity: Rarity.Uncommon,
        treasure: 1,
    },
    {
        name: 'Bounding Strides',
        description: 'Blocks 2 Hazard and Gives 2 minutes of Jump Boost II.',
        rarity: Rarity.Uncommon,
        hazard: 2,
    },
    {
        name: 'Reckless Charge',
        description:
            'Generates 2 Hazard, but if you trigger a shrieker within 12 seconds, it Generates 10 Frost Ember drops.',
        rarity: Rarity.Uncommon,
        hazard: -2,
        ember: 10,
    },
    {
        name: 'Sprint',
        description: 'Gives 60 seconds of Sprint II.',
        rarity: Rarity.Uncommon,
    },
    {
        name: 'Beast Sense',
        description:
            'Generates 1 Clank and the next three cards that are played Ring the Bell, showing where the Ravagers are.',
        rarity: Rarity.Uncommon,
        clank: -1,
    },
    {
        name: 'Second Wind',
        description: 'Gives 15 seconds of Regeneration II and Sprint II.',
        rarity: Rarity.Uncommon,
    },
    {
        name: 'Loot and Scoot',
        description:
            'Generates 7 Treasure drops and Gives 15 seconds of Sprint II.',
        rarity: Rarity.Uncommon,
        treasure: 7,
    },
    {
        name: 'Quickstep',
        description:
            "Blocks 2 Clank, Gives 15 seconds of Sprint II, and Quickdraw's 1 card.",
        rarity: Rarity.Uncommon,
        clank: 2,
    },
    {
        name: 'Suit Up',
        description:
            'Grants a diamond chestplate and leggings at the Dungeon entrance, Gives 20 seconds of Resistance, and each shrieker triggered has a 50% chance of adding 1 additional clank.',
        rarity: Rarity.Uncommon,
        permanent: true,
        clank: -1,
    },
    {
        name: 'Eerie Silence',
        description:
            'Blocks 8 Clank and 2 Hazard, but skips your next card draw.',
        rarity: Rarity.Rare,
        clank: 8,
        hazard: 2,
    },
    {
        name: 'Silent Runner',
        description:
            'Every 15 seconds Speed II is active it has a 50% chance to Block 1 Clank.',
        rarity: Rarity.Rare,
        permanent: true,
        clank: 1,
    },
    {
        name: 'Cold Snap',
        description:
            'Generates 3 Hazard, but for the next 3 cards played, Frost Ember drops double.',
        rarity: Rarity.Rare,
        hazard: -3,
    },
    {
        name: 'Haste',
        description: '?',
        rarity: Rarity.Rare,
    },
    {
        name: 'Eyes On The Prize',
        description:
            'Generates 2 Clank and 3 Hazard but, Gives an extra available purchase at the Frost Ember shop.',
        rarity: Rarity.Rare,
        clank: -2,
        hazard: -3,
    },
    {
        name: 'Speed Runner',
        description: 'Grants 8 Frost Embers at the entrance to Level 3.',
        rarity: Rarity.Rare,
        permanent: true,
        ember: 8,
    },
    {
        name: 'Chill Step',
        description:
            'Any future Sneak cards played Generate 2 Frost Ember drops.',
        rarity: Rarity.Rare,
        ember: 2,
    },
    {
        name: 'Swagger',
        description: '?',
        rarity: Rarity.Rare,
    },
    {
        name: 'Dungeon Repairs',
        description: 'Blocks 7 Hazard but, Generates 1 Clank.',
        rarity: Rarity.Rare,
        clank: -1,
        hazard: 7,
    },
    {
        name: 'Fuzzy Bunny Slippers',
        description:
            'Prevents from Gaining Speed if artifact has been obtained but, every staircase unlocked Blocks 4 Clank.',
        rarity: Rarity.Rare,
        permanent: true,
        clank: 4,
    },
    {
        name: 'Deepfrost',
        description:
            'Generates 6 Frost Ember drops for each staircase unlocked.',
        rarity: Rarity.Rare,
        ember: 6,
    },
    {
        name: 'Brilliance',
        description: 'QuickDraw 2 cards.',
        rarity: Rarity.Rare,
    },
    {
        name: 'Avalanche',
        description: '?',
        rarity: Rarity.Legendary,
    },
    {
        name: 'Glorious Moment',
        description: '?',
        rarity: Rarity.Legendary,
    },
    {
        name: 'Beast Master',
        description: '?',
        rarity: Rarity.Legendary,
        permanent: true,
    },
    {
        name: 'Pay To Win',
        description: 'Generates 10 Frost Ember drops',
        rarity: Rarity.Unknown,
        ethereal: true,
        ember: 10,
    },
    {
        name: 'Tactical Approach',
        description: 'Blocks 4 Clank but gives 4 Treasure drops',
        rarity: Rarity.Unknown,
        permanent: true,
        ethereal: true,
        clank: 4,
        treasure: 4,
    },
    {
        name: 'Porkchop Power',
        description: 'Grants 2 cooked porkchops at the dungeon entrance',
        rarity: Rarity.Unknown,
        permanent: true,
        ethereal: true,
    },
];
