// Functions
const imgError = (image) => {
    image.setAttribute("src", "https://picsum.photos/id/420/1000/1000")
}
const blankImgError = image => {
    image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png")
}
const auto_grow = element => {
    element.style.height = "0px"
    element.style.height = `${element.scrollHeight - 3.5}px`
}
const isNumberKey = (evt) => {
    const charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false
    else return true
}

// Scripts
window.addEventListener("load", function() {
    const loader = document.querySelector(".loader")
    loader.className += " fade-out2"
})

const a = document.querySelectorAll("a")
for (let i = 0; i < a.length; i++) a[i].setAttribute("target", "_blank")

if (document.getElementById("image").value === undefined) document.getElementById("cover-img").setAttribute("src", "https://picsum.photos/id/420/1000/1000")

document.getElementById("image").onkeyup = function() {
    const imageURL = this.value
    document.getElementById("cover-img").removeAttribute("src")
    document.getElementById("cover-img").setAttribute("src", imageURL)
}

// Put text On Image
document.getElementById("text").onkeyup = function() {
    const currentText = this.value.replace(/\n/g, "<br />")
    document.getElementById("cover-text").innerHTML = currentText
}

// Types
const defaultStuff = document.querySelectorAll("#cover, .default-item")
const topNoStuff = document.querySelectorAll("#topno-cover, .top-item")
const thisIsStuff = document.querySelectorAll("#thisis-cover, .thisis-item")
const thisis2Stuff = document.querySelectorAll("#thisis2-cover, .thisis2-item")
const mixStuff = document.querySelectorAll("#mix-cover, .mix-item")
for (let i = 0; i < topNoStuff.length; i++) topNoStuff[i].classList.add("hide")
for (let i = 0; i < thisIsStuff.length; i++) thisIsStuff[i].classList.add("hide")
for (let i = 0; i < thisis2Stuff.length; i++) thisis2Stuff[i].classList.add("hide")
for (let i = 0; i < mixStuff.length; i++) mixStuff[i].classList.add("hide")

document.getElementById("type").onchange = function() {
    if (this.value === "default") {
        for (let i = 0; i < defaultStuff.length; i++) defaultStuff[i].classList.remove("hide")
        for (let i = 0; i < topNoStuff.length; i++) topNoStuff[i].classList.add("hide")
        for (let i = 0; i < thisIsStuff.length; i++) thisIsStuff[i].classList.add("hide")
        for (let i = 0; i < thisis2Stuff.length; i++) thisis2Stuff[i].classList.add("hide")
        for (let i = 0; i < mixStuff.length; i++) mixStuff[i].classList.add("hide")
    } else if (this.value === "top-no") {
        for (let i = 0; i < defaultStuff.length; i++) defaultStuff[i].classList.add("hide")
        for (let i = 0; i < topNoStuff.length; i++) topNoStuff[i].classList.remove("hide")
        for (let i = 0; i < thisIsStuff.length; i++) thisIsStuff[i].classList.add("hide")
        for (let i = 0; i < thisis2Stuff.length; i++) thisis2Stuff[i].classList.add("hide")
        for (let i = 0; i < mixStuff.length; i++) mixStuff[i].classList.add("hide")
    } else if (this.value === "this-is") {
        for (let i = 0; i < defaultStuff.length; i++) defaultStuff[i].classList.add("hide")
        for (let i = 0; i < topNoStuff.length; i++) topNoStuff[i].classList.add("hide")
        for (let i = 0; i < thisIsStuff.length; i++) thisIsStuff[i].classList.remove("hide")
        for (let i = 0; i < thisis2Stuff.length; i++) thisis2Stuff[i].classList.add("hide")
        for (let i = 0; i < mixStuff.length; i++) mixStuff[i].classList.add("hide")
    } else if (this.value === "this-is2") {
        for (let i = 0; i < defaultStuff.length; i++) defaultStuff[i].classList.add("hide")
        for (let i = 0; i < topNoStuff.length; i++) topNoStuff[i].classList.add("hide")
        for (let i = 0; i < thisIsStuff.length; i++) thisIsStuff[i].classList.add("hide")
        for (let i = 0; i < thisis2Stuff.length; i++) thisis2Stuff[i].classList.remove("hide")
        for (let i = 0; i < mixStuff.length; i++) mixStuff[i].classList.add("hide")
    } else if (this.value === "mix") {
        for (let i = 0; i < defaultStuff.length; i++) defaultStuff[i].classList.add("hide")
        for (let i = 0; i < topNoStuff.length; i++) topNoStuff[i].classList.add("hide")
        for (let i = 0; i < thisIsStuff.length; i++) thisIsStuff[i].classList.add("hide")
        for (let i = 0; i < thisis2Stuff.length; i++) thisis2Stuff[i].classList.add("hide")
        for (let i = 0; i < mixStuff.length; i++) mixStuff[i].classList.remove("hide")
    }
}

