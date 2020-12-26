function create(name, props) {
    const element = document.createElement(name)
    for (const prop in props) {
        element[prop] = props[prop]
    }
    return element
}

window.addEventListener("load", () => {
    document.body.insertBefore(create("A", {
        id : "home",
        title : "Home",
        innerText : "Home",
        href : "/",
    }), document.body.firstChild)

    const footer = (() => {
        const footer = document.getElementsByName("footer")[0]
        if (footer) {
            return footer
        }
        return document.body.appendChild(create("footer", {}))
    })()
    footer.append(create("span", {innerText : "Copyright © 2015-2021 Łukasz A.J. Wrona"}))
})
