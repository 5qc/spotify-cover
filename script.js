window.addEventListener("load", function() {
    const loader = document.querySelector(".loader")
    loader.className += " fade-out2"
})

// Make all links open in a new window
$("a").attr("target", "_blank")

// Auto-generate placeholder photos
if (document.getElementById("image").val == undefined) {
    $("#cover-img").attr("src", "//picsum.photos/id/420/1000/1000")
}

$("#image").keyup(function() {
    var imageURL = $(this).val()
    $("#cover-img").removeAttr("src").attr("src", imageURL)
})

function imgError(image) {
    $("#cover-img").attr("src", "//picsum.photos/id/420/1000/1000")
    $("#cover").click(function() {
      var d = new Date()
      $("#cover-img")
        .removeAttr("src")
        .attr("src", "//picsum.photos/id/420/1000/1000")
    })
    return true
}
function blankImgError(image) {
    $(image).attr("src", "//upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png")
    return true
}

// Auto-resize textarea
function auto_grow(element) {
    element.style.height = "0px"
    element.style.height = element.scrollHeight - 3.5 + "px"
}

// Put text on image
$("#text").keyup(function() {
    var currentText = $(this).val().replace(/\n/g, "<br />")
    $("#cover-text").html(currentText)
})

// Types
var defaultStuff = "#cover, .default-item"
var topNoStuff = "#topno-cover, .top-item"
var thisIsStuff = "#thisis-cover, .thisis-item"
var thisIs2Stuff = "#thisis2-cover, .thisis2-item"
$(topNoStuff).addClass("hide")
$(thisIsStuff).addClass("hide")
$(thisIs2Stuff).addClass("hide")

$("#type").change(function() {
    if ($("#type").val() == "default") {
        $(defaultStuff).removeClass("hide")
        $(topNoStuff).addClass("hide")
        $(thisIsStuff).addClass("hide")
        $(thisIs2Stuff).addClass("hide")
    }
    if ($("#type").val() == "top-no") {
        $(topNoStuff).removeClass("hide")
        $(defaultStuff).addClass("hide")
        $(thisIsStuff).addClass("hide")
        $(thisIs2Stuff).addClass("hide")
    }
    if ($("#type").val() == "this-is") {
        $(thisIsStuff).removeClass("hide")
        $(defaultStuff).addClass("hide")
        $(topNoStuff).addClass("hide")
        $(thisIs2Stuff).addClass("hide")
    }
    if ($("#type").val() == "this-is2") {
        $(thisIs2Stuff).removeClass("hide")
        $(defaultStuff).addClass("hide")
        $(topNoStuff).addClass("hide")
        $(thisIsStuff).addClass("hide")
    }
})

// Top # Cover Stuff
$("#top").keyup(function() {
    var topText = $(this).val()
    if ($("#top").val() != "") {
        $("#topno-cover-text-top").html("Top " + topText)
    } else {
        $("#topno-cover-text-top").html("")
    }
})

$("#location").keyup(function() {
    var locationText = $(this).val()
    $("#topno-cover-text-location").html(locationText)
})

$("#gradient1, #gradient2").keyup(function() {
    var gradient1 = $("#gradient1").val()
    var gradient2 = $("#gradient2").val()
    $("#topno-cover-bg").css("background", "linear-gradient(to bottom, " + gradient1 + ", " + gradient2 + ")")
})

var topNoColors = "black, white"
$("#topColor").change(function() {
    if ($("#topColor").val() == "black") {
        $("#topno-cover-text-top")
        .removeClass(topNoColors)
        .addClass("black")
    }
    if ($("#topColor").val() == "white") {
        $("#topno-cover-text-top")
        .removeClass(topNoColors)
        .addClass("white")
    }
    })
    $("#locationColor").change(function() {
    if ($("#locationColor").val() == "black") {
        $("#topno-cover-text-location")
        .removeClass(topNoColors)
        .addClass("black")
    }
    if ($("#locationColor").val() == "white") {
        $("#topno-cover-text-location")
        .removeClass(topNoColors)
        .addClass("white")
    }
})
$("#barColor").change(function() {
    if ($("#barColor").val() == "black") {
        $("#topno-cover-bar")
        .removeClass(topNoColors)
        .addClass("black")
    }
    if ($("#barColor").val() == "white") {
        $("#topno-cover-bar")
        .removeClass(topNoColors)
        .addClass("white")
    }
})

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false
    return true
}

// This Is Cover Stuff
$("#thisis-artist").keyup(function() {
    var artistText = $(this).val()
    if (artistText != "") {
        $("#thisis-cover-text-thisis").html("THIS IS")
        $("#thisis-cover-text-artist").html(artistText)
    } else {
        $("#thisis-cover-text-thisis").html("")
        $("#thisis-cover-text-artist").html("")
    }
})