/** Covers **/
// Top # Cover Stuff
document.getElementById("top").onkeyup = function() {
    const topText = this.value
    if (this.value !== "") document.getElementById("topno-cover-text-top").innerHTML = `Top ${topText}`
    else document.getElementById("topno-cover-text-top").innerHTML = ""
}

document.getElementById("location").onkeyup = function() {
    const locationText = this.value
    document.getElementById("topno-cover-text-location").innerHTML = locationText
}

document.getElementById("gradient1").onkeyup = function() {
    const gradient1 = document.getELementById("gradient1").value
    const gradient2 = document.getElementById("gradient2").value
    document.getElementById("topno-cover-bg").style.background = `linear-gradient(to bottom, ${gradient1}, ${gradient2})`
}
document.getElementById("gradient2").onkeyup = function() {
    const gradient1 = document.getELementById("gradient1").value
    const gradient2 = document.getElementById("gradient2").value
    document.getElementById("topno-cover-bg").style.background = `linear-gradient(to bottom, ${gradient1}, ${gradient2})`
}

const topNoColors = ["black", "white"]
document.getElementById("topColor").onchange = function() {
    const el = document.getElementById("topno-cover-text-top")
    if (this.value === "black") {
        el.classList.remove(...topNoColors)
        el.classList.add("black")
    } else if (this.value === "white") {
        el.classList.remove(...topNoColors)
        el.classList.add("white")
    }
}
document.getElementById("locationColor").onchange = function() {
    const el = document.getElementById("topno-cover-text-location")
    if (this.value === "black") {
        el.classList.remove(...topNoColors)
        el.classList.add("black")
    } else if (this.value === "white") {
        el.classList.remove(...topNoColors)
        el.classList.add("white")
    }
}
document.getElementById("barColor").onchange = function() {
    const el = document.getElementById("topno-cover-bar")
    if (this.value === "black") {
        el.classList.remove(...topNoCOlors)
        el.classList.add("black")
    } else if (this.value === "white") {
        el.classList.remove(...topNoColors)
        el.classList.add("white")
    }
}

// This Is Cover Stuff
document.getElementById("thisis-thisistext").value = "This Is"

document.getElementById("thisis-artist").onkeyup = function() {
    const artistText = this.value
    if (artistText !== "") {
        document.getElementById("thisis-cover-text-thisis").innerHTML = document.getElementById("thisis-thisistext").value
        document.getElementById("thisis-cover-text-artist").innerHTML = artistText
    } else {
        document.getElementById("thisis-cover-text-thisis").innerHTML = ""
        document.getElementById("thisis-cover-text-artist").innerHTML = ""
    }
}

document.getElementById("thisis-thisistext").onkeyup = function() {
    const thisisText = this.value
    if (document.getElementById("thisis-artist").value === "") document.getElementById("thisis-cover-text-thisis").innerHTML = thisIsText
}

document.getElementById("thisis-image").onkeyup = function() {
    const imageURL = this.value
    document.getElementById("thisis-cover-img").removeAttribute("src").setAttribute("src", imageURL)
}

document.getElementById("thisis-gradient1").onkeyup = function() {
    const gradient1 = document.getElementById("thisis-gradient1").value
    const gradient2 = document.getElementById("thisis-gradient2").value
    document.getElementById("thisis-cover-bg-gradient").style.background = `linear-gradient(to bottom, ${gradient1}, ${gradient2})`
}
document.getElementById("thisis-gradient2").onkeyup = function() {
    const gradient1 = document.getElementById("thisis-gradient1").value
    const gradient2 = document.getElementById("thisis-gradient2").value
    document.getElementById("thisis-cover-bg-gradient").style.background = `linear-gradient(to bottom, ${gradient1}, ${gradient2})`
}

// This Is #2 Cover Stuff
document.getElementById("thisis2-artist").onkeyup = function() {
    const artistText = this.value
    if (artistText !== "") {
        document.getElementById("thisis2-cover-text-thisis").innerHTML = "T H I S&nbsp;&nbsp;&nbsp;I S :"
        document.getElementById("thisis2-cover-text-artist").innerHTML = artistText
    } else {
        document.getElementById("thisis2-cover-text-thisis").innerHTML = ""
        document.getElementById("thisis2-cover-text-artist").innerHTML = ""
    }
}

document.getElementById("thisis2-artist-color").onchange = function() {
    const thisis2Color = "black white", el = document.getElementById("thisis2-cover-text-artist")
    if (this.value === "white") {
        el.classList.remove(thisis2Color)
        el.classList.add("white")
    } else if (this.value === "black") {
        el.classList.remove(thisis2Color)
        el.classList.add("white")
    }
}

