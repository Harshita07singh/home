import React from 'react'
const hero1 = require('../assets/images/hero1.png');
const hero2 = require('../assets/images/hero2.png');
const hero3 = require('../assets/images/hero3.png');
const hero4 = require('../assets/images/hero4.png');
const hero5 = require('../assets/images/hero5.png');

const trading = () => {
return (
    <div>
        <div className="container fl-design">
            <div className="d-flex mb-3 flex-wrap">
                <div className="p-4 flex-fill outex">Our Trading Partners</div>
                <div className="p-2 flex-fill">
                    <img src={hero1} className="img-fluid" alt="hero1" />
                </div>
                <div className="p-2 flex-fill">
                    <img src={hero2} className="img-fluid" alt="hero2" />
                </div>
                <div className="p-2 flex-fill">
                    <img src={hero3} className="img-fluid" alt="hero3" />
                </div>
                <div className="p-2 flex-fill">
                    <img src={hero4} className="img-fluid" alt="hero4" />
                </div>
                <div className="p-2 flex-fill">
                    <img src={hero5} className="img-fluid" alt="hero5" />
                </div>
            </div>
        </div>
    </div>
)
}

export default trading
