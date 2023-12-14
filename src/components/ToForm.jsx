const ToForm = (e) => {
    return (
        <div className="flex-1">
            <h2 className="text-xl">To</h2>
            <form className="flex flex-col mt-3">
                <fieldset className="flex flex-col">
                    <div>
                        <label>
                            First Name
                            <input type="text" name="firstname" autoComplete="name" />
                        </label>
                        <label>
                            Last Name
                            <input type="text" name="lastname" autoComplete="name" />
                        </label>
                    </div>
                    <label>
                        Email
                        <input type="email" name="email" autoComplete="email" />
                    </label>
                    <label>
                        Phone
                        <input type="tel" name="phone" autoComplete="tel" />
                    </label>
                </fieldset>
            </form>
        </div>
    );
};

export default ToForm;
