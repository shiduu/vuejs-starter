new Vue({
    el: '#app',
    data: {
        name: 'shidu',
        anchor: 'https://www.google.com',
        link: '<a href="https://gaana.com/">songs</a>'
    },
    methods: {
        changeName: function(){
            this.name = event.target.value
        },
        returnName: function(){
            return this.name
        }
    }
})