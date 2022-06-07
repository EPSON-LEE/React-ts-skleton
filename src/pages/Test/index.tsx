import React, { useState } from 'react';
import { split as SplitEditor } from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";


const acorn = require('acorn')
const acornLoose = require("acorn-loose");

const Test: React.FC = () => {
    const [value, setValue] = useState(['', ''])

    const onChange = (valueInput: string[]) => {
        console.log(valueInput[0]);
        let result
        try {
            result = acorn.parse(valueInput[0].toString())
        } catch (error) {
            result = acornLoose.parse(valueInput[0].toString(), { ecmaVersion: 6 })
        }
        const value$2 = JSON.stringify(result, null, 2)
        setValue([valueInput[0], value$2])
    }

    return <div>
        <span className='text-2xl'>Acorn pase Demo:</span>
        {/* @ts-ignore */}
        <SplitEditor
            width='100%'
            mode="javascript"
            theme="monokai"
            splits={2}
            orientation="horizontal"
            value={value}
            name="UNIQUE_ID_OF_DIV"
            disabled={false}
            onChange={onChange}
            fontSize={14}
            wrapEnabled={true}
            // readOnly={false}
        />
    </div>
}

export default Test