$("#thisis-image").keyup(function() {
    var imageURL = $(this).val()
    $("#thisis-cover-img").removeAttr("src").attr("src", imageURL)
})

$("#thisis-gradient1, #thisis-gradient2").keyup(function() {
    var gradient1 = $("#thisis-gradient1").val()
    var gradient2 = $("#thisis-gradient2").val()
    $("#thisis-cover-bg-gradient").css("background", "linear-gradient(to bottom, " + gradient1 + ", " + gradient2 + ")")
})

// This Is #2 Cover Stuff
$("#thisis2-artist").keyup(function() {
    var artistText = $(this).val()
    if (artistText !== "") {
        $("#thisis2-cover-text-thisis").html("T H I S&nbsp&nbsp&nbspI S :")
        $("#thisis2-cover-text-artist").html(artistText)
    } else {
        $("#thisis2-cover-text-thisis").html("")
        $("#thisis2-cover-text-artist").html("")
    }
})

$("#thisis2-artist-color").change(function() {
    var thisis2Color = "black white"
    if (this.value === "white") {
        $("#thisis2-cover-text-artist")
            .removeClass(thisis2Color)
            .addClass("white")
    } else if (this.value === "black") {
        $("#thisis2-cover-text-artist")
            .removeClass(thisis2Color)
            .addClass("black")
    }
})

$("#thisis2-thisis-color").change(function() {
    var thisis2Color = "black white"
    if (this.value === "white") {
        $("#thisis2-cover-text-thisis")
            .removeClass(thisis2Color)
            .addClass("white")
    } else if (this.value === "black") {
        $("#thisis2-cover-text-thisis")
            .removeClass(thisis2Color)
            .addClass("black")
    }
})

$("#thisis2-text-position").change(function() {
    if (this.value === "normal") {
        $("#thisis2-cover-text")
            .removeClass("regular centered")
            .addClass("regular")
    } else if (this.value === "centered") {
        $("#thisis2-cover-text")
            .removeClass("regular centered")
            .addClass("centered")
    }
})

$("#thisis2-background").change(function() {
    if (this.value === "black") {
        $("#thisis2-cover").css("background", "black")
    } else if (this.value === "white") {
        $("#thisis2-cover").css("background", "white")
    }
})

$("#thisis2-logo-color").change(function() {
    var logoColors = "black white"
    if (this.value === "black") {
        $("#thisis2-cover-logo")
            .removeClass(logoColors)
            .addClass("black")
    } else if (this.value === "white") {
        $("#thisis2-cover-logo")
            .removeClass(logoColors)
            .addClass("white")
    }
})

$("#thisis2-logo-transparent").change(function() {
    if (this.value === "yes") {
        $("#thisis2-cover-logo")
            .removeClass("transparent")
            .addClass("transparent")
    } else if (this.value === "no") {
        $("#thisis2-cover-logo")
            .removeClass("transparent")
    }
})
$("#thisis2-image").keyup(function() {
    var imageURL = $(this).val()
    $("#thisis2-cover-img").removeAttr("src").attr("src", imageURL)
})

$("#thisis2-background").keyup(function() {
    $("#thisis2-cover").css("background", this.value)
})

// Change text position
$("#position").change(function() {
    if ($("#position").val() == "top-left") {
        $("#cover-text")
        .removeClass("top-left top-right bottom-left bottom-right center")
        .addClass("top-left")
        $("#cover-logo")
        .removeClass("default")
        .addClass("top-left")
    }
    if ($("#position").val() == "top-right") {
        $("#cover-text")
        .removeClass("top-left top-right bottom-left bottom-right center")
        .addClass("top-right")
        $("#cover-logo")
        .removeClass("top-left")
        .addClass("default")
    }
    if ($("#position").val() == "bottom-left") {
        $("#cover-text")
        .removeClass("top-left top-right bottom-left bottom-right center")
        .addClass("bottom-left")
        $("#cover-logo")
        .removeClass("top-left")
        .addClass("default")
    }
    if ($("#position").val() == "bottom-right") {
        $("#cover-text")
        .removeClass("top-left top-right bottom-left bottom-right center")
        .addClass("bottom-right")
        $("#cover-logo")
        .removeClass("top-left")
        .addClass("default")
    }
    if ($("#position").val() == "center") {
        $("#cover-text")
        .removeClass("top-left top-right bottom-left bottom-right center")
        .addClass("center")
        $("#cover-logo")
        .removeClass("top-left")
        .addClass("default")
    }
})

// Change text color
var colors = "black white green orange red yellow"
var logoColors = colors + " none"

