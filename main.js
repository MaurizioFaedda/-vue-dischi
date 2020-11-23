var app = new Vue ({
    el: '#root',
    data: {
        disc: []
    },
    methods: {

    },

    mounted() {

        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((result) => {

                this.disc = result.data.response;
                console.log(this.disc);

            })

    }
})
