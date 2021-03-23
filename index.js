module.exports = async(time = new Date().getTime()) => {
    let h = new Date(time).getHours()
    let m = new Date(time).getMinutes()
    
    if (h < 10) h = "0"+h
    if (m < 10) m = "0"+m
    
    if (h >= 3) h = h
    
    return `${h}:${m}`
}

module.exports.fromEnToPt = async(time = new Date().getTime()) => {
    let h = new Date(time).getHours()
    let m = new Date(time).getMinutes()
    
    if (h < 10) h = "0"+h
    if (m < 10) m = "0"+m
    
    if (h >= 3) h = h-3
    
    return `${h}:${m}`
}

module.exports.today = async(time = new Date().getTime(), locale = "pt") => {
    let d = new Date(time)
    let a = undefined
    
    if (locale === "pt") {
        let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        a = d.toLocaleDateString('pt-BR', options)
    }
    if (locale === "en") {
        let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        a = d.toLocaleDateString('en-US', options)
    }
    
    return `${a}`
}