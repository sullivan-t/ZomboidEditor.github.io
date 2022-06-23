import { OCCUPATIONS } from './constants.js';

export class Character {
	//occupation determines starting points
	constructor() {
		this.occupation = OCCUPATIONS.Unemployed;
		this.hobbies = [];
		this.customTraits = [];
	}

	getTotalPointCost() {
		return this.hobbies.concat(this.customTraits).reduce((runningCost, currTrait, i, arr) => {
			return runningCost + currTrait.points;
		}, this.occupation.startingPoints);
	}

	calculateSkills() {
		// loop through occupation, traits, and hobbies and calc skills
		let skillMap = {};
		const sumSkill = ([skill, value]) => {
			skillMap[skill] = (skillMap[skill] ?? 0) + value;
		};
		Object.entries(this.occupation.skills).forEach(sumSkill);
		this.hobbies.concat(this.customTraits).forEach((traitOrHobby) => {
			Object.entries(traitOrHobby).forEach(sumSkill);
		});
		return skillMap;
	}

	chooseOccupation(newOccupation) {
		//remove mutually exclusive hobbies
		this.hobbies = this.hobbies.filter((hobby) => {
			return !hobby.exclusive?.includes(newOccupation.id);
		});
		this.occupation = newOccupation;
	}

	addTrait(newTrait) {
		//remove mutually exclusive traits
		this.customTraits = this.customTraits.filter((trait) => {
			return !trait.exclusive?.includes(newTrait.id);
		});
		this.customTraits.push(newTrait);
	}

	removeTraitById(traitId) {
		this.customTraits = this.customTraits.filter((trait) => {
			return !trait.exclusive?.includes(traitId);
		});
	}

	addHobby(hobby) {
		//don't add hobby if already given by occupation
		if (!this.hobbies.exclusive.includes(this.occupation.id)) {
			this.customTraits.push(newTrait);
		}
	}

	removeHobbyById(hobbyId) {
		this.hobbies = this.hobbies.filter((hobby) => {
			return hobby.id !== hobbyId;
		});
	}
}
