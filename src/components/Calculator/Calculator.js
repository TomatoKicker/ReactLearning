/* eslint no-eval: 0 */
import React from "react";
import '../../css/Calculator/Calculator.css'
import { useState } from 'react';
function Calculator() {
    const [result, setResult] = useState('');
    const clickHandle = (event) => {
        setResult(result.concat(event.target.value));
    }
    const clearResult = () => {
        setResult('');
    }
    const calculate = () => {
        setResult(eval(result).toString());
    }

    return (
        <div className="calculator">
            <input type={"text"} placeholder={0} id={'answer'} value={result} />
            <input type={'button'} value={'9'} className='button' onClick={clickHandle} />
            <input type={'button'} value={'8'} className='button' onClick={clickHandle}  />
            <input type={'button'} value={'7'} className='button' onClick={clickHandle}  />
            <input type={'button'} value={'6'} className='button' onClick={clickHandle}  />
            <input type={'button'} value={'5'} className='button' onClick={clickHandle}  />
            <input type={'button'} value={'4'} className='button' onClick={clickHandle}  />
            <input type={'button'} value={'3'} className='button' onClick={clickHandle}  />
            <input type={'button'} value={'2'} className='button' onClick={clickHandle}  />
            <input type={'button'} value={'1'} className='button' onClick={clickHandle}  />

            <input type={'button'} value={'0'} className='button' onClick={clickHandle}  />
            <input type={'button'} value={'+'} className='button' onClick={clickHandle}  />
            <input type={'button'} value={'-'} className='button' onClick={clickHandle}  />
            <input type={'button'} value={'/'} className='button' onClick={clickHandle}  />
            <input type={'button'} value={'*'} className='button' onClick={clickHandle}  />
            <input type={'button'} value={'%'} className='button' onClick={clickHandle}  />
            <input type={'button'} value={'.'} className='button' onClick={clickHandle}  />

            <input type={'button'} value={'CE'} className='button' onClick={clearResult} />
            <input type={'button'} value={'='} className='button' onClick={calculate} />
        </div>
    )
}

export default Calculator;