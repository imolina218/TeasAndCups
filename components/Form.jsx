import { useState } from 'react'
import styles from '../styles/Index.module.css'

const Form = () => {

    const initialValues = { email: "" }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
    const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

    const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if (!values.email) {
        errors.email = "Email is required!"
    } else if (!regex.test(values.email)) {
        errors.email = "This is a not valid email format!"
    }
    return errors
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <p>{formErrors.email}</p>
            <input 
                className="inputText" 
                type="email" name="email" 
                placeholder="Enter your email address" 
                value={formValues.email} 
                onChange={handleChange} 
            />
            <button className="inputSubmit">Submit</button>
            {
                Object.keys(formErrors).length === 0 && isSubmit ? 
                <p>Excellent! you will receive news about our community.</p> : 
                null
            }
        </form>
    )
}

export default Form