const axios = require("axios");
const fs = require("fs");

const collectionId = "collection-id-here";

const url =
  "https://api.steampowered.com/ISteamRemoteStorage/GetCollectionDetails/v1/";

async function fetchCollection() {
  try {
    const res = await axios.post(
      url,
      new URLSearchParams({
        collectioncount: 1,
        "publishedfileids[0]": collectionId,
      })
    );

    const items = res.data.response.collectiondetails[0].children;

    const lines = items.map(
      (item) => `resource.AddWorkshop(${item.publishedfileid})`
    );

    fs.writeFileSync("addons.txt", lines.join("\n"), "utf8");

    console.log(`Ready! ${items.length} Addons saved in addons.txt.`);
  } catch (err) {
    console.error("Download error:", err.message);
  }
}

fetchCollection();
