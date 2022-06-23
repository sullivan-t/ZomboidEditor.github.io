/**
 * Rules/specs
 *
 * Mutually Exclusive traits cannot be taken together
 *
 * Points to Spend >= 0 is valid
 *
 * Only one occupation at a time
 *
 * occupation traits are permanenet and cost nothing, and are positive
 */

/**
 * Taken from
 * https://pzwiki.net/wiki/Traits
 *
 * Trait Name: {
 *   exclusive: Exclusive with other trait list,
 *   points: cost to have, positive traits are negative so you can just sum everything
 *   desc: description
 *   effectDesc: description of in game effects
 *   skills: list of attribute modifiers
 * }
 */
export const TRAITS = {
	positive: {
		'Adrenaline Junkie': {
			id: 'Adrenaline Junkie',
			exclusive: ['Desensitized'],
			points: -8,
			desc: 'Moves faster when highly panicked.',
			effectDesc:
				"Adds a flat bonus of 0.20 or 0.25 for the character's base speed at Strong or Extreme Panic, which increases walking, running, and sprinting speed. There's currently a bug that makes the character's combat walk speed much less affected by Heavy Load or Exertion."
		},
		Athletic: {
			id: 'Athletic',
			exclusive: ['Fit', 'Out of Shape', 'Obese', 'Overweight', 'Unfit'],
			points: -10,
			desc: 'Can run faster and longer without tiring.',
			effectDesc: '+4 Fitness. 40% running/sprinting endurance loss from the trait itself.',
			skills: { Fitness: 4 }
		},
		Brave: {
			id: 'Brave',
			exclusive: ['Cowardly', 'Desensitized'],
			points: -4,
			desc: 'Less prone to becoming panicked.',
			effectDesc: '30% panic except for night terrors and phobias.'
		},
		"Cat's Eyes": {
			id: "Cat's Eyes",
			exclusive: [],
			points: -2,
			desc: 'Better vision at night.',
			effectDesc: '+20% better vision at night. Affects search mode.'
		},
		Dextrous: {
			id: 'Dextrous',
			exclusive: ['All Thumbs'],
			points: -2,
			desc: 'Transfers inventory items quickly.',
			effectDesc: '50% inventory transferring time.'
		},
		'Eagle Eyed': {
			id: 'Eagle Eyed',
			exclusive: ['Short Sighted'],
			points: -6,
			desc: 'Has a faster visibility fade and a higher visibility arc.',
			effectDesc: 'Character has a wider field of view. Affects search mode'
		},
		'Fast Healer': {
			id: 'Fast Healer',
			exclusive: ['Slow Healer'],
			points: -6,
			desc: 'Recovers faster from injury and illness.',
			effectDesc:
				'Does not apply to exercise fatigue. Recently inflicted injuries have less severity.\n\nIncluding Scratches, Lacerations, Lodged Bullets, Deep wounds (with/without glass), Bites and Fractures. (Check Health for more details.)'
		},
		'Fast Learner': {
			id: 'Fast Learner',
			exclusive: ['Slow Learner'],
			points: -6,
			desc: 'Increases XP gains.',
			effectDesc: 'Increases XP gains.'
		},
		'Fast Reader': {
			id: 'Fast Reader',
			exclusive: ['Illiterate', 'Slow Reader'],
			points: -2,
			desc: 'Takes less time to read books.',
			effectDesc: '130% reading speed.'
		},
		Fit: {
			id: 'Fit',
			exclusive: ['Athletic', 'Out of Shape', 'Obese', 'Overweight', 'Unfit'],
			points: -6,
			desc: 'In good physical shape.',
			effectDesc: '+2 Fitness.',
			skills: { Fitness: 2 }
		},
		Graceful: {
			id: 'Graceful',
			exclusive: ['Clumsy'],
			points: -4,
			desc: 'Makes less noise when moving.',
			effectDesc:
				'60% footsteps sound radius. 90% chance to trip while run/sprint vaulting a low fence or lunging zombies.'
		},
		Inconspicuous: {
			id: 'Inconspicuous',
			exclusive: ['Conspicuous'],
			points: -4,
			desc: 'Less likely to be spotted by zombies.',
			effectDesc: '50% chance of zombies spotting you.'
		},
		'Iron Gut': {
			id: 'Iron Gut',
			exclusive: ['Weak Stomach'],
			points: -3,
			desc: 'Less chance to have food illness.',
			effectDesc: '50% chance of food illness. Food illness lasts shorter. Check Health for more details.'
		},
		'Keen Hearing': {
			id: 'Keen Hearing',
			exclusive: ['Deaf', 'Hard of Hearing'],
			points: -6,
			desc: 'Larger perception radius.',
			effectDesc: '200% perception radius. Zombies that approach from behind will be visible much earlier.'
		},
		'Light Eater': {
			id: 'Light Eater',
			exclusive: ['Hearty Appetite'],
			points: -4,
			desc: 'Needs to eat less regularly.',
			effectDesc: '75% hunger.'
		},
		'Low Thirst': {
			id: 'Low Thirst',
			exclusive: ['High Thirst'],
			points: -6,
			desc: 'Needs to drink water less regularly.',
			effectDesc: '50% thirst.'
		},
		Lucky: {
			id: 'Lucky',
			exclusive: ['Unlucky'],
			points: -4,
			desc: 'Sometimes things just go your way.',
			effectDesc:
				'+10% chance of finding rare loot. -5% chance of failing item repairs. Affects search mode. Not available in multiplayer.'
		},
		Organized: {
			id: 'Organized',
			exclusive: ['Disorganized'],
			points: -6,
			desc: 'Increased container inventory capacity.',
			effectDesc: '130% capacity for all containers, including boxes, cupboards and cars'
		},
		Outdoorsman: {
			id: 'Outdoorsman',
			exclusive: [],
			points: -2,
			desc: 'Not affected by harsh weather conditions.',
			effectDesc:
				'10% chance of catching a cold. 1% or 1.25% chance of getting scratched/lacerated while Walking or Running through trees. Start a fire on campfires with Notched Plank faster. Affects search mode'
		},
		Resilient: {
			id: 'Resilient',
			exclusive: ['Prone to Illness'],
			points: -4,
			desc: 'Less prone to disease. Slower rate of zombification.',
			effectDesc:
				'75% zombification progression rate, 45% chance of catching a cold, 80% cold strength and 50% cold progression speed.'
		},
		'Speed Demon': {
			id: 'Speed Demon',
			exclusive: ['Sunday driver'],
			points: -1,
			desc: 'The fast driver.',
			effectDesc: '200% Gear switching speed, 115% top speed for all vehicles'
		},
		Stout: {
			id: 'Stout',
			exclusive: ['Feeble', 'Strong', 'Weak'],
			points: -6,
			desc: 'Extra knockback from melee weapons and increased carry weight.',
			effectDesc: '+2 Strength',
			skills: { Strength: 2 }
		},
		Strong: {
			id: 'Strong',
			exclusive: ['Feeble', 'Stout', 'Weak'],
			points: -10,
			desc: 'Extra knockback from melee weapons and increased carry weight.',
			effectDesc: '+4 Strength, 140% melee damage.',
			skills: { Strength: 4 }
		},
		'Thick Skinned': {
			id: 'Thick Skinned',
			exclusive: ['Thin Skinned'],
			points: -6,
			desc: 'Less chance of scratches or bites breaking the skin.',
			effectDesc:
				"Multiplies the chance of not being injured by a zombie attack by 1.3 (base 15% chance, modified by character's weapon skill). Additionally, alters the chance of clothes being damaged by walking through trees to 1 in 13."
		},
		Wakeful: {
			id: 'Wakeful',
			exclusive: ['Sleepyhead'],
			points: -2,
			desc: 'Needs less sleep.',
			effectDesc: '-30% less sleep required'
		}
	},
	hobbies: {
		'Amateur Mechanic': {
			id: 'Amateur Mechanic',
			exclusive: ['Mechanic'], //occupational
			points: -5,
			desc: 'Has a detailed knowledge of common and heavy vehicle models and their repairs.',
			effectDesc: '+1 Mechanics, can repair standard and heavy-duty vehicles.',
			skills: { Mechanics: 1 }
		},
		Angler: {
			id: 'Angler',
			points: -4,
			desc: 'Know the basics of fishing',
			effectDesc: '+1 Fishing, Knows how to make and fix a fishing rod',
			skills: { Fishing: 1 }
		},
		'Baseball Player': {
			id: 'Baseball Player',
			points: -4,
			desc: 'Has practice with a baseball bat and knows how to hit with precision.',
			effectDesc: '+1 Long Blunt',
			skills: { 'Long Blunt': 1 }
		},
		Brawler: {
			id: 'Brawler',
			points: -6,
			desc: 'Used to getting into trouble.',
			effectDesc: '+1 Axe, +1 Long Blunt',
			skills: { Axe: 1, 'Long Blunt': 1 }
		},
		Cook: {
			id: 'Cook',
			exclusive: ['Chef', 'Burger Flipper'],
			points: -6,
			desc: 'Knows cooking recipes.',
			effectDesc:
				'+2 Cooking, knows all the cooking recipes without having to read any recipe magazines. Affects search mode.',
			skills: { Cooking: 2 }
		},
		'First Aider': {
			id: 'First Aider',
			points: -4,
			desc: 'Has a CPR and First Aid course certificate.',
			effectDesc: '+1 First Aid',
			skills: { 'First Aid': 1 }
		},
		'Former Scout': {
			id: 'Former Scout',
			points: -6,
			desc: 'Knows how to pick wild berries and how to treat small injuries.',
			effectDesc: '+1 First Aid, +1 Foraging. Affects search mode.',
			skills: { 'First Aid': 1, Foraging: 1 }
		},
		Gardener: {
			id: 'Gardener',
			points: -4,
			desc: 'Has basic agriculture knowledge.',
			effectDesc: '+1 Farming, Knows mildew and flies cure. Affects search mode.',
			skills: { Farming: 1 }
		},
		Gymnast: {
			id: 'Gymnast',
			points: -5,
			desc: 'Agile and discreet.',
			effectDesc: '+1 Lightfooted, +1 Nimble',
			skills: { Lightfooted: 1, Nimble: 1 }
		},
		Handy: {
			id: 'Handy',
			points: -8,
			desc: 'Faster and stronger constructions.',
			effectDesc:
				'+1 Carpentry, +1 Maintenance\n+100HP to all constructions.\nIncreases building speed (~11%).',
			skills: { Carpentry: 1, Maintenance: 1 }
		},
		Herbalist: {
			id: 'Herbalist',
			points: -6,
			desc: 'Can find medicinal herbs and craft medicines and poultices from them.',
			effectDesc:
				'Able to find herbal medicines, make poultices from them, and identify poisonous wild food. Affects search mode.'
		},
		Hiker: {
			id: 'Hiker',
			points: -6,
			desc: 'Used to surviving in the jungle.',
			effectDesc: '+1 Foraging, +1 Trapping. Affects search mode.',
			skills: { Foraging: 1, Trapping: 1 }
		},
		Hunter: {
			id: 'Hunter',
			points: -8,
			desc: 'Know the basics of hunting.',
			effectDesc: '+1 Aiming, +1 Short Blade, +1 Sneaking, +1 Trapping and affects search mode.',
			skills: { Aiming: 1, 'Short Blade': 1, Sneaking: 1, Trapping: 1 }
		},
		Nutritionist: {
			id: 'Nutritionist',
			exclusive: ['Fitness Instructor'],
			points: -4,
			desc: 'Can see the nutritional values of any food.',
			effectDesc:
				"Allows the player to see the nutritional values of any food, even those that aren't packaged. Affects search mode."
		},
		Runner: {
			id: 'Runner',
			points: -4,
			desc: 'Runner in the spare times.',
			effectDesc: '+1 Sprinting',
			skills: { Sprinting: 1 }
		},
		Sewer: {
			id: 'Sewer',
			points: -4,
			desc: '+1 Tailoring',
			effectDesc: '+1 Tailoring',
			skills: { Tailoring: 1 }
		}
	},
	negative: {
		Agoraphobic: {
			id: 'Agoraphobic',
			exclusive: ['Desensitized'],
			points: 4,
			desc: 'Gets panicked when outdoors.',
			effectDesc: 'Enters in Panic when outdoors and affects search mode.'
		},
		'All Thumbs': {
			id: 'All Thumbs',
			exclusive: ['Dextrous'],
			points: 2,
			desc: 'Transfers inventory items slowly.',
			effectDesc: '400% inventory transferring time.'
		},
		Asthmatic: {
			id: 'Asthmatic',
			points: 5,
			desc: 'Faster endurance loss.',
			effectDesc: '140% running/sprinting endurance loss. 130% increase in swing endurance lost.'
		},
		Claustrophobic: {
			id: 'Claustrophobic',
			exclusive: ['Desensitized'],
			points: 4,
			desc: 'Gets panicked when indoors.',
			effectDesc: 'Enters in Panic when indoors.'
		},
		Clumsy: {
			id: 'Clumsy',
			exclusive: ['Graceful'],
			points: 2,
			desc: 'Makes more noise when moving.',
			effectDesc:
				'120% footsteps sound radius, 110% chance to trip while run/sprint vaulting a low fence or lunging zombies.'
		},
		Conspicuous: {
			id: 'Conspicuous',
			exclusive: ['Inconspicuous'],
			points: 4,
			desc: 'More likely to be spotted by zombies.',
			effectDesc: '200% chance of getting spotted by zombies.'
		},
		Cowardly: {
			id: 'Cowardly',
			exclusive: ['Brave', 'Desensitized'],
			points: 2,
			effectDesc: 'Especially prone to becoming panicked.',
			effectDesc: '200% panic except for night terrors and phobias.'
		},
		Deaf: {
			id: 'Deaf',
			exclusive: ['Hard of Hearing', 'Keen Hearing'],
			points: 12,
			desc: 'Smaller perception radius and hearing range.',
			effectDesc:
				"Can't hear sound. Radio chatter will not appear above the radio, however, they can see/read a TV due to closed captions."
		},
		Disorganized: {
			id: 'Disorganized',
			exclusive: ['Organized'],
			points: 4,
			desc: 'Decreased container inventory capacity.',
			effectDesc: '70% capacity for all containers, including boxes and cupboards.'
		},
		Feeble: {
			id: 'Feeble',
			exclusive: ['Strong', 'Stout', 'Weak'],
			points: 6,
			desc: 'Less knockback from melee weapons. Decreased carrying weight.',
			effectDesc: '-2 Strength',
			skills: { Strength: 2 }
		},
		'Hard of Hearing': {
			id: 'Hard of Hearing',
			exclusive: ['Deaf', 'Keen Hearing'],
			points: 2,
			desc: 'Smaller perception radius. Smaller hearing range.',
			effectDesc:
				'Besides the decreased perception radius, the range of sound will be decreased and the sound effects will be muffled.'
		},
		'Hearty Appetite': {
			id: 'Hearty Appetite',
			exclusive: ['Light Eater'],
			points: 4,
			desc: 'Needs to eat more regularly.',
			effectDesc: '150% hunger.'
		},
		Hemophobic: {
			id: 'Hemophobic',
			exclusive: ['Desensitized'],
			points: 5,
			desc: 'Panic when performing first aid on self, cannot perform first aid on others, gets stressed when bloody.',
			effectDesc: ''
		},
		'High Thirst': {
			id: 'High Thirst',
			exclusive: ['Low Thirst'],
			points: 6,
			desc: 'Needs more water to survive.',
			effectDesc: '200% thirst'
		},
		Illiterate: {
			id: 'Illiterate',
			exclusive: ['Fast Reader', 'Slow Reader'],
			points: 8,
			desc: 'Cannot read books.',
			effectDesc:
				'Unable to get a mood boost by reading leisure books, learning new recipes by reading recipe magazines, or getting an XP multiplier by reading skill books.'
		},
		'Out of Shape': {
			id: 'Out of Shape',
			exclusive: ['Athletic', 'Fit', 'Unfit'],
			points: 6,
			desc: 'Low endurance, low endurance regeneration.',
			effectDesc: '-2 Fitness',
			skills: { Fitness: -2 }
		},
		Obese: {
			id: 'Obese',
			exclusive: ['Athletic', 'Fit', 'Out of Shape', 'Overweight', 'Underweight', 'Very Underweight'],
			points: 10,
			desc: 'Reduced running speed, very low endurance and prone to injury.',
			effectDesc:
				'-2 Fitness. Max Fitness of 6. The trait itself reduce run speed and endurance. Starting weight is 105 and is only present at weights 100 and above. 120% chance to trip while run/sprint vaulting a low fence. 90% chance to trip from lunging zombies. 75% chance to climb a tall fence. 40% endurance regeneration. 20 more fall damage.',
			skills: { Fitness: -2 }
		},
		Overweight: {
			id: 'Overweight',
			exclusive: ['Athletic', 'Fit', 'Out of Shape', 'Obese', 'Underweight', 'Very Underweight'],
			points: 6,
			desc: 'Reduced running speed, low endurance and prone to injury.',
			effectDesc:
				'Max Fitness of 9. Starting weight is 90 and is only present between weights 85 and 100. 1% slower running speed, 200% endurance loss. 110% chance to trip while run/sprint vaulting a low fence. 95% chance to trip by lunging zombies. 85% chance to climb a tall fence. 70% endurance regeneration.'
		},
		Pacifist: {
			id: 'Pacifist',
			points: 4,
			desc: 'Less effective with weapons.',
			effectDesc: '75% XP of Melee and Aiming skill.'
		},
		'Prone to Illness': {
			id: 'Prone to Illness',
			exclusive: ['Resilient'],
			points: 4,
			desc: 'More prone to disease. Faster rate of zombification.',
			effectDesc:
				'125% progression rate of zombification. 170% chance of catching a cold, 120% cold strength, and 150% cold progression speed.'
		},
		'Restless Sleeper': {
			id: 'Restless Sleeper',
			points: 6,
			desc: 'Slow loss of tiredness while sleeping.',
			effectDesc: 'Sleep for fewer hours each time, and slower loss of tiredness when sleeping.'
		},
		'Short Sighted': {
			id: 'Short Sighted',
			exclusive: ['Eagle Eyed'],
			points: 2,
			desc: 'Small view distance. Slower visibility fade.',
			effectDesc: '-2 foraging radius in search mode.'
		},
		Sleepyhead: {
			id: 'Sleepyhead',
			exclusive: ['Wakeful'],
			points: 4,
			desc: 'Needs more sleep.',
			effectDesc: '70% tiredness rate.'
		},
		Smoker: {
			id: 'Smoker',
			points: 4,
			desc: 'Stress and unhappiness decrease after smoking tobacco. Unhappiness rises when tobacco is not smoked.',
			effectDesc: 'Stress will constantly slowly rise. Smoking Cigarettes will lower the stress level.'
		},
		'Slow Healer': {
			id: 'Slow Healer',
			exclusive: ['Fast Healer'],
			points: 6,
			desc: 'Recovers slowly from injuries and illness.',
			effectDesc:
				'Does not apply to exercise fatigue. Recently inflicted injuries have more severity. Including Scratches, Lacerations, Lodged Bullets, Deep wounds (with/without glass), Bites, and Fractures. (Check Health for more details.)'
		},
		'Slow Learner': {
			id: 'Slow Learner',
			exclusive: ['Fast Learner'],
			points: 6,
			desc: 'Decreased XP gains.',
			effectDesc: '70% XP in all skills except Strength and Fitness.'
		},
		'Slow Reader': {
			id: 'Slow Reader',
			exclusive: ['Fast Reader'],
			points: 2,
			desc: 'Takes longer to read books.',
			effectDesc: '70% reading speed.'
		},
		'Sunday driver': {
			id: 'Sunday driver',
			exclusive: ['Speed Demon'],
			points: 1,
			desc: 'The very slow driver.',
			effectDesc: 'Accelerates vehicles 40% slower. Has a max speed of 30 km/h.'
		},
		'Thin-skinned': {
			id: 'Thin-skinned',
			exclusive: ['Thick Skinned'],
			points: 8,
			desc: 'Increased chance of scratches, lacerations, or bites breaking the skin.',
			effectDesc:
				"Multiplies the chance of not being injured by a zombie attack by 0.7 (base 15% chance, modified by character's weapon skill). Additionally, alters the chance of clothes being damaged by walking through trees to 1 in 3."
		},
		Underweight: {
			id: 'Underweight',
			exclusive: ['Obese', 'Overweight', 'Very Underweight'],
			points: 6,
			desc: 'Low strength, low endurance and prone to injury.',
			effectDesc:
				'-1 Fitness. Starting weight is 70 and is only present between weights 65 and 75. 80%x melee damage. +10% chance to trip by while run/sprint vaulting a low fence or from lunging zombies. 85%x chance to fail a tall fence climb.',
			skills: { Fitness: -1 }
		},
		Unfit: {
			id: 'Unfit',
			exclusive: ['Athletic', 'Fit', 'Out of Shape'],
			points: 10,
			desc: 'Very low endurance, very low endurance regeneration.',
			effectDesc: '-4 Fitness',
			skills: { Fitness: -4 }
		},
		Unlucky: {
			id: 'Unlucky',
			exclusive: ['Lucky'],
			points: 4,
			desc: 'What could go wrong for you, often does.',
			effectDesc:
				'-10% chance of finding rare loot. +5% chance of failing item repairs. Affects search mode. Not available in multiplayer.'
		},
		'Very Underweight': {
			id: 'Very Underweight',
			exclusive: ['Athletic', 'Obese', 'Overweight', 'Underweight'],
			points: 10,
			desc: 'Very low strength, very low endurance and prone to injury.',
			effectDesc:
				'-2 Fitness. Starting weight is 60 and is only present between weights 50 and 65. 60%x melee damage. +20% chance to trip by while run/sprint vaulting a low fence or from lunging zombies. 75%x chance to fail a tall fence climb. 10 more fall damage.',
			skills: { Fitness: -2 }
		},
		Weak: {
			id: 'Weak',
			exclusive: ['Feeble', 'Strong', 'Stout'],
			points: 10,
			desc: 'Less knockback from melee weapons. Decreased carrying weight.',
			effectDesc: '-5 Strength, 60% melee damage.',
			skills: { Strength: -5 }
		},
		'Weak Stomach': {
			id: 'Weak Stomach',
			exclusive: ['Iron Gut'],
			points: 3,
			desc: 'Higher chance to have food illness.',
			effectDesc: '200% chance of food illness. Food illness lasts shorter. Check Health for more details.'
		}
	}
};

