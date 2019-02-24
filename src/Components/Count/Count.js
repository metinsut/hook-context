import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalProvider';

const Count = () => {
   const { counts } = useContext(GlobalContext);

   const inc = () => counts.dispatchCount({ type: 'increment' });
   const dec = () => counts.dispatchCount({ type: 'decrement' });
   const reset = () => counts.dispatchCount({ type: 'reset' });

   return (
      <section>
         <p>{counts.stateCount.count}</p>
         <br />
         <button onClick={inc}>Increase</button>
         <button onClick={dec}>Decrease</button>
         <button onClick={reset}>Reset</button>
      </section>
   );
};

export default Count;
