import React, { useState } from 'react'

export const TextInput = () => {
    const [text, setText] = useState('');
    return (
        <TextInput
            label="Email"
            value={text}
            onChangeText={text => setText(text)}
        />
    )
}