document.getElementById("thisis2-text-position").onchange = function() {
    const el = document.getElementById("thisis2-cover-text")
    if (this.value === "normal") {
        el.classList.remove("regular centered")
        el.classList.add("regular")
    } else if (this.value === "centered") {
        el.classList.remove("regular centered")
        el.classList.add("centered")
    }
}

document.getElementById("thisis2-background").onchange = function() {
    const el = document.getElementById("thisis2-cover")
    if (this.value === "black") el.style.background = "black"
    else if (this.value === "white") el.style.background = "white"
}

document.getElementById("thisis2-logo-color").onchange = function() {
    const logoColors = "black white", el = document.getElementById("thisis2-cover-logo")
    if (this.value === "black") {
        el.classList.remove(logoColors)
        el.classList.add("black")
    } else if (this.value === "white") {
        el.classList.remove(logoColors)
        el.classList.add("white")
    }
}

document.getElementById("thisis2-logo-transparent").onchange = function() {
    const el = document.getElementById("thisis2-cover-logo")
    if (this.value === "yes") {
        el.classList.remove("transparent")
        el.classList.add("transparnet")
    } else if (this.value === "no") {
        el.classList.remove("transparent")
    }
}

document.getElementById("thisis2-image").onkeyup = function() {
    const imageURL = this.value
    document.getElementById("thisis2-cover-img").removeAttribute("src")
    document.getElementById("thisis2-cover-img").setAttribute("src", imageURL)
}

document.getElementById("thisis2-background").onkeyup = function() {
    document.getElementById("thisis2-cover").style.background = this.value
}

// Mix Stuff
document.getElementById("mix-main-color").onkeyup = function() {
    document.querySelector("#mix-cover-bar-left").style.background = this.value
    document.querySelector("#mix-cover-bar-bottom").style.background = this.value
}
document.getElementById("mix-text-color").onkeyup = function() {
    document.getElementById("mix-cover-text").style.color = this.value
}
document.getElementById("mix-text").onkeyup = function() {
    document.getElementById("mix-cover-text").innerHTML = this.value
}
document.getElementById("mix-logo-color").onchange = function() {
    const el = document.getElementById("mix-cover-logo")
    if (this.value === "black") {
        el.classList.remove("black white")
        el.classList.add("black")
    } else if (this.value === "white") {
        el.classList.remove("black white")
        el.classList.add("white")
    }
}
document.getElementById("mix-logo-transparent").onchange = function() {
    const el = document.getElementById("mix-cover-logo")
    if (this.value === "yes") {
        el.classList.remove("transparent")
        el.classList.add("transparent")
    } else if (this.value === "no") {
        el.classList.remove("transparent")
    }
}
document.getElementById("mix-image").onkeyup = function() {
    document.getElementById("mix-cover-img").setAttribute("src", this.value)
}

// Change text position
document.getElementById("position").onchange = function() {
    const text = document.getElementById("cover-text"), logo = document.getElementById("cover-logo")
    if (this.value === "top-left") {
        text.classList.remove("top-left", "top-right", "bottom-left", "bottom-right", "center")
        text.classList.add("top-left")
        logo.classList.remove("default")
        logo.classList.add("top-left")
    } else if (this.value === "top-right") {
        text.classList.remove("top-left", "top-right", "bottom-left", "bottom-right", "center")
        text.classList.add("top-right")
        logo.classList.remove("top-left")
        logo.classList.add("default")
    } else if (this.value === "bottom-left") {
        text.classList.remove("top-left", "top-right", "bottom-left", "bottom-right", "center")
        text.classList.add("bottom-left")
        logo.classList.remove("top-left")
        logo.classList.add("default")
    } else if (this.value === "bottom-right") {
        text.classList.remove("top-left", "top-right", "bottom-left", "bottom-right", "center")
        text.classList.add("bottom-right")
        logo.classList.remove("top-left")
        logo.classList.add("default")
    } else if (this.value === "center") {
        text.classList.remove("top-left", "top-right", "bottom-left", "bottom-right", "center")
        text.classList.add("center")
        logo.classList.remove("top-left")
        logo.classList.add("default")
    }
}

// Change text color
const colors = ["black", "white", "green", "orange", "red", "yellow"]
const logoColors = colors + " none"

