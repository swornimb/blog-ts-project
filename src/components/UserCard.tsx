import { FaUserCircle } from "react-icons/fa"

interface UserCardInterface{
    person: {name:string, following: boolean}
}

const UserCard = ({person}:UserCardInterface)=>{
  return (
    <div className="flex items-center justify-between">
        <section className="flex items-center">
            <FaUserCircle className="text-3xl mr-3 text-gray-59"/>
            <span>{person.name}</span>
        </section>
        <button className={person.following?'rounded border-2 p-0.5 border-black-200':'rounded border-2 p-0.5 border-gray-200'} >{person.following?'Following':'Follow'}</button>
    </div>
  )
}

export default UserCard