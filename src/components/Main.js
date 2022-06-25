import data from '../data.js';
import Card from './Card.js';

export default function Main() {

   const cards = data.map((item, idx) => {
      return (<div key={item.title}>
         <Card
            {...item}
         />
         {data[idx + 1] && <hr />}
      </div>)
   });
   
   return (
      <main className='cards'>
         {cards}
      </main>
   )
}