import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className='App'>
        
        <TwitterFollowCard userName="minudev" name="Miguel Ángel Durán"/>
        <TwitterFollowCard userName="phrealb" name="Pablo Hernandez"/>
        <TwitterFollowCard userName="elonmusk" name="Elon Musk"/>
        <TwitterFollowCard userName="vxnder" name="vanderhart"/>
        </section>
    )
}