document.getElementById("textColor").onchange = function() {
    const el = document.getElementById("cover-text")
    if (this.value === "black") {
        el.classList.remove(...colors)
        el.classList.add("black")
    } else if (this.value === "white") {
        el.classList.remove(...colors)
        el.classList.add("white")
    } else if (this.value === "green") {
        el.classList.remove(...colors)
        el.classList.add("green")
    } else if (this.value === "orange") {
        el.classList.remove(...colors)
        el.classList.add("orange")
    } else if (this.value === "red") {
        el.classList.remove(...colors)
        el.classList.add("red")
    } else if (this.value === "yellow") {
        el.classList.remove(...colors)
        el.classList.add("yellow")
    }
}
document.getElementById("logoColor").onchange = function() {
    const el = document.getElementById("cover-logo")
    if (this.value === "black") {
        el.classList.remove(...logoColors)
        el.classList.add("black")
    } else if (this.value === "white") {
        el.classList.remove(...logoColors)
        el.classList.add("white")
    } else if (this.value === "green") {
        el.classList.remove(...logoColors)
        el.classList.add("green")
    } else if (this.value === "orange") {
        el.classList.remove(...logoColors)
        el.classList.add("orange")
    } else if (this.value === "red") {
        el.classList.remove(...logoColors)
        el.classList.add("red")
    } else if (this.value === "yellow") {
        el.classList.remove(...logoColors)
        el.classList.add("yellow")
    } else if (this.value === "none") {
        el.classList.remove(...logoColors)
        el.classList.add("none")
    }
}

// Change text sizes
const sizes = ["extra-small", "small", "large", "extra-large"]

document.getElementById("textSize").onchange = function() {
    const el = document.getElementById("cover-text")
    if (this.value === "extra-small") {
        el.classList.remove(...colors)
        el.classList.add("extra-small")
    } else if (this.value === "small") {
        el.classList.remove(...colors)
        el.classList.add("small")
    } else if (this.value === "medium") {
        el.classList.remove(...colors)
    } else if (this.value === "large") {
        el.classList.remove(...colors)
        el.classList.add("large")
    } else if (this.value === "extra-large") {
        el.classList.remove(...colors)
        el.classList.add("extra-large")
    }
}

// Change logo transparency
document.getElementById("transparent").onchange = function() {
    const el = document.getElementById("cover-logo")
    if (this.value === "yes") {
        el.classList.remove("transparent")
        el.classList.add("transparent")
    } else if (this.value === "no") {
        el.classList.remove("transparent")
        el.classList.add("transparent")
    }
}

// Change cover div to image
const coverName = "cover", coverExt = "jpg"

document.getElementById("download").onclick = function() {
    html2canvas(document.querySelector("#cover"), {
        useCORS: true,
        onrendered: (canvas) => {
            const context = canvas.getContext("2d")
            const img = new Image()
            img.src = document.getElementById("cover-img").src
            img.onload = context.drawImage(img, 0, 0, 600, 600)
        }
    }).then(canvas => {
        const a = document.createElement("a")
        a.href = canvas.toDataURL()
        a.setAttribute("download", `${coverName}.${coverExt}`)
        a.click()
    })
}
document.getElementById("coverno-download").onclick = function() {
    html2canvas(document.querySelector("#topno-cover"), {
        useCORS: true
    }).then(canvas => {
        const a = document.createElement("a")
        a.href = canvas.toDataURL()
        a.setAttribute("download", `${coverName}.${coverExt}`)
        a.click()
    })
}
document.getElementById("thisis-download").onclick = function() {
    html2canvas(document.querySelector("#thisis-cover"), {
        useCORS: true,
        onrendered: (canvas) => {
            const context = canvas.getContext("2d")
            const img = new Image()
            img.src = document.getElementById("thisis-cover-img").src
            img.onload = context.drawImage(img, 0, 0, 600, 600)
        }
    }).then(canvas => {
        const a = document.createElement("a")
        a.href = canvas.toDataURL()
        a.setAttribute("download", `${coverName}.${coverExt}`)
        a.click()
    })
}
document.getElementById("thisis2-download").onclick = function() {
    html2canvas(document.querySelector("#thisis2-cover"), {
        useCORS: true,
        onrendered: (canvas) => {
            const context = canvas.getContext("2d")
            const img = new Image()
            img.src = document.getElementById("thisis2-cover-img").src
            img.onload = context.drawImage(img, 0, 0, 600, 600)
        }
    }).then(canvas => {
        const a = document.createElement("a")
        a.href = canvas.toDataURL()
        a.setAttribute("download", `${coverName}.${coverExt}`)
        a.click()
    })
}
document.getElementById("mix-download").onclick = function() {
    html2canvas(document.querySelector("#mix-cover"), {
        useCORS: true,
        onrendered: (canvas) => {
            const context = canvas.getContext("2d")
            const img = new Image()
            img.src = document.getElementById("mix-cover-img").src
            img.onload = context.drawImage(img, 0, 0, 600, 600)
        }
    }).then(canvas => {
        const a = document.createElement("a")
        a.href = canvas.toDataURL()
        a.setAttribute("download", `${coverName}.${coverExt}`)
        a.click()
    })
}
