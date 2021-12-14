// Make all links open in a new window
$("a").attr("target", "_blank");

// Auto-generate placeholder photos
if (document.getElementById("fileUpload").files.length == 0) {
  $("#cover-img").attr("src", "//picsum.photos/1000/1000");
  $("#cover").click(function() {
    var d = new Date();
    $("#cover-img")
      .removeAttr("src")
      .attr("src", "//picsum.photos/600/600?" + d.getTime());
  });
}

// Load the file from input
var loadFile = function(event) {
  var output = document.getElementById("cover-img");
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src);
  };
};

// Auto-resize textarea
function auto_grow(element) {
  element.style.height = "0px";
  element.style.height = element.scrollHeight - 3.5 + "px";
}

// Put text on image
$("#text").keyup(function() {
  var currentText = $(this).val();
  $("#cover-text").text(currentText);
});

// Change text position
$("#position").change(function() {
  if ($("#position").val() == "top-left") {
    $("#cover-text")
      .removeClass()
      .addClass("top-left");
    $("#cover-logo")
      .removeClass()
      .addClass("top-left");
  }
  if ($("#position").val() == "top-right") {
    $("#cover-text")
      .removeClass()
      .addClass("top-right");
    $("#cover-logo")
      .removeClass()
      .addClass("default");
  }
  if ($("#position").val() == "bottom-left") {
    $("#cover-text")
      .removeClass()
      .addClass("bottom-left");
    $("#cover-logo")
      .removeClass()
      .addClass("default");
  }
  if ($("#position").val() == "bottom-right") {
    $("#cover-text")
      .removeClass()
      .addClass("bottom-right");
    $("#cover-logo")
      .removeClass()
      .addClass("default");
  }
  if ($("#position").val() == "center") {
    $("#cover-text")
      .removeClass()
      .addClass("center");
    $("#cover-logo")
      .removeClass()
      .addClass("default");
  }
});

// Change text color
$("#textColor").change(function() {
  if ($("#textColor").val() == "auto") {
    $("#cover-text")
      .removeClass("auto black white")
      .addClass("auto");
  }
  if ($("#textColor").val() == "black") {
    $("#cover-text")
      .removeClass("auto black white")
      .addClass("black");
  }
  if ($("#textColor").val() == "white") {
    $("#cover-text")
      .removeClass("auto black white")
      .addClass("white");
  }
});

// Change logo color
$("#logoColor").change(function() {
  if ($("#logoColor").val() == "auto") {
    $("#cover-logo")
      .removeClass("auto black white")
      .addClass("auto");
  }
  if ($("#logoColor").val() == "black") {
    $("#cover-logo")
      .removeClass("auto black white")
      .addClass("black");
  }
  if ($("#logoColor").val() == "white") {
    $("#cover-logo")
      .removeClass("auto black white")
      .addClass("white");
  }
});

// Change cover div to image
$("#download").click(function() {
  html2canvas(document.querySelector("#cover")).then(canvas => {
    $("#previewImage").append(canvas);
  });
});
