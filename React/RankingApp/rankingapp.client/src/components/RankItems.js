import React, {useState, useEffect} from 'react';

const Rankitems = () => {
    const [items, setItems] = useState([]);
    const dataType = 1;

    useEffect(() => {
        fetch(`item/${dataType}`)
            .then((result) => {
                return result.json();
            })
            .then(data => {
                setItems(data);
            })
    }, [])

    return (
        <div>
            {
                (items != null) ?
                    items.map((item) => <h3>{item.Title}</h3>)
                :
                    <div>
                        Loading...
                    </div>
                
            }
        </div>
    )
}