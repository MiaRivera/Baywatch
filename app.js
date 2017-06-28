console.log("link test")
const app = {
    intit: function(formSelect) {
        this.max = 0
        document
            .querySelector(formSelect)
            .addEventListener('submit', this.handleSubmit.bind(this))
    },

    handleSubmit: function(ev) {
        ev.preventDefault()
        const form = ev.target
        const flick = {
            name: form.flickName.value,
            id: this.max + 1,
        }

        console.log(flick)
        this.max ++    
    },
}
app.intit('form#flick-form')