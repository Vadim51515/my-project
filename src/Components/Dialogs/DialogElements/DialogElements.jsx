import React from 'react';
const DialogsElements = (props) => {
    let DialogsData = [
        { id: "vadim", name: "Vadim" },
        { id: "andrey", name: "Andrey" },
        { id: "lia", name: "Lia" },
        { id: "nasty", name: "Nasty" },
        { id: "valera", name: "Valera" },
        { id: "sveta", name: "Sveta" },
    ]
    let DialogsElementss = DialogsData.map( d =>
        <div>
        <DialogsElements name={d.name} id={d.id} />
        </div>
    )
    return (
        <div>
        {DialogsElementss}
        </div>
    )
}
export default DialogsElements;