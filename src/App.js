export const GoodsList = ({ goods }) => (
  <ul>
    {goods.map((good) => (

      <li key={good.id} 
      data-cy="good" 
         style={{ color: good.color }}>
       
        {good.name}
      </li>




    ))}
  </ul>
);
