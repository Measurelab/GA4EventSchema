import GSheetProcessor from './gsheetsprocessor.js';

const options = {
  sheetId: "1ekAwEi_jgztQRYzkZ8y5mCPlt0e139fHvQxdpdQfSZU",
  sheetNumber: 1,
  returnAllResults: true
};

GSheetProcessor(
  options,
  results => {
    const table = document.createElement('table');
    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    const tbody = table.createTBody();

    // First, create a header row
    Object.getOwnPropertyNames(results[0]).forEach(colName => {
      const cell = headerRow.insertCell(-1);
      cell.innerHTML = colName;
    });

    // Next, fill the rest of the rows with the lovely data
    results.forEach(result => {
      const row = tbody.insertRow(-1);

      Object.keys(result).forEach(key => {
        const cell = row.insertCell(-1);
        cell.innerHTML = result[key];
      });
    });

    const main = document.querySelector('#output');
    main.innerHTML = '';
    main.append(table);
  },
  error => {
    console.log('error from sheets API', error);
    const main = document.querySelector('#output');
    main.innerHTML = `Error while fetching sheets: ${error}`;
  }
);
