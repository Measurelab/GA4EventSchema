---
layout: page
title: "CUSTOM EVENTS"
permalink: /custom-events/
---

/* edit the bit in the URL below after /cells/ to point to a new sheet and then the number after that is the number for the tab to pull in */
<script src="https://spreadsheets.google.com/feeds/cells/1ekAwEi_jgztQRYzkZ8y5mCPlt0e139fHvQxdpdQfSZU/2/public/values?alt=json-in-script&callback=doData"></script>

<div id="data"/>



<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script type="text/javascript">
  var spData = null;
  function doData(json) {
      spData = json.feed.entry;
  }
  
  function drawCell(tr, val) {
      var td = $("<td/>");
      tr.append(td);
      td.append(val);
      return td;
  }
  function drawRow(table, rowData) {
	  if (rowData == null) return null;
	  if (rowData.length == 0) return null;
	  var tr = $("<tr/>");
	  table.append(tr);
	  for(var c=0; c<rowData.length; c++) {
		  drawCell(tr, rowData[c]);
	  }
	  return tr;
  }
  
  function drawTable(parent) {
	  var table = $("<table/>");
	  parent.append(table);
	  return table;
  }
  
  function readData(parent) {
      var data = spData;
      var table = drawTable(parent);
      var rowData = [];
      
      for(var r=0; r<data.length; r++) {
          var cell = data[r]["gs$cell"];
          var val = cell["$t"];
          if (cell.col == 1) {
              drawRow(table, rowData);
              rowData = [];
          }
          rowData.push(val);
      }
      drawRow(table, rowData);
  }
  $(document).ready(function(){
      readData($("#data"));
  });
</script> 