//these are free and not removable
export const OCCUPATION_TRAITS = {
	'Amateur Mechanic': {
		id: 'Amateur Mechanic',
		desc: 'Familiar with the maintenance and repair of all vehicle models on the roads of Kentucky',
		effectDesc: '+3 Mechanics, can repair all vehicle types without having to read any recipe magazines.'
	},
	Cook: {
		id: 'Cook',
		desc: 'Knows how to cook',
		effectDesc:
			'Affects search mode and knows all the cooking recipes without having to read any recipe magazines.'
	},
	Nutritionist: {
		id: 'Nutritionist',
		desc: 'Can see the nutritional values of any food.',
		effectDesc:
			"Allows the player to see the nutritional values of any food, even those that aren't packaged. Affects search mode."
	},
	Desensitized: {
		id: 'Desensitized',
		desc: 'War... War never changes.',
		effectDesc: '0% panic from all sources except night terrors.'
	},
	Burglar: {
		id: 'Burglar',
		desc: 'Can hotwire vehicles, less chance of breaking the lock of a window.',
		effectDesc: 'Can hotwire vehicles and has less chance of breaking the lock of a window when forced open.'
	},
	'Night Owl': {
		id: 'Night Owl',
		desc: 'Requires little sleep. Stays extra alert when sleeping',
		effectDesc:
			'Recovers from tiredness quicker while sleeping, but will remain asleep even when your character reaches 0 tiredness, which requires an alarm to take advantage of the trait.'
	},
	'Axe Man': {
		id: 'Axe Man',
		desc: 'Better at chopping trees. Faster axe swing.',
		effectDesc: 'Swing axes 25% faster (combat and tree cutting).'
	}
};

