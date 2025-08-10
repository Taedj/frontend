import axios from 'axios'

export const colors = {
    'primaryColor':'#20C997',
    'navbarColor':'rgb(17, 20, 24)',
    'menuColor':'rgba(0, 0, 0, 0.95)',
    'menuItemBorderColor':'rgba(250, 250, 250, 0.15)',
    'backgroundVeryDarkColor':'#111418',
    'backgroundDarkColor':'rgb(33, 37, 41)',
    'backgroundLessDarkColor':'#343A40',
    'backgroundTextDarkColor':'rgb(108, 117, 125)',
    'backgroundLessTextDarkColor':'rgba(255, 255, 255, 0.5)',
    'cellDescriptionColor':'rgb(222, 227, 228)',
    'whiteWithOpacity':'rgba(255,255,255,0.9)',
    'borderColor':'rgba(250, 250, 250, 0.12)',
    'summaryBoxBackgroundColor':'rgb(17, 20, 24)',
    'fbColor':'#1877F2',
    'twColor':'#1DA1F2',
    'ghColor':'#AAB1B8',
    'gmColor':'#D14836',
    'liColor':'#0077B5',
    'rgColor':'#00CCBB',
    'uColor':'#a51c30',
    'gsColor':'#FBBC05',
    'categoriesSelectorColor':'rgb(221, 221, 221)',
    'starColor':'rgb(255, 193, 7)',
    'JobModelColor':'rgb(52, 58, 64)'
}

export const dimensions = {
    breakpoint:768,
    'sideBarWidth':'24rem',
    'mobileBreakpoint':992,
    'summaryBreakpoint':768,
    'jobModelSliderWidthSmall':768,
    'aboutBreakpoint':768,
    'jobModelSliderWidthMedium':1200,
}

export const fontSettings = {
    'fontFamily':'Poppins, sans-serif'
}

export const sections = [
    'Home',
    'About-Me',
    'What-I-Do',
    'Resume',
    'Portfolio',
    'Testimonials',
    'Contact'
]

export const specialities = [
    "I'm a UX/UI Designer",
    "I'm a Mechanical engineer",
    "I'm a professor"
]

const categories = ['All']

export const socialMediasLinks = {
    'facebook':'https://www.facebook.com/tidjani.zitouni.142',
    'linkedin':'https://www.linkedin.com/in/dr-tidjani-ahmed-zitouni-a9b3b71a4/',
    'researchGate':'https://www.researchgate.net/profile/Tidjani-Ahmed-Zitouni?ev=hdr_xprf',
    'googleScholar':'https://scholar.google.com/citations?user=qifRUIAAAAAJ',
    'personalUnivPage':'https://perso.univ-annaba.dz/fr/zitouni-tidjani-ahmed.1000823.html'
}

axios.get('http://127.0.0.1:8000/home/services_categories/').then((res) => {
    res.data.map((item:any) => {
        categories.push(item.category)
    })
})

export { categories }