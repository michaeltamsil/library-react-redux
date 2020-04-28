import React, { useState } from 'react';
import FacebookLogin from './FacebookLogin';

const Index = () => {
    const [data, setData] = useState({
        wings: true,
        cheeseBurger: false,
        gender: "male"
    })

    const handleChange = (event) => {
        const { checked, name, type, value } = event.currentTarget;
    
        let newValue = value;
        if ( type =="checkbox") {
            newValue=checked
        }
        console.log(name, value)
        setData({
            ...data, [name]: newValue 
        })
    }
    return (
        <div>
            <FacebookLogin/>
            <div className="mb-3">
                <h3>checkbox</h3>
                <div className="form-check form-check-inline">
                    <input type="checkbox" className="form-check-input" id="1" onChange={handleChange} checked={data.wings} name="wings"/>
                    <label class="form-check-label" htmlFor="1">Check me out</label>
                </div>
                <div className="form-check form-check-inline">
                    <input type="checkbox" className="form-check-input" id="2" onChange={handleChange} checked={data.cheeseBurger} name="cheeseBurger"/>
                    <label class="form-check-label" htmlFor="2">Cheese burger</label>
                </div>
            </div>
            <div className="mb-3">
                <h3>Radio Button</h3>
                <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input" id="2a" value="male" name="exampleRadios" name="gender" onChange={handleChange} checked={ data.gender === "male" }/>
                    <label className="form-check-label" htmlFor="2a">Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input" id="3" value="female" name="exampleRadios" name="gender" onChange={handleChange} checked={ data.gender === "female" }/>
                    <label className="form-check-label" htmlFor="3">Female</label>
                </div>
            </div>
            <div className="mb3">
                <h3>date</h3>
                <input type="date" name="tgl" onChange={handleChange}/>
          
                <form className="form-inline">
                    <input className="form-control" type="datetime-local" name="datetime-local" onChange={handleChange}/>
                </form>
                <input type="month" name="bulan" onChange={handleChange}/>
                <input type="time" name="jam" onChange={handleChange}/>
                <br/>
                <textarea name="paragraph" onChange={handleChange}>{data.paragraph}</textarea>
            </div>
        </div>
    )
}

export default Index;