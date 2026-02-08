
export function ContainsAdjective(str: string): boolean {
    return ADJECTIVES.some(adjective => str.includes(adjective));
}

export function AddOrReplaceAdjective(str: string): string {
    for (const adjective of ADJECTIVES) {
        if (str.includes(adjective)) {
            // Replace the existing adjective with a new one
            const newAdjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
            return str.replace(adjective, newAdjective);
        }
    }

    // If no adjective is found, add one
    return PrependRandomAdjective(str);
}

export function PrependRandomAdjective(name: string): string {
    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * ADJECTIVES.length);

    // Prepend the random adjective to the given name
    const randomAdjective = ADJECTIVES[randomIndex];
    const modifiedName = `${randomAdjective} ${name}`;

    return modifiedName;
}

export const ADJECTIVES: string[] = [
    "Grizzled",
    "Wily",
    "Stoic",
    "Mellow",
    "Pensive",
    "Shrewd",
    "Cautious",
    "Hardy",
    "Nimble",
    "Tenacious",
    "Gritty",
    "Tolerant",
    "Hardy",
    "Adroit",
    "Resilient",
    "Slight",
    "Stout",
    "Durable",
    "Subtle",
    "Sober",
    "Clever",
    "Brave",
    "Calm",
    "Wise",
    "Cunning",
    "Alert",
    "Swift",
    "Agile",
    "Loyal",
    "Sturdy",
    "Stable",
    "Sneaky",
    "Clever",
    "Resourceful",
    "Shady",
    "Stalwart",
    "Vigilant",
    "Staunch",
    "Fierce",
    "Vigorous",
    "Robust",
    "Fearless",
    "Dauntless",
    "Resolute",
    "Sagacious",
    "Prudent",
    "Judicious",
    "Astute",
    "Savvy",
    "Sharp",
    "Quick",
    "Witty",
    "Smart",
    "Snippy",
    "Crafty",
    "Deft",
    "Sly",
    "Artful",
    "Clever",
    "Sneering",
    "Tough",
    "Rugged",
    "Solid",
    "Strong",
    "Sturdy",
    "Tough",
    "Gritty",
    "Rough",
    "Hardened",
    "Burly",
    "Muscular",
    "Brawny",
    "Rowdy",
    "Forceful",
    "Snorting",
    "Potent",
    "Martial",
    "Speckled",
    "Mottled",
    "Disheveled"
];