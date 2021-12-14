// Make all links open in a new window
$("a").attr("target", "_blank");

// Auto-generate placeholder photos
if (document.getElementById("fileUpload").files.length == 0) {
  $("#cover-img").attr("src", "//picsum.photos/id/69/1000/1000");
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
      .removeClass("top-left top-right bottom-left bottom-right center")
      .addClass("top-left");
  }
  if ($("#position").val() == "top-right") {
    $("#cover-text")
      .removeClass("top-left top-right bottom-left bottom-right center")
      .addClass("top-right");
  }
  if ($("#position").val() == "bottom-left") {
    $("#cover-text")
      .removeClass("top-left top-right bottom-left bottom-right center")
      .addClass("bottom-left");
  }
  if ($("#position").val() == "bottom-right") {
    $("#cover-text")
      .removeClass("top-left top-right bottom-left bottom-right center")
      .addClass("bottom-right");
  }
  if ($("#position").val() == "center") {
    $("#cover-text")
      .removeClass("top-left top-right bottom-left bottom-right")
      .addClass("center");
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
      .removeClass("auto black white none transparent")
      .addClass("auto");
  }
  if ($("#logoColor").val() == "black") {
    $("#cover-logo")
      .removeClass("auto black white none transparent")
      .addClass("black");
  }
  if ($("#logoColor").val() == "black-transparent") {
    $("#cover-logo")
      .removeClass("auto black white none transparent")
      .addClass("black transparent")
  }
  if ($("#logoColor").val() == "white") {
    $("#cover-logo")
      .removeClass("auto black white none transparent")
      .addClass("white");
  }
  if ($("#logoColor").val() == "white-transparent") {
    $("#cover-logo")
      .removeClass("auto black white none transparent")
      .addClass("white transparent")
  }
  if ($("#logoColor").val() == "none") {
    $("#cover-logo")
      .removeClass("auto black white none transparent")
      .addClass("none");
  }
});

// Convert blob image to data
function blob2canvas(canvas, blob) {
  var img = new Image();
  var ctx = canvas.getContext("2d");
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
  }
  img.src = blob;
}

// Change cover div to image
$("#download").click(function() {
  html2canvas(document.querySelector("#cover"), {
    useCORS: true,
    onrendered: function(canvas) {
      var context = canvas.getContext("2d");

      if ($("#cover-img").attr("src") !== $('#coverimg[^="blob"]')) {
        var img = new Image();
        img.src = document.getElementById("cover-img").src;
        img.onload = context.drawImage(img, 0, 0, 600, 600);
      } else {
        blob2canvas(canvas, $("#cover-img").attr("src"))
      }
    }
  }).then(canvas => {
    $("#previewImage")
      .empty()
      .append(canvas);
  });
});