/**
 * https://pzwiki.net/wiki/Occupation
 *
 * Occupation Name: {
 *  skills: free skill bonuses,
 *  traits: starting traits
 *  startingPoints: Starting points to spend,
 *  desc: Description
 * }
 */
export const OCCUPATIONS = {
	Unemployed: {
		id: 'Unemployed',
		skills: [],
		startingPoints: 8,
		traits: [],
		desc: '8 free trait points.'
	},
	'Fire Officer': {
		id: 'Fire Officer',
		skills: { Axe: 1, Fitness: 1, Sprinting: 1, Strength: 1 },
		startingPoints: 0,
		traits: [],
		desc: 'Fire Officers can carry more and run faster for longer periods of time.'
	},
	'Police Officer': {
		id: 'Police Officer',
		skills: { Aiming: 3, Nimble: 1, Reloading: 2 },
		startingPoints: -4,
		traits: [],
		desc: "Police Officers are very effective with firearms, as such this profession is great if you want to face the hordes of the undead Guns Blazin'"
	},
	'Park Ranger': {
		id: 'Park Ranger',
		skills: { Axe: 1, Carpentry: 1, Foraging: 2, Trapping: 2 },
		startingPoints: -4,
		traits: [],
		desc: `
Park Rangers, thanks to their skill boost are great for players who are looking to survive away from any town, deep in the wilderness. Park Rangers can move at 75% speed while walking through forests. They also have a bonus to search mode, allowing them to find items easily while in search mode.

In-game description: Allows much faster movement through forests and woodland.`
	},
	'Construction Worker': {
		id: 'Construction Worker',
		skills: { Carpentry: 1, 'Short Blunt': 3 },
		startingPoints: -2,
		traits: [],
		desc: 'While Construction Worker is no longer the best choice for those who want to build their own base, this profession definitely is the one to go with if you like fighting zombies with Blunt weapons.'
	},
	'Security Guard': {
		id: 'Security Guard',
		skills: { Lightfooted: 1, Sprinting: 2 },
		startingPoints: -2,
		traits: [OCCUPATION_TRAITS['Night Owl']],
		desc: 'Security Guard is a good choice for those who enjoy moving from place to place without clearing the entire area. Characters with this profession need less sleep (recover from tiredness quicker) and stay more alert when they do. They can also evacuate much faster should things go south.'
	},
	Carpenter: {
		id: 'Carpenter',
		skills: { Carpentry: 3, 'Short Blunt': 1 },
		startingPoints: 2,
		traits: [],
		desc: 'This occupation is great for those who are looking to build their own base. And nothing else.'
	},
	Burglar: {
		id: 'Burglar',
		skills: { Lightfooted: 2, Nimble: 2, Sneaking: 2 },
		startingPoints: -6,
		traits: [OCCUPATION_TRAITS.Burglar],
		desc: 'This occupation is great for those who are looking to build their own base. And nothing else.'
	},
	Chef: {
		id: 'Chef',
		skills: { Cooking: 3, Maintenance: 1, 'Short Blade': 1 },
		startingPoints: -4,
		traits: [OCCUPATION_TRAITS.Cook],
		desc: 'This occupation is great for those who are looking to build their own base. And nothing else.'
	},
	Repairman: {
		id: 'Repairman',
		skills: { Carpentry: 1, 'Short Blunt': 1, Maintenance: 2 },
		startingPoints: -4,
		traits: [],
		desc: 'Repairman is a profession for those who want to use their tools for a little longer without them breaking and even then be able to repair them easily if they have the right kind of glue or some duct tape.'
	},
	Farmer: {
		id: 'Farmer',
		skills: { Farming: 3 },
		startingPoints: 2,
		traits: [],
		desc: "Profession of choice for those who don't want to starve once the last can of tuna and pack of crisps are nothing but a memory."
	},
	Fisherman: {
		id: 'Fisherman',
		skills: { Fishing: 3, Foraging: 1 },
		startingPoints: -2,
		traits: [],
		desc: 'Good starting profession for those who choose to survive in the wilderness with a massive bonus to fishing and a slight bonus to foraging. They also have a bonus to search mode, allowing them to find items easily while in search mode.'
	},
	Doctor: {
		id: 'Doctor',
		skills: { 'First Aid': 3, 'Short Blade': 1 },
		startingPoints: 2,
		traits: [],
		desc: 'Doctors are much better at treating injuries than other people but are not too useful in a world where a single scratch from a zombie can mean death.'
	},
	Veteran: {
		id: 'Veteran',
		skills: { Aiming: 2, Reloading: 2 },
		startingPoints: -8,
		traits: [OCCUPATION_TRAITS.Desensitized],
		desc: 'Veterans never panic, no matter how bad it is they can stand their ground and deal out headshots to any zombies that made the mistake of trying to scare them.'
	},
	Nurse: {
		id: 'Nurse',
		skills: { 'First Aid': 2, Lightfooted: 1 },
		startingPoints: 2,
		traits: [],
		desc: "Nurses treat wounds better than others except for Doctors. They also have a slight bonus to Lightfooted, allowing them to move a bit quieter, but that's about it."
	},
	Lumberjack: {
		id: 'Lumberjack',
		skills: { Axe: 2, Strength: 1 },
		startingPoints: 0,
		traits: [OCCUPATION_TRAITS['Axe Man']],
		desc: `
Lumberjacks are very effective with an axe. No matter if they're hacking away at a tree or a zombie. Lumberjacks swings their axe 25% faster (chopping trees and combat), they deal 50% bonus damage to trees and move at ~59% speed while walking through forests. They also have a bonus to search mode, allowing them to find items easily while in search mode.

In-game description: "Allows slightly faster movement through forests and woodland."`
	},
	'Fitness Instructor': {
		id: 'Fitness Instructor',
		skills: { Fitness: 3, Sprinting: 2 },
		startingPoints: -6,
		traits: [OCCUPATION_TRAITS.Nutritionist],
		desc: "Fitness Instructors are very effective at running and have a high starting regularity for all exercises which means zombies and exercise fatigue usually aren't going to be a big problem for them."
	},
	'Burger Flipper': {
		id: 'Burger Flipper',
		skills: { Cooking: 2, Maintenance: 1, Maintenance: 1 },
		startingPoints: 2,
		traits: [OCCUPATION_TRAITS.Cook],
		desc: 'Good for those who want to eat well and play with sharp objects.'
	},
	Electrician: {
		id: 'Electrician',
		skills: { Electrical: 3 },
		startingPoints: -4,
		traits: [],
		desc: 'This profession will allow the player to use generators and maintain them by default.\n\nIn-game description: "Can operate generators."'
	},
	Engineer: {
		id: 'Engineer',
		skills: { Carpentry: 1, Electrical: 1 },
		startingPoints: -4,
		traits: [],
		desc: 'The Engineer is able to craft different kinds of traps and powerful explosives, even some that cannot be learnt through recipe magazines.\n\nIn-game description: "Can make traps and explosives."'
	},
	Metalworker: {
		id: 'Metalworker',
		skills: { Metalworking: 3 },
		startingPoints: -6,
		traits: [],
		desc: 'The Metalworker is able to craft metal structures and furniture.\n\nIn-game description: "Can weld foraged metal to create items and barricades."'
	},
	Mechanic: {
		id: 'Mechanic',
		skills: { Mechanics: 3, 'Short Blunt': 1 },
		startingPoints: -4,
		traits: [OCCUPATION_TRAITS['Amateur Mechanic']],
		desc: 'Mechanics know how to fix all sorts of cars, if they have the right tools. They are also good with short blunt weapons.\n\nIn-game description: "Familiar with the maintenance and repair of all vehicle models on the roads of Kentucky."'
	}
};
