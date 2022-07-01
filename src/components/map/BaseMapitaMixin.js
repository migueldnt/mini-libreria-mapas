import Map from 'ol/Map';

import View from 'ol/View';

export default {
    props:["center","zoom"],
    data(){
        return {
            OL_map:undefined
        }
    },
    mounted(){
       

        this.OL_map = new Map({
            target: this.$refs["mapa_div"],
            layers:[
            ],
            view: new View({
              center: this.center,
              zoom: this.zoom,
              projection: 'EPSG:4326'
            })
        })        
    },
    methods:{
        getMapAfterInitialized(callbackOnFound){
            const checkOlMapExists=()=>{
                if(this.OL_map){
                    callbackOnFound(this.OL_map)
                }else{
                    setTimeout(checkOlMapExists,20)
                }
            }
            checkOlMapExists()
        }
    },
    provide(){
        return {
            getOLMap:this.getMapAfterInitialized
        }
    }
}