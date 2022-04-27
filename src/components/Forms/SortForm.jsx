import React from 'react'

export default function SortForm({ sortChange, selectedSort }) {
    return (
        <div>
            <h3>PokéSort!</h3>
            <input
                id='asc'
                type='radio'
                name='sort'
                value='asc'
                onChange={(e) => sortChange(e.target.value)}
                checked={selectedSort === 'asc'}
            />
            <label htmlFor='asc'>Ascending</label>
            <input
                id='desc'
                type='radio'
                name='sort'
                value='desc'
                onChange={(e) => sortChange(e.target.value)}
                checked={selectedSort === 'desc'}
            />
            <label htmlFor='desc'>Descending</label>
            <input
                id='reset'
                type='radio'
                name='sort'
                value=''
                onChange={(e) => sortChange(e.target.value)}
            />
            <label htmlFor='reset'>Reset Sort</label>
        </div>
    )
}