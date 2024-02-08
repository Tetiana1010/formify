// import { useState } from 'react';

// import AdressFieldset from './AdressFieldset';
import ModalLauncher from "./ModalLauncher.tsx";

const FromForm = (e) => {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');

  return (
    <div className="flex-1">
      <ModalLauncher userType="sender" />
      {/* <form className="flex flex-col gap-4 mt-3 divide-y-2">
                <fieldset className="flex flex-col">
                    <div className="flex gap-2">
                        <label>
                            First name
                            <input
                                type="text"
                                name="firstName"
                                autoComplete="given-name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Last name
                            <input
                                type="text"
                                name="lastName"
                                autoComplete="family-name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Phone
                        <input type="tel" name="phone" autoComplete="tel" />
                    </label>
                </fieldset>
                <AdressFieldset />
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
            </form> */}
    </div>
  );
};

export default FromForm;
