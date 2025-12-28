
function Simpleuseffect (data) {return(<ul>
    {console.log(data)}
      {data.data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>)
}
export default Simpleuseffect;

    
