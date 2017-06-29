console.log("link test")
const app = {
    intit(selectors) {
        this.flicks = []
        this.max = 0
        this.list = document.querySelector(selectors.listSelect)

        document
            .querySelector(selectors.formSelect)
            .addEventListener('submit', this.handleSubmit.bind(this))
    },

    handleSubmit(ev) {
        ev.preventDefault()
        const form = ev.target
        let flick = {
            name: form.flickName.value,
            id: this.max + 1,
            favStatus: false,
        }

        //add flick to flicks array
        this.flicks.push(flick)
        console.log(this.flicks)

        const listItem = this.renderListItem(flick)
        this.list.appendChild(listItem)

        this.max ++    
    },

    renderListItem(flick) {
        const item = document.createElement('li')
        item.id = this.max
        item.textContent = flick.name

        //TODO add a favorite button to each item, causes a change of appearance
        //     also affects array (change fav status)
        const favButton = document.createElement('BUTTON')
        favButton.id = this.max
        favButton.innerHTML = "<img src=\"https://upload.wikimedia.org/wikipedia/commons/7/79/Operation_Upshot-Knothole_-_Badger_001.jpg\"/>"
        favButton.style.width = "2rem"
        favButton.style.height = "1rem"
        item.appendChild(favButton)

        favButton.addEventListener('click', function() {
            const line = document.getElementById(favButton.id)
            
            if(line.style.backgroundColor === "yellow") {
                line.style.backgroundColor = "white"
            } else {
                line.style.backgroundColor = "yellow"
            }
            // let status = this.flicks[favButton.id - 1].favStatus
            // if(status === false) {
            //     status = true
            //     console.log(this.flicks)
            // } else {
            //     status = false
            // }
        })

        //TODO add a remove button to each item, remove from list and array

        return item
    },

    // changeFav() {
    //     console.log(this.flicks)
    //     console.log(this.favButton.id)
    //     let status = this.flicks[this.favButton.id - 1].favStatus
    //     if(status === false) {
    //         status = true
    //         console.log(this.flicks)
    //     } else {
    //         status = false
    //     }

    //     // console.log(document.querySelector(this.max))
    //     if(status === true) {
    //         //const button = querySelector("b" + this.max + "")
    //         //console.log(button)
    //         //button.style.backgroundColor = "yellow"
    //     }
    // },
}


app.intit({
    formSelect: 'form#flick-form', 
    listSelect: '#flick-list',
})