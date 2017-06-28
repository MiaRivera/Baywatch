console.log("link test")
const app = {
    intit(selectors) {
        this.max = 0
        this.list = document.querySelector(selectors.listSelect)

        document
            .querySelector(selectors.formSelect)
            .addEventListener('submit', this.handleSubmit.bind(this))
    },

    handleSubmit(ev) {
        ev.preventDefault()
        const form = ev.target
        const flick = {
            name: form.flickName.value,
            id: this.max + 1,
        }

        const listItem = this.renderListItem(flick)
        this.list.appendChild(listItem)

        this.max ++    
    },

    renderListItem(flick) {
        const item = document.createElement('li')
        item.textContent = flick.name
        return item
    },
}
app.intit({
    formSelect: 'form#flick-form', 
    listSelect: '#flick-list',
})