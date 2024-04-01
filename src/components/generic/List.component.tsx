import React from 'react'

type ListProps<T> = {
    items :T[]
    Onclick : (value : T) => void
}

const ListComponent = <T extends {id:number}>({items,Onclick}: ListProps<T>) => {
  return (
    <div>
        {items.map((item) => <div key={item.id} onClick={() => Onclick(item)}>
            {item}
        </div>)}
    </div>
  )
}

export default ListComponent