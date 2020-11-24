var app = new Vue ({
    el: '#root',
    data: {
        discs: [],
        selected_genre: '',
        genres:[]

    },
    methods: {
        selected(){
        },

        order_up(){
            this.discs.sort(function(a, b){
                return a.year-b.year
            })
        },

        order_down(){
            this.discs.sort(function(a, b){
                return b.year-a.year
            })
        }


    },

    computed: {


    },

    mounted() {

        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((result) => {

                this.discs = result.data.response;

                this.discs.forEach((item) => {
                    if(!this.genres.includes(item.genre)) {
                        this.genres.push(item.genre)
                    }
                })


            })





    }






})
