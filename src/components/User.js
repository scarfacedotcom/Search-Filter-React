


export default function User({user}) {
  return (
    <div>
      <tr>
        <td>{user.serial_number}</td>
        <td>{user.name}</td>
        <td>{user.gender}</td>
        <td>{user.age}</td>
        <td>{user.country}</td>
        <td>{user.student}</td>
        <td className='fav-lang'>{user.fav_lang}</td>
      </tr>
    </div>
  )
}
