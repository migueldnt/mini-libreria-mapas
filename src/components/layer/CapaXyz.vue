<script>
import { XYZ } from 'ol/source';
import {Tile as TileLayer} from 'ol/layer';
import CapaMixin from "./CapaMixin"

export default {
    mixins:[CapaMixin],
    props:{
        url:{
            type:String,
            default:"http://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        }
    },
    created(){
        this.OL_layer = new TileLayer({
            source: new XYZ({
                url:this.url
            }),
            visible: this.visible,
            opacity:this.opacidad
        })

        this.registrarEnMapa()
    }
}
</script>