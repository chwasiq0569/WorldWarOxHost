import React, {useState} from 'react';
import {addTransaction, updateUserCoin} from "../Function/api";
import {Get} from "../Function/database";

const Test = () => {
    const [error, setError] = useState(null);

    const user = Get();

    const handleClick = async () => {
        setError(null);

       const coin_update_result =  await updateUserCoin({
            id: user.id,
            name: user.name,
            values: 100,
            param:2,
            key:1 // add
        });

       console.log(coin_update_result)

/*        const add_transaction_result =  await addTransaction({
            name:user.name,
            operation:'deposit',
            signature: "this_is_test_signature",
            amount: 100,
            token: "BDUCK"
        });

        console.log(add_transaction_result)*/
    };

    return (<div>
            <button onClick={handleClick}>
                'Submit'
            </button>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>);
};

export default Test;
