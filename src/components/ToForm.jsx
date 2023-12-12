const ToForm = (e) => {
    return (
        <div className="flex-1">
            <h2 className="text-xl">To</h2>
            <form className="flex flex-col mt-3">
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
            </form>
        </div>
    );
};

export default ToForm;
