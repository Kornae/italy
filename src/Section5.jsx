import React from "react";
import ColorInversionFooter from "./Footer";

export default function Section5(props) {
    return (
        <div id="s5-container">
            <div id="s5-footer">
                <div id="footer">
                    <ColorInversionFooter
                        home={props.home}
                        overview={props.overview}
                        explore={props.explore}
                        food={props.food}
                    />
                </div>
            </div>
        </div>
    )
}