$("#textColor").change(function() {
    if ($("#textColor").val() == "black") {
        $("#cover-text")
        .removeClass(colors)
        .addClass("black")
    }
    if ($("#textColor").val() == "white") {
        $("#cover-text")
        .removeClass(colors)
        .addClass("white")
    }
    if ($("#textColor").val() == "green") {
        $("#cover-text")
        .removeClass(colors)
        .addClass("green")
    }
    if ($("#textColor").val() == "orange") {
        $("#cover-text")
        .removeClass(colors)
        .addClass("orange")
    }
    if ($("#textColor").val() == "red") {
        $("#cover-text")
        .removeClass(colors)
        .addClass("red")
    }
    if ($("#textColor").val() == "yellow") {
        $("#cover-text")
        .removeClass(colors)
        .addClass("yellow")
    }
})

// Change Text Sizes
var sizes = "extra-small small large extra-large"

$("#textSize").change(function() {
    if ($("#textSize").val() == "extra-small") {
        $("#cover-text").removeClass(sizes).addClass("extra-small")
    }
    if ($("#textSize").val() == "small") {
        $("#cover-text").removeClass(sizes).addClass("small")
    }
    if ($("#textSize").val() == "medium") {
        $("#cover-text").removeClass(sizes)
    }
    if ($("#textSize").val() == "large") {
        $("#cover-text").removeClass(sizes).addClass("large")
    }
    if ($("#textSize").val() == "extra-large") {
        $("#cover-text").removeClass(sizes).addClass("extra-large")
    }
})

// Change logo color
$("#logoColor").change(function() {
    if ($("#logoColor").val() == "black") {
        $("#cover-logo")
        .removeClass(logoColors)
        .addClass("black")
    }
    if ($("#logoColor").val() == "white") {
        $("#cover-logo")
        .removeClass(logoColors)
        .addClass("white")
    }
    if ($("#logoColor").val() == "green") {
        $("#cover-logo")
        .removeClass(logoColors)
        .addClass("green")
    }
    if ($("#logoColor").val() == "orange") {
        $("#cover-logo")
        .removeClass(logoColors)
        .addClass("orange")
    }
    if ($("#logoColor").val() == "red") {
        $("#cover-logo")
        .removeClass(logoColors)
        .addClass("red")
    }
    if ($("#logoColor").val() == "yellow") {
        $("#cover-logo")
        .removeClass(logoColors)
        .addClass("yellow")
    }
    if ($("#logoColor").val() == "none") {
        $("#cover-logo")
        .removeClass(logoColors)
        .addClass("none")
    }
})

// Change logo transparency
$("#transparent").change(function() {
    if ($("#transparent").val() == "yes") {
        $("#cover-logo")
        .removeClass("transparent")
        .addClass("transparent")
    }
    if ($("#transparent").val() == "no") {
        $("#cover-logo")
        .removeClass("transparent")
    }
})

// Convert blob image to data
function blob2canvas(canvas, blob) {
    var img = new Image()
    var ctx = canvas.getContext("2d")
    img.onload = function() {
        ctx.drawImage(img, 0, 0)
    }
    img.src = blob
}

// Change cover div to image
var coverName = "cover"
var coverExt = "jpg"

$("#download").click(function() {
    html2canvas(document.querySelector("#cover"), {
        useCORS: true,
        onrendered: function(canvas) {
            var context = canvas.getContext("2d")
            var img = new Image()
            img.src = document.getElementById("cover-img").src
            img.onload = context.drawImage(img, 0, 0, 600, 600)
        }
    }).then(canvas => {
        const a = document.createElement("a")
        a.href = canvas.toDataURL()
        a.setAttribute("download", `${coverName}.${coverExt}`)
        a.click()
    })
})
$("#coverno-download").click(function() {
    html2canvas(document.querySelector("#topno-cover"), {
        onrendered: function(canvas) {
            var context = canvas.getContext("2d")
        }
    }).then(canvas => {
        const a = document.createElement("a")
        a.href = canvas.toDataURL()
        a.setAttribute("download", `${coverName}.${coverExt}`)
        a.click()
    })
})
$("#thisis-download").click(function() {
    html2canvas(document.querySelector("#thisis-cover"), {
        useCORS: true,
        onrendered: function(canvas) {
            var context = canvas.getContext("2d")
            var img = new Image()
            img.src = document.getElementById("thisis-cover-img").src
            img.onload = context.drawImage(img, 0, 0, 600, 600)
        }
    }).then(canvas => {
        const a = document.createElement("a")
        a.href = canvas.toDataURL()
        a.setAttribute("download", `${coverName}.${coverExt}`)
        a.click()
    })
})
$("#thisis2-download").click(function() {
    html2canvas(document.querySelector("#thisis2-cover"), {
        useCORS: true,
        onrendered: function(canvas) {
            var context = canvas.getContext("2d")
            var img = new Image()
            img.src = document.getElementById("thisis2-cover-img").src
            img.onload = context.drawImage(img, 0, 0, 600, 600)
        }
    }).then(canvas => {
        const a = document.createElement("a")
        a.href = canvas.toDataURL()
        a.setAttribute("download", `${coverName}.${coverExt}`)
        a.click()
    })
})
