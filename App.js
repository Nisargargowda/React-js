import React from "react";

export default function Form()
{
    const[formData, setFormData]=React.useState({
        firstName: "",
        lastName: "", 
        email: "",
        comments: "",
        isFriendly: false   ,
        employement:"",
        favColor:""
    })

    function handleClick(event){
        const {type, name, checked, value} = event.target
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: type==="checkbox"? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleClick}
                name="firstName"
                value={formData.firstName}
            />
            <br/>
            <br/>

            <input 
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleClick}
            />
            <br/>
            <br/>

            <input 
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleClick}
            />
            <br/>
            <br/>

            <textarea 
                name="comments"
                value={formData.comments}
                placeholder="Comments"
                onChange={handleClick}
            />
            <br/>
            <br/>

            <input 
                name="isFriendly"
                type="checkbox"
                checked={formData.isFriendly}
                onChange={handleClick}
                id="isFriendly"
            />
            <br />
            <br/>

            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />
            <fieldset>
                <legend>Current Employement Status</legend>

                <input 
                    type="radio"
                    id="unemployed"
                    name="employement"
                    value="unemployed"
                    onChange={handleClick}
                    checked={formData.employement === "unemployed"}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />

                <input 
                    type="radio"
                    id="part-time"
                    name="employement"
                    value="part-time"
                    onChange={handleClick}
                    checked={formData.employement === "part-time"}
                />
                <label htmlFor="part-time">Part-time </label>
                <br />

                <input 
                    type="radio"
                    id="full-time"
                    name="employement"
                    value="full-time"
                    onChange={handleClick}
                    checked={formData.employement === "full-time"}
                />
                <label htmlFor="full-time">Full-TIme</label>
                <br />

                <br />
                <legend>What is your favourite color?</legend>
                <br />
                <select 
                    id="favColor"
                    name="favColor"
                    value={formData.favColor}
                    onChange={handleClick}
                >
                <option value="">--Choose--</option>
                <option value="red">Red</option>
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="pink">Pibk</option>
                <option value="purple">purple</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>

                </select>
                 
            </fieldset>
            <button>Submit</button>
        </form>
    )
}