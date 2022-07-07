
const collectionInfo = {
    name: "Sluggish Koalas",
    title: "{name}",
    date: "07.07.2022",
    socialMedia: {
        discord: "https://discord.com/",
        twitter: "https://twitter.com/",
    },
    medias: {
        preview: "nft.jpg",
        favicon: "logo.jpg",
    },
    background: {
        type: "image",
        image: "bj.jpg",
        video: "",
        color: "#4E4E6D",
    }
}
const mintInfo = {
    price: 1.75,
    totalSupply: 2222,
    toFixed: 2,
    minUnits: 1,
    maxUnits: 5,
    askMintLoop: true,
}

const nftsInfo = {
    active: true,
    minValue: 0.3,
    maxTransfer: 4,
}

if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);