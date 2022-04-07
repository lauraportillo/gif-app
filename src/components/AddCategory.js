import { useState } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/AddCategory.scss';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('hola mundo');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            // callback
            setCategories(cats => [...cats, inputValue]);
            setInputValue('');
        }

    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;