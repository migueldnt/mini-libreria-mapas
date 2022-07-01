

export default {
    props:{
        visible:{
            type: Boolean,
            default:true
        },
        opacidad:{
            type: Number,
            default:1
        }
    },
    data(){
        return{
            OL_layer:undefined,
            OL_map:undefined
        }
    },
    
    methods:{
        registrarEnMapa(){
            this.getOLMap((OlMap)=>{
                this.OL_map = OlMap
                this.OL_map.addLayer(this.OL_layer)
            })
        }
    },
    render(){
        return null
    },
    inject:["getOLMap"],
    watch:{
        visible(value,oldValue){
            this.OL_layer.setVisible(value)
        }
    },
    destroyed(){
        this.OL_map.removeLayer(this.OL_layer)
    }
}