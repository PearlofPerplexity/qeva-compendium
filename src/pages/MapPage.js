import { MapIcon } from "../utils/icon";
import avlimMap from '../assets/imgs/maps/avlim-map.jpg'
import InnerSmNav from "../features/navs/InnerSmNav";

const MapPage = () => {
    return (
        <div className="py-2 px-3">
            <InnerSmNav icon={MapIcon} name="Map" />
            <div className="row">
                <div className="col-12">
                    <img src={avlimMap} alt='Map of Avlim' style={{width: '100%'}} />
                </div>
            </div>
        </div>
    );
}

export default MapPage;