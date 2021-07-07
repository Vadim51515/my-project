import React from 'react';

const DialogsElements = () => {
    let DialogsData = [
        { id: "vadim", name: "Vadim" },
        { id: "andrey", name: "Andrey" },
        { id: "lia", name: "Lia" },
        { id: "nasty", name: "Nasty" },
        { id: "valera", name: "Valera" },
        { id: "sveta", name: "Sveta" },
    ] 

    return (
        <div>
        {DialogsData.map(d => (
        <div>
            <p>{d.name}</p>
            <p>{d.id}</p>
        </div>
        ))}
        </div>
    )
}
export default DialogsElements;