import React from "react";
import "../css/box.css";
import "../css/shelf.css";
import "../css/Tile.css";
import '../css/App.css';

import { imageLocalCall } from "../apis/ImageLocalCall";
import longPress from '../apis/longPress';
import { Selected } from "./ui-elements";

//import { A, navigate } from "hookrouter";
import { Link } from "react-router-dom";
import { translate } from "../utils/lang";

function Tile2(props) {
    const longPressEvent = props.onLongPress ? longPress(() => props.onLongPress(), 500) : {};

    let imageSrc = props.imageName ? imageLocalCall(props.imageName) : undefined;
    let body = <div>
        <div className="tileBox boxhost" theme="blue" theme-flavor={props.themeFlavor}
            style={{
                width: props.dimensions.boxWidth
            }}>
            <div className="box" >
                <header>
                    <span></span>
                    <div></div>
                </header>
                <main>
                    <div style={{ width: props.dimensions.imageBoxWidth }}>
                        {imageSrc ? <img className="tileImg" src={imageSrc} alt={translate("MissingImageAlt")} /> : null}
                        {props.selected ? <div style={{ display: 'flex', position: 'absolute', right: -17, bottom: -25, zIndex: 5 }}><Selected /></div> : null}
                    </div>

                </main>
            </div>
            <div className="tileText">
                {props.tileName}
            </div>
        </div>
        {/* <div className="shelfhost">
            <div className="shelf" style={{ width: props.dimensions.shelfWidth }}>
                <div className="container">
                    <h2 className="rtl tileText">{props.tileName}</h2>
                </div>
            </div>
        </div> */}
    </div>

    return (
        <div {...longPressEvent} className="tileGroup noTouchCallout" style={{ width: props.dimensions.tileGroupWidth }} >
            {props.tileUrl !== "" && !props.selected ? <Link to={props.tileUrl}>{body}</Link> : body}
        </div>
    );
}

export default Tile2;
