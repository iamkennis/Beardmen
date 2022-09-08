import React from 'react';



export default function Input(props) {
    const { value, onChange, className, ...rest } = props
    
    function handleChange(e) {
        if (onChange) {
            onChange(e.target.value);
        }
        return null
    }

    return (
			<label>
				<input
					autoComplete='off'
					autoCorrect='off'
					autoCapitalize='off'
					spellCheck='false'
					required
                onChange={handleChange}
                {...rest}
				/>
			</label>
		);
}