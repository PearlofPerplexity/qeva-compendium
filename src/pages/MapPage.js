import {
    Magnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
  } from "react-image-magnifiers";
import { MapIcon } from "../utils/icon";
import avlimMap from '../assets/imgs/maps/avlim-map.jpg'
import InnerSmNav from "../features/navs/InnerSmNav";

const MapPage = () => {
    return (
        <div className="py-2 px-3">
            <InnerSmNav icon={MapIcon} name="Map" />
            <div className="row">
                <div className="col-9">
                <Magnifier
                    imageSrc={avlimMap}
                    imageAlt="Map of Avlim"
                    mouseActivation={MOUSE_ACTIVATION.SINGLE_CLICK}
                    touchActivation={TOUCH_ACTIVATION.SINGLE_TAP}
                    />
                </div>
            </div>
        </div>
    );
}

export default MapPage;