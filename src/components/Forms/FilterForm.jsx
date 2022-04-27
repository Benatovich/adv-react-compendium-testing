export default function FilterForm({ types, filterChange, selectedType }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <label>
                PokéFilter!
                <select value={selectedType} onChange={(event) => filterChange(event.target.value)}>
                    <option value='all'>All</option>
                    {types.map(({ type }) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    )
}