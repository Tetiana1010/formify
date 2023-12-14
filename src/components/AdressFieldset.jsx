import country from 'country-list-js';

const AdressFieldset  = () => {
    const countries = country.names();

    return (<fieldset className='flex flex-wrap gap-x-4'>
        <label className='w-full'>
            Country
            <select>
                {
                    countries.map(country => <option key={country} value={country}>{country}</option>)
                }
            </select>
        </label>
        <label className="max-w-1/2">
            City
            <input type='text' name="city" />
        </label>
        <label className="max-w-1/2">
            ZIP / Postal code
            <input type='text' pattern="[0-9]{5}" autoComplete='postal-code'/>
        </label>
    </fieldset>);
}

export default AdressFieldset;
