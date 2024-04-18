import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className='App'>
        <TwitterFollowCard  userName="minudev" name="Miguel Ángel Durán" initialIsfollowing={true}/>
        <TwitterFollowCard  userName="phrealb" name="Pablo Hernandez"/>
        <TwitterFollowCard  userName="vxnder" name="vanderhart"/>
        </section>
    )
}