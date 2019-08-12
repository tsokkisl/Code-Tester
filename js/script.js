// Create the 3 editors for the HTML,CSS and Javascript panels with CodeMirror
var htmlEditor = CodeMirror(document.getElementById("htmlPanel"), {
  mode: "htmlmixed",
  theme: 'monokai',
  lineWrapping: false,
  autoRefresh:true,
  lineNumbers: true
});
var cssEditor = CodeMirror(document.getElementById("cssPanel"), {
  mode: "css",
  theme: 'monokai',
  lineWrapping: false,
  autoRefresh:true,
  lineNumbers: true,
});
var jsEditor = CodeMirror(document.getElementById("jsPanel"), {
  mode: "javascript",
  theme: 'monokai',
  lineWrapping: false,
  autoRefresh:true,
  lineNumbers: true
});

// executes code and outputs the result on the output-panel
function executeCode() {
  $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + cssEditor.getValue() + "</style></head><body>" + htmlEditor.getValue() + "</body></html>");
  document.getElementById("outputTabContent").contentWindow.eval(jsEditor.getValue());
};

// run executeCode() on button click
$("#executeButton").click(function() {
  executeCode();
});
