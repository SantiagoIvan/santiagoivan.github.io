// Element.getBoundingClientRect() method returns the size of an element and
// its position relative to the viewport.
// scrollY retorna la posicion Y actual en la ventana
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

const q = document.querySelector.bind(document)
const id = document.getElementById.bind(document)
const navToggle = q('.nav-toggle')
const linksContainer = q('.links-container')
const links = q('.links')
const nav = id('nav')
const subirIcon = id('go-to-the-top')

/**A proposito creamos el contenedor de los links, para ocultarlos todos y agregarles el heigh de 0.
 * De esta forma podemos cambiar y agregar los links que queramos al Navbar, y sacarnos
 * de encima el problema de la altura de ese contenedor, haciendolo que se sea de la altura
 * necesaria según la cantidad de links que tengamos.
 * Ademas por defecto está escondido para que sea responsive.
 * Para modificar esa altura, tenemos que agregar el click event al navToggle y que modifique
 * la altura del contenedor, poniendole la altura total que ocuparian los links
 */

// ********** set date ************

// ********** close links ************
navToggle.addEventListener('click', () => {
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    if(containerHeight === 0)//no esta abierto el contenedor
        linksContainer.style.height = `${linksHeight}px`
    else//esta abierto y quiero cerrarlo
        linksContainer.style.height = `0px`
})


// ********** fixed navbar ************
//cuando bajas lo suficiente, se queda clavado el navbar arriba y se pone el botoncito para ir al cielo
// Si scrollY que sería la posición en Y en mi documento, es mayor que la altura del nav
//es porque ya bajé lo suficiente como para pasarlo, asi que lo fixeo
window.addEventListener('scroll', () => {
    const navHeight = nav.getBoundingClientRect().height
    
    if(window.scrollY > navHeight)
        nav.classList.add('fixed-nav')   
    else
        nav.classList.remove('fixed-nav')

    if(window.scrollY > 500)
        subirIcon.classList.add('show-link')
    else
        subirIcon.classList.remove('show-link')
})

// ********** smooth scroll ************
//Esto es para dirigirme a un sector de la pagina como el About, pero que te quede el titulo de la 
//sección arriba, ya que por defecto te lleva a donde se encuentra el contenido de esa seccion
//sin el titulo

// select links
const allLinks = document.querySelectorAll('.scroll-link')
allLinks.forEach( link => {
    link.addEventListener('click', e => {
        e.preventDefault() // para que no vaya a la sección automaticamente porque sucede lo de arriba
        
        const idTarget = e.currentTarget.getAttribute("href").slice(1)//para sacarle el #
        //como el navbar estaba hecho para llevarte a una seccion de la pagina mediante el id selector
        //eso quiere decir que el hred ref está compuesto por #Id, siendo el id de la seccion target
        const target = id(idTarget)

        let position = target.offsetTop //desplazamiento respecto del top para ver donde empieza
        
        //si le mando la posicion de 1, estoy en la situacion por defecto, necesito modificar eso.
        //Esto sucede porque el titulo de la sección es tapado por el Navbar, que esta fixeado. 
        // Entonces a la posicion que consigo necesito sumarle la altura del nav
        const navHeight = nav.getBoundingClientRect().height
        const linksContainerHeight = linksContainer.getBoundingClientRect().height
        const isNavFixed = nav.classList.contains('fixed-nav')

        if(isNavFixed){
            position -= navHeight
        }

        //Cuando el viewort es muy pequeño, voy a tener que sumarle la altura del linksContainer
        //accediendo al link desde ahi, me queda ese espacio por encima del titulo
        //midiendo con el html inspector, la altura del nav sin abrir es de 82
        if(navHeight > 82){//el container esta abierto
            position += linksContainerHeight
        }
        
        window.scrollTo({
            top: position
        })
        //cerrar el link container cuando llego
        linksContainer.style.height = '0px'
    })
})
