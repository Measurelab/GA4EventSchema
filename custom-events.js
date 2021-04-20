import GSheetReader from "g-sheets-api";

GSheetReader(
  {
    sheetId: "1_IpENDkoujmWr-B0M2ZVcyvgPQGeKwYxfHX_JYTDtRc",
    sheetNumber: 1,
    returnAllResults: false,
    filter: {
      department: "archaeology"
    }
  },
  (results) => {
    results.forEach((result) => {
      document.getElementById(
        "app"
      ).innerHTML += `<p>${result["Module Description"]}</p>`;
    });
  },
  (error) => {
    document.getElementById("app").innerHTML += `<p>error: ${error}</p>`;
  }
);
