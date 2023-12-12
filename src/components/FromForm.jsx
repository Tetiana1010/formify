const FromForm = (e) => {
    return (
        <div className="flex-1">
            <h2 className="text-xl">From</h2>
            <form className="flex flex-col gap-4 mt-3 divide-y-2">
                <fieldset className="flex flex-col">
                    <label>
                        Name
                        <input type="text" name="name" autocomplete="name" />
                    </label>
                    <label>
                        Email
                        <input type="email" name="email" autocomplete="email" />
                    </label>
                    <label>
                        Address
                        <input type="text" name="adress" autocomplete="street-address" />
                    </label>
                    <label>
                        Phone
                        <input type="tel" name="phone" autocomplete="tel" />
                    </label>
                </fieldset>
                <fieldset className="flex flex-col pt-3">
                    <label>
                        Tax ID
                        <input type="text" name="tax-id"/>
                    </label>
                    <label>
                        IBAN
                        <input type="text" name="IBAN"/>
                    </label>
                </fieldset>
            </form>
        </div>
    );
};

export default FromForm;
