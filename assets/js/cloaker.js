let inFrame
// This code isnt mine obviously
// Original code comes from interstellar
// sorry for skidding code 
// check there site out since ur alrdy here
// discord.gg/gointerstellar


try {
    inFrame = window !== top
} catch (e) {
    inFrame = true
}

if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const popup = open("about:blank", "_blank")
    if (!popup || popup.closed) {
        alert(" The following tab shows in your history. Allow popups and redirects to hide this from showing up in your history. or don't. ")
    } else {
        const doc = popup.document
        const iframe = doc.createElement("iframe")
        const style = iframe.style
        const link = doc.createElement("link")

        const name = localStorage.getItem("name") || "TORT";
        const icon = localStorage.getItem("icon") || "https://i.ytimg.com/vi/Xs5c3-Gtkbk/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AG-AYACkAGKAgwIABABGBMgEyh_MA8=&rs=AOn4CLCyRPXhcS1SECLaG1Pym9LAy8JB7A";
        
        doc.title = name;
        link.rel = "icon";
        link.href = icon;
        
        iframe.src = location.href
        style.position = "fixed"
        style.top = style.bottom = style.left = style.right = 0
        style.border = style.outline = "none"
        style.width = style.height = "100%"

        doc.head.appendChild(link);
        doc.body.appendChild(iframe)
        location.replace("https://classroom.google.com")
    }
}
