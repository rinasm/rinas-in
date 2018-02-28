/**
 * Created by intellicar-rinas on 28/2/18.
 */
import React, {Component} from 'react';
import './Home.css';
import $ from 'jquery';
import bg1 from '../../assets/images/bg1.jpg';
import man from '../../assets/images/man.png';

class Home extends Component {

    constructor() {
        super();

        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        this.vCenter = this.windowWidth / 2;
        this.hCenter = this.windowHeight / 2;

        const ThreeDEls = ['floor1', 'grill1', 'grill2', 'wall1', 'bg1', 'man1'];


        window.addEventListener('mousemove', e=> {
            this.mouseXRaw = e.screenX;
            this.mouseYRaw = e.screenY;
            this.mouseX = this.mouseXRaw - (this.vCenter * 2);
            this.mouseY = this.mouseYRaw;
            let margin;
            let el;
            let jqEl;
            for(let idx in ThreeDEls) {
                if(this.refs[ThreeDEls[idx]]) {
                    el = this.refs[ThreeDEls[idx]];
                    jqEl = $(el);
                    margin = calculateMargin(jqEl);
                    jqEl.css({marginLeft:margin.left, marginTop: margin.top});
                }
            }

        });


        const calculateMargin =(item)=> {
            return {
                left: this.mouseX * item.attr('ratio') / 100 * 2,
                top: this.mouseY * item.attr('ratio') / 100
            }
        };

    }

    render() {
        return (
            <div className="Home">
                <div className="h-container">
                    <div className="hc-bg1" ref="bg1" ratio={1}><img src={bg1}/></div>
                    <div className="hc-wall" ref="wall1" ratio={10}></div>
                    <div className="hc-floor" ref="floor1" ratio={10}></div>
                    <div className="hc-grill1" ref="grill1" ratio={10}></div>
                    <div className="hc-man" ref="man1" ratio={5}><img src={man}/></div>
                    <div className="hc-grill2" ref="grill2" ratio={4.7}></div>
                </div>
            </div>
        )
    }

}

export default